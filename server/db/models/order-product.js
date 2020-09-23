const Sequelize = require('sequelize')
const db = require('../db')

const Orderproduct = db.define('order-product', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  purchasePrice: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Orderproduct
