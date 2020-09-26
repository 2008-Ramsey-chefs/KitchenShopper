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

//PUT api/orders/createcart
router.put('/createcart', async (req, res, next) => {
  try {
    const lastOrder = await Order.findOne({
      where: {
        userId: req.session.passport.user, //switch this to req.session.passport.user when completed route
        orderPlaced: false
      },
      order: [['updatedAt', 'DESC']]
    })
    if (!lastOrder) {
      const newOrder = await Order.create({
        userId: req.session.passport.user //switch this to req.session.passport.user when completed route
      })
      res.json(newOrder)
    }
    res.json(lastOrder)
  } catch (error) {
    console.error(error)
  }
})

//GET api/orders/cart
router.get('/cart', async (req, res, next) => {
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user, //switch this to req.session.passport.user when completed route
      orderPlaced: false
    },
    order: [['updatedAt', 'DESC']]
  })
  const cartItems = await Orderproduct.findAll({
    where: {
      orderId: lastOrder.id
    }
  })
  res.send(cartItems)
})

//PUT api/orders/:itemId
router.put('/:itemId', async (req, res, next) => {
  let itemNum = req.params.itemId
  // console.log(itemNum)
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user, //switch this to req.session.passport.user when completed route
      orderPlaced: false
    },
    order: [['updatedAt', 'DESC']]
  })
  const findItem = await Orderproduct.findOne({
    where: {
      orderId: lastOrder.id,
      productId: itemNum
    }
  })
  if (findItem) {
    await findItem.increment('quantity')
    res.sendStatus(200)
  } else {
    let newItem = await Orderproduct.findOrCreate({
      where: {
        orderId: lastOrder.id,
        productId: itemNum
      }
    })
    res.sendStatus(200)
  }
})

//PUT api/orders/:itemId/decrement
router.put('/:itemId/decrement', async (req, res, next) => {
  let itemNum = req.params.itemId
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user, //switch this to req.session.passport.user when completed route
      orderPlaced: false
    },
    order: [['updatedAt', 'DESC']]
  })
  const findItem = await Orderproduct.findOne({
    where: {
      orderId: lastOrder.id,
      productId: itemNum
    }
  })
  if (findItem.quantity === 1) {
    await findItem.destroy()
    return res.sendStatus(200)
  }
  await findItem.decrement('quantity')
  res.sendStatus(200)
})

module.exports = router
