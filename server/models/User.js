const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, sparse: true },
    googleId: { type: String, unique: true },
    profilePicture: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);