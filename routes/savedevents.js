const router = require('express').Router();
let Savedevents = require('../models/savedevents.model');

router.route('/').get((req, res) => {
    Savedevents.find()
        .then(savedevents => res.json(savedevents))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;

    const newSavedevents = new Savedevents({
        username,
        title,
    });

    newSavedevents.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Savedevents.findById(req.params.id)
    .then(savedevents => res.json(savedevents))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Savedevents.findByIdAndDelete(req.params.id)
        .then(() => res.json('Saved Event deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Savedevents.findById(req.params.id)
        .then(savedevents => {
            savedevents.username = req.body.username;
            savedevents.title = req.body.title;

            savedevents.save()
                .then(() => res.json('Saved Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;