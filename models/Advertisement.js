const mongoose = require('mongoose');
require('./User');

const advertisementSchema = new mongoose.Schema({
  subject: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
