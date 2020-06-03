const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    avatar: String,
    username: String,
    name: String,
    email: String,
    birthday: { type: Date },
    password: String
});

module.exports = mongoose.model('SignUp', SignUpSchema);
