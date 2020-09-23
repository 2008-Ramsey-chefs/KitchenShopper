const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    if (allProducts) {
      res.send(allProducts)
    }
  } catch (error) {
    next(error)
  }
})

// router.get('/:id', (req, res, next))

module.exports = router
