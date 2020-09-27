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
  } catch (error) {
    console.error(error)
  }
})

// //working!!!!!!!!__--------------GET api/orders/cart
// router.get('/cart', async (req, res, next) => {
//   const lastOrder = await Order.findOne({
//     where: {
//       userId: req.session.passport.user,
//       orderPlaced: false
//     },
//     order: [['updatedAt', 'DESC']]
//   })
//   const cartItems = await Orderproduct.findAll({
//     where: {
//       orderId: lastOrder.id
//     }
//   })
//   res.send(cartItems)
// })

//GET api/orders/cart
router.get('/cart', async (req, res, next) => {
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user,
      orderPlaced: false
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'itemName', 'price']
      }
    ],
    order: [['updatedAt', 'DESC']]
  })
  res.send(lastOrder)
})

//PUT api/orders/:itemId (when you add item in single product view and increment quantity on cart at checkout)
router.put('/:itemId', async (req, res, next) => {
  let itemNum = req.params.itemId
  const lastOrder = await Order.findOne({
    where: {
      userId: req.session.passport.user,
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
    //increments the quantity
    await findItem.increment('quantity')
    //fetching the updated cart with the new quantity
    const updatedCart = await Order.findOne({
      where: {
        userId: req.session.passport.user,
        orderPlaced: false
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'itemName', 'price']
        }
      ],
      order: [['updatedAt', 'DESC']]
    })
    //here, we are returning a cart to get the updated(quantity) cart in the thunk
    res.send(updatedCart)
  } else {
    //adds to cart with quantity(defaults to 1).
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
      userId: req.session.passport.user,
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