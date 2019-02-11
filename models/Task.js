const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true},
    completed: { type: Boolean, default: false, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Task', taskSchema);