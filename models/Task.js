const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true},
    completed: { type: Boolean, default: false, required: true },
    startedAt: { type: Date, required: true },
    finishedAt: { type: Date, required: true },
    describtion: { type: String }
});

module.exports = mongoose.model('Task', taskSchema);