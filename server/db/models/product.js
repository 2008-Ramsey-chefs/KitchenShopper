const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  itemName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: Sequelize.TEXT,
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIxvUKuwFlM_CaJl4X_SD_uBVxFNIUD7dj9kbAnXJy93RDl4f9koE&usqp=CAc'
  }
})

module.exports = Product
