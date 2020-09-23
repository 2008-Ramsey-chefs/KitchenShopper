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
      password: '123',
      address: '64 Forest Street, New Milford, CT 06776'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Brown',
      email: 'murphy@email.com',
      password: '456',
      address: '9413 Carson Street, Youngstown, OH 44512'
    }),
    User.create({
      firstName: 'Ashley',
      lastName: 'Hill',
      email: 'ashley@email.com',
      password: '789',
      address: '87 Cemetery Street, Fuquay Varina, NC 27526'
    }),
    User.create({
      firstName: 'Frank',
      lastName: 'Wood',
      email: 'frank@email.com',
      password: 'pass',
      address: '41 Brook Lane, Ottumwa, IA 52501'
    }),
    User.create({
      firstName: 'Amanda',
      lastName: 'Perry',
      email: 'amanda@email.com',
      password: 'test',
      address: '8273 Cottage Rd, Roy, UT 84067'
    }),
    User.create({
      firstName: 'Ryan',
      lastName: 'Adams',
      email: 'ryan@email.com',
      password: 'password',
      address: '8750 Dogwood St, Longview, TX 75604'
    })
  ])

  //we are selling food and utensils
  const products = await Promise.all([
    Product.create({
      itemName: 'Fork',
      price: 4,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71RRthv0TkL._AC_SX450_.jpg',
      description:
        'Made from 18/10 stainless steel with extra thick ergonomics handle',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'Spoon',
      price: 5,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51YgAuPhuCL._AC_SL1001_.jpg',
      description:
        'Made from stainless steel with extra thick ergonomics handle,Heavy duty and durable',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'Ladle',
      price: 12,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71JHiaXZLWL._AC_SX522_.jpg',
      description:
        'Soup ladle has a long extended handle which makes mixing or pouring convenient.',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'Bowl',
      price: 30,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61H1SCHru-L._AC_SL1500_.jpg',
      description: 'Light weight bowl ideal for making cake or proving bread',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'Knife',
      price: 5,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71aSQjqG5FL._AC_SL1500_.jpg',
      description:
        'Made using high-quality stainless steel which ensures long time usage, sturdy structure, rust resistant and durable',
      category: 'utensils'
    }),
    Product.create({
      itemName: 'Spatula',
      price: 12,
      imageUrl:
        'https://minimalistbaker.com/wp-content/uploads/2016/02/spatula-2.jpg',
      description:
        'This metal spatula made of high quality thickened 304 stainless steel to ensure long-lasting use and a easy clean, they wont dent, crack, rust, or chip.',
      category: 'utensils'
    }),
    //pasta stuff begins here
    Product.create({
      itemName: 'Farfalle',
      price: 12,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_d1dae6de-689f-4cfc-ba3f-622cf977bc1e?wid=488&hei=488&fmt=pjpeg',
      description:
        'Farfalle are a type of pasta commonly known as bow-tie pasta or butterfly pasta. The name is derived from the Italian word farfalle (butterflies). A larger variation of farfalle is known as farfalloni, while the miniature version is called farfalline.',
      category: 'pasta'
    }),
    Product.create({
      itemName: 'Rigatoni',
      price: 12,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71ROhAw7EiL._SX425_.jpg',
      description:
        'Rigatoni, which comes from the word “rigato” meaning ridged, are short, wide tubes of pasta that have ridges on the outside, but are smooth on the inside. Rigatoni also work well in baked pasta dishes as they can hold on to cheese well. Typically, rigatoni are associated with southern Italian cuisine.',
      category: 'pasta'
    }),
    Product.create({
      itemName: 'Penne',
      price: 12,
      imageUrl: 'https://static-assets.boxed.com/1593034386855.jpg',
      description:
        'Penne is an extruded type of pasta with cylinder-shaped pieces, their ends cut at a bias. Penne is the plural form of the Italian penna (meaning feather but pen as well), deriving from Latin penna (meaning "feather" or "quill"), and is a cognate of the English word pen.',
      category: 'pasta'
    }),
    Product.create({
      itemName: 'Spaghetti',
      price: 12,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61bsIABaG9L._SL1200_.jpg',
      description:
        'Spaghetti is long, thin pasta. Spaghetti is a popular Italian pasta, often served with a tomato sauce sometimes called spaghetti sauce. The Italian word spago means string, and spaghetti is the plural of spago — a description of what spaghetti looks like.',
      category: 'pasta'
    }),
    Product.create({
      itemName: 'Fusilli',
      price: 12,
      imageUrl:
        'https://image.izettle.com/product/1600x1600/eYcTcNtFEeW9Md6_9dA3mQ-Zus6FIk6Eeq0Djk8l9k1Mw.jpeg',
      description:
        'Fusilli is a spiral or corkscrew shaped pasta. Because of its twists, it has grooves that are good for holding onto sauce. Fusilli pasta were originally developed in Southern Italy by rolling and setting fresh spaghetti around thin rods to dry.',
      category: 'pasta'
    }),
    Product.create({
      itemName: 'Elbows',
      price: 12,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_1a6d1299-92ef-43e0-ad60-0f54efcd070b?wid=488&hei=488&fmt=pjpeg',
      description:
        'Elbow macaroni is one of the most common tube pasta shapes with its short, semicircular shape. The name comes from Italian word maccheroni (the plural form of maccherone). Macaroni pairs well with practically any type of sauce, baked recipes, soups, salads or stir-fry dishes.',
      category: 'pasta'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
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
