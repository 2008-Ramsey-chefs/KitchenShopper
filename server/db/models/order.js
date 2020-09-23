const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  orderPlaced: {
    //did the user checkout
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
