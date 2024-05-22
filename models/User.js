// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  email: String,
  username: String,
  password: String, // Add password field
});

module.exports = mongoose.model('User', userSchema);
