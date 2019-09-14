const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    title: { type: String, required: true, unique: true, trim: true, minlength: 3},
    location: { type: String, required: true, trim: true},
    date: { type: Date, required: true, trim: true }
}, {
    timestamps: true,   
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;