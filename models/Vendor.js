const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  cost: {
    type: Number,
    required: false
  }

})

module.exports = mongoose.model('Vendor', VendorSchema)
