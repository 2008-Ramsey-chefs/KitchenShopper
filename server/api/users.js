const router = require('express').Router()
const {User} = require('../db/models')
const isAdmin = require('./isAdmin')
const isValid = require('./isValid')
module.exports = router

//GET api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//GET api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findOne({
      attributes: ['id', 'email', 'imageUrl'],
      where: {
        id: userId
      }
    })
    if (user) {
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//POST api/users/
router.post('/', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      address,
      email,
      password,
      googleId,
      imageUrl
    } = req.body
    const user = await User.create({
      firstName,
      lastName,
      address,
      email,
      password,
      googleId,
      imageUrl
    })
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
})

//DELETE api/users/:userId
router.delete('/:userId', isAdmin, async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    if (user) {
      await user.destroy(req.body)
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

//PUT api/users/:userId not a tier 1 project
// router.put('/:userId/updatepassword', isValid, async (req, res, next) => {
//   try {
//     const {password, imageUrl} = req.body
//     const userId = req.params.userId
//     const user = await User.findOne({
//       where: {
//         id: userId
//       }
//     })
//     if (user) {
//       const updatedUser = await user.update({
//         password,
//         imageUrl
//       })
//       res.json(updatedUser)
//     }
//   } catch (err) {
//     next(err)
//   }
// })
