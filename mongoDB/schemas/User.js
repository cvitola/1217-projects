const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: [true, 'email obligatorio']},
    password: String,
    age: Number,
    createDate: { type: Date, default: new Date() }
});

const UserModel = mongoose.model('Users', UserSchema)

module.exports = { UserModel };