const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    key: { type: String, required: true, trim: true },
    name: String
});

userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);
