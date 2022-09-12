const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    nickname: String
});

userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);
