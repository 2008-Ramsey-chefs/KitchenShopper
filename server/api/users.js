const router = require('express').Router()
const {User} = require('../db/models')
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

router.get('/:userId', async(req, res, next) =>{
  try{
    const userId = req.params.userId;
    const user = await User.findOne({
      attributes: ['id', 'email', 'imageUrl'],
      where: {
        id: userId
      }
    })
    if(user){
      res.json(user);
    } else{
      res.sendStatus(404);
    }
  }catch(err){
    next(err)
  }
})

router.post('/', async(req, res, next) =>{
  try{
    const {email, password, googleId, imageUrl} = req.body
    const user = await User.create({
      email,
      password,
      googleId,
      imageUrl
    });
    res.status(201).send(user);
  }catch(err){
    next(err)
  }
})

router.delete('/:userId', async(req, res, next) =>{
  try{
    if(req.user && req.user.isAdmin){
      const userId = req.params.userId;
      const user = await User.findOne({
        where: {
          id: userId
        }
      })
      if(user){
        await user.destroy(req.body);
        res.sendStatus(204);
      } else{
        res.sendStatus(404);
      }
    } else{
      const err = new Error('Unathorized action');
      next(err);
    }
  }catch(err){
    next(err)
  }
})

router.put('/:userId', async(req, res, next) =>{
  try{
    if(req.user && req.user.isAdmin){
      const {email, password, googleId, imageUrl} = req.body;
      const userId = req.params.userId;
      const user = await User.findOne({
        where: {
          id: userId
        }
      });
      if(user){
        const updatedUser = await user.update({
          email,
          password,
          googleId,
          imageUrl
        })
        res.json(updatedUser);
      }
    } else {
      const err = new Error('Unathorized action');
      next(err);
    }
  }catch(err){
    next(err)
  }
})


