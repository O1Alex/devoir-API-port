const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName :   { type: String, recquired: true, unique: true}
    mail:        { type: String, required: true, unique: true },
    password:    { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);