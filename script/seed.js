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
    //pasta stuff begins here
    Product.create({
      itemName: 'Farfalle',
      price: 8,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_d1dae6de-689f-4cfc-ba3f-622cf977bc1e?wid=488&hei=488&fmt=pjpeg',
      description:
        'Farfalle are a type of pasta commonly known as bow-tie pasta or butterfly pasta. The name is derived from the Italian word farfalle (butterflies). A larger variation of farfalle is known as farfalloni, while the miniature version is called farfalline.'
    }),
    Product.create({
      itemName: 'Rigatoni',
      price: 12,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71ROhAw7EiL._SX425_.jpg',
      description:
        'Rigatoni, which comes from the word “rigato” meaning ridged, are short, wide tubes of pasta that have ridges on the outside, but are smooth on the inside. Rigatoni also work well in baked pasta dishes as they can hold on to cheese well. Typically, rigatoni are associated with southern Italian cuisine.'
    }),
    Product.create({
      itemName: 'Penne',
      price: 14,
      imageUrl: 'https://static-assets.boxed.com/1593034386855.jpg',
      description:
        'Penne is an extruded type of pasta with cylinder-shaped pieces, their ends cut at a bias. Penne is the plural form of the Italian penna (meaning feather but pen as well), deriving from Latin penna (meaning "feather" or "quill"), and is a cognate of the English word pen.'
    }),
    Product.create({
      itemName: 'Spaghetti',
      price: 5,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61bsIABaG9L._SL1200_.jpg',
      description:
        'Spaghetti is long, thin pasta. Spaghetti is a popular Italian pasta, often served with a tomato sauce sometimes called spaghetti sauce. The Italian word spago means string, and spaghetti is the plural of spago — a description of what spaghetti looks like.'
    }),
    Product.create({
      itemName: 'Fusilli',
      price: 16,
      imageUrl:
        'https://image.izettle.com/product/1600x1600/eYcTcNtFEeW9Md6_9dA3mQ-Zus6FIk6Eeq0Djk8l9k1Mw.jpeg',
      description:
        'Fusilli is a spiral or corkscrew shaped pasta. Because of its twists, it has grooves that are good for holding onto sauce. Fusilli pasta were originally developed in Southern Italy by rolling and setting fresh spaghetti around thin rods to dry.'
    }),
    Product.create({
      itemName: 'Elbows',
      price: 10,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_1a6d1299-92ef-43e0-ad60-0f54efcd070b?wid=488&hei=488&fmt=pjpeg',
      description:
        'Elbow macaroni is one of the most common tube pasta shapes with its short, semicircular shape. The name comes from Italian word maccheroni (the plural form of maccherone). Macaroni pairs well with practically any type of sauce, baked recipes, soups, salads or stir-fry dishes.'
    }),
    Product.create({
      itemName: 'Lasagne',
      price: 7,
      imageUrl:
        'https://www.meijer.com/content/dam/meijer/product/0089/50/5900/06/0089505900061_1_A1C1_0600.png',
      description:
        'Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù (ground meats and tomato sauce) and other vegetables, cheese (which may include ricotta and parmesan), and seasonings and spices such as garlic, oregano and basil.'
    }),
    Product.create({
      itemName: 'Bigotoni',
      price: 13,
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/526/eda/f95a96e11f775c9f6867b254bf1ee46bc6-27-barilla-bigotoni.rsquare.w700.jpg',
      description: 'delicious pasta'
    }),
    Product.create({
      itemName: 'Ziti',
      price: 9,
      imageUrl: 'https://i.ebayimg.com/images/g/L9MAAOSw3axes4Si/s-l600.jpg',
      description:
        'Ziti is an extruded pasta. It is smaller than rigatoni, but larger than mezzani. Ziti may have smooth sides, but the addition of the word rigati (meaning "ridged") denotes lines or ridges on the pasta\'s outer surface'
    }),
    Product.create({
      itemName: 'Rotini',
      price: 7,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_03cd8b87-c4a2-403e-b2da-92c4e32187ad?wid=488&hei=488&fmt=pjpeg',
      description:
        'Rotini are short, corkscrew-like shaped pasta. The name translates from Italian to “small wheels” and the shape originated in Southern Italy. Rotini is recommended to be paired with most sauces, including tomato sauces, oil-based sauces, or cream sauces.'
    }),
    Product.create({
      itemName: 'Cellentani',
      price: 11,
      imageUrl:
        'https://i5.walmartimages.com/asr/35afc132-0fa9-46bc-b90b-565401beb0b9_1.5cf0e0a9f5b6ff4063b853edf6a39e43.jpeg',
      description:
        'A delightful corkscrew-shaped pasta, Barilla® Cellentani is as fun to look at as it is to eat. With its tubular center and ridged surface, Cellentani is perfect for a hearty pasta meal, capturing every drop of your favorite sauce and trapping vegetables, meat or fish in every delicious forkful.'
    }),
    Product.create({
      itemName: 'Gemelli',
      price: 14,
      imageUrl:
        'https://images.freshop.com/00076808506433/e35ee6fd2e54f1e0f45f354eee5969c7_large.png',
      description:
        'The name derives from the Italian word for "twins". Gemelli are not twin tubes twisted around one another, as they may appear to be, but rather a single s-shaped strand twisted into a spiral.'
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
