const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  beforeEach(() => {
    return Product.create({
      itemName: 'Noddle',
      price: 3
    })
  })

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].itemName).to.be.equal('Noddle')
      expect(res.body[0].price).to.be.equal(3)
    })
  })

  describe('/api/products/:id', () => {
    it('GET /api/products/:id', async () => {
      const data = await Product.findOne({
        where: {
          itemName: 'Noddle'
        }
      })
      const noddleId = data.id
      const res2 = await request(app)
        .get(`/api/products/${noddleId}`)
        .expect(200)
      expect(res2.body.id).to.be.equal(noddleId)
    })
  })
})
