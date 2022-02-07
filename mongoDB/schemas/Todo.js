const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    endDate: Date,
    title: String,
    details: String,
    createDate: { type: Date, default: new Date() }
});

const TodoModel = mongoose.model('Todos', TodoSchema)

module.exports = { TodoModel };

