const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
  },
  cost: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
    goal: {
    type: Number,
    required: false,
  },
  note: {
  type: String,
  required: false,
}
})

module.exports = mongoose.model('Budget', BudgetSchema)

