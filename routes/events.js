const router = require('express').Router();
let Events = require('../models/events.model');
var ticketmaster = require('ticketmaster');



router.route('/').get((req, res) => {
    Events.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
    ticketmaster(process.env.REACT_APP_TM_KEY).discovery.v2.event.all()
        .then(function (result) {
            // "result" is an object of Ticketmaster events information

            const searchResultArray = result.items;
            // console.log(searchResultArray[searchResultArray.length-1]);
            const finalSearchResults = [];

            for (let sr of searchResultArray) {

                if (sr.classifications[0].segment.name.toLowerCase() === 'music') {
                    const eventId = sr.id;
                    const eventName = sr.name;
                    const eventImg = sr.images[0].url
                    const eventCategory = sr.classifications[0].segment.name;
                    const eventStartDate = sr.dates.start.localDate;
                    const eventStartTime = sr.dates.start.localTime;
                    const eventVenue = sr._embedded.venues[0].name;
                    const eventAddress = sr._embedded.venues[0].address.line1;
                    const eventCity = sr._embedded.venues[0].city.name;
                    const eventState = sr._embedded.venues[0].state;
                    const eventCountry = sr._embedded.venues[0].country.name;

                    const newObject = {
                        id: eventId,
                        event_name: eventName,
                        event_img: eventImg,
                        event_category: eventCategory,
                        event_date: `${eventStartDate} ${eventStartTime}`,
                        event_venue: eventVenue,
                        event_address: `${eventAddress}, ${eventCity}, ${eventState ? eventState.stateCode : ''} ${eventCountry}`
                    }

                    finalSearchResults.push(newObject);

                }
            }
            res.json(finalSearchResults);
        });
});

router.route('/event/add').post((req, res) => {
    const title = req.body.title;
    const location = req.body.location;
    const date = Date.parse(req.body.date);

    const newEvent = new Events({
        title,
        location,
        date,
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Events.findById(req.params.id)
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Events.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Events.findById(req.params.id)
        .then(events => {
            events.title = req.body.title;
            events.location = req.body.location;
            events.date = Date.parse(req.body.date);

            events.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;