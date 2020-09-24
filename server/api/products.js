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

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findOne({where: {id}})
    if (product) {
      res.send(product)
    } else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

module.exports = router
