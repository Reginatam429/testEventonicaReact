const router = require('express').Router();
let Events = require('../models/events.model');

router.route('/').get((req, res) => {
    Events.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
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