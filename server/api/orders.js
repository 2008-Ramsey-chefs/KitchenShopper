const router = require('express').Router()
const {Order, User, Product, Orderproduct} = require('../db/models')

//GET /api/orders/
// router.get('/', async (req, res, next) =>{
//   const order = await Order.findOne({
//     where: {
//       userId: req.session.passport.user
//     }
//   })
//   const cart = await Orderproduct.findAll({
//     where: {
//       orderId: order.id
//     },
//   })
//   res.json(cart)
// })

//PUT api/orders/cart
router.put('/cart', async (req, res, next) => {
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user,
      orderPlaced: false
    },
    order: [['updatedAt', 'DESC']]
  })
  if (!lastOrder) {
    const newOrder = await Order.create({
      userId: req.session.passport.user
    })
    res.json(newOrder)
  }
  res.json(lastOrder)
})

module.exports = router
