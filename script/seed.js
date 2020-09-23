'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Smith',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Brown',
      email: 'murphy@email.com',
      password: '456'
    }),
    User.create({
      firstName: 'Ashley',
      lastName: 'Hill',
      email: 'ashley@email.com',
      password: '789'
    }),
    User.create({
      firstName: 'Frank',
      lastName: 'Wood',
      email: 'frank@email.com',
      password: 'pass'
    }),
    User.create({
      firstName: 'Amanda',
      lastName: 'Perry',
      email: 'amanda@email.com',
      password: 'test'
    }),
    User.create({
      firstName: 'Ryan',
      lastName: 'Adams',
      email: 'ryan@email.com',
      password: 'password'
    })
  ])

  //we are selling food and utensils
  const products = await Promise.all([
    Product.create({
      itemName: 'fork',
      price: 10.99,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71RRthv0TkL._AC_SX450_.jpg',
      description:
        'Made from 18/10 stainless steel with extra thick ergonomics handle',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'spoon',
      price: 20.99,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51YgAuPhuCL._AC_SL1001_.jpg',
      description:
        'Made from stainless steel with extra thick ergonomics handle,Heavy duty and durable',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'ladle',
      price: 29.99,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71JHiaXZLWL._AC_SX522_.jpg',
      description:
        'Soup ladle has a long extended handle which makes mixing or pouring convenient.',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'bowl',
      price: 30.99,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61H1SCHru-L._AC_SL1500_.jpg',
      description: 'Light weight bowl ideal for making cake or proving bread',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'knife',
      price: 10.99,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71aSQjqG5FL._AC_SL1500_.jpg',
      description:
        'Made using high-quality stainless steel which ensures long time usage, sturdy structure, rust resistant and durable',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'spatula',
      price: 12.99,
      imageUrl:
        'https://minimalistbaker.com/wp-content/uploads/2016/02/spatula-2.jpg',
      description:
        'This metal spatula made of high quality thickened 304 stainless steel to ensure long-lasting use and a easy clean, they wont dent, crack, rust, or chip.',
      category: 'utensils'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
