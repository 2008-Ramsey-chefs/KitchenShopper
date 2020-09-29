const {expect} = require('chai')
const express = require('express')
const request = require('supertest')
const superAgent = require('superagent')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
var server = request.agent('http://localhost:8080')
app.use(express.json())

describe('Logged in User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /auth', function() {
    it('login', loginUser())
    it('uri that requires user to be logged in', async () => {
      server
        .get('/api/orders/cart')
        .expect(200)
        .end(function(err, res) {
          if (err) {
            console.log(res.body)
            return err
          } else {
            return res
          }
        })
    })
  })

  function loginUser() {
    return async () => {
      await server
        .post('/auth/login')
        .send({username: 'cody@email.com', password: '123'})
        .expect(302)
        .expect('Location', '/')
        .end((err, res) => {
          try {
            console.log(res)
          } catch (error) {
            console.error(err)
          }
        })
    }
  }

  // describe('logged in user routes', () => {
  //   let testUser
  //   const codysEmail = 'cody@puppybook.com'
  //   const firstName = 'Cody';
  //   const lastName = 'Hilly';
  //   const address = '123 cherry drive';
  // const password = '123'

  // beforeEach(async() => {
  //  testUser = await User.create({
  //     email: codysEmail,
  //     firstName,
  //     lastName,
  //     address,
  //     password
  //   })
  // })

  // it('You can only access this when logged in', async () => {
  //   const user = superAgent.agent(app);
  //   const res = await user.post('/auth/login')
  //     .send({email: 'cody@email.com', password: testUser.correctPassword('123')})

  //   return res.should.have.length(1)
  // expect(res.body).to.be.an('array')
  // expect(res.body[0].email).to.be.equal(codysEmail)
  // })
}) // end describe('/api/users')
// }) // end describe('User routes')
