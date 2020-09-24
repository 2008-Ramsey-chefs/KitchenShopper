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
router.get('/cart', async (req, res, next) => {
  const lastOrder = await Order.findOne({
    order: [['updatedAt', 'DESC']]
  })
  // order: [
  //   ["__createdAt", "DESC"],
  // ]
  // const cart = await Order.findOrCreate({where: {
  //   userId: req.session.passport.user
  // }})
  res.send(lastOrder)
})

module.exports = router
