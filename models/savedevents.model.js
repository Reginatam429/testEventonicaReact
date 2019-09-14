const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savedeventsSchema = new Schema({
    username: {type: String, required: true, trim: true},
    title: { type: String,required: true, trim: true}
}, {
    timestamps: true,   
});

const Savedevents = mongoose.model('Savedevents', savedeventsSchema);

module.exports = Savedevents;