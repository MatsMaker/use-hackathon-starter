const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  title: String
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
