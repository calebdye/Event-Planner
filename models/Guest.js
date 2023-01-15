const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema({
  guest: {
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
  num: {
    type: Number,
    required: false
  }

})

module.exports = mongoose.model('Guest', GuestSchema)
