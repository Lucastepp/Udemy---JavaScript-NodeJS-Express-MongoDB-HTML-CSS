
const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/farmStand', { useUnifiedTopology: true })
.then(() => {
    console.log("MONGO CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO!! MONGO CONNECTION ERROR!!!")
    console.log(err)
});

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
      name: 'Fairy Eggplant',
      price: 1.00,
      category: 'vegetable'  
    },
    {
      name: 'Organic Melon',
      price: 2.00,
      category: 'fruit'  
    },
    {
      name: 'Seedless Watermelon',
      price: 2.99,
      category: 'vegetable'  
    },
    {
      name: 'Organic Celery',
      price: 1.50,
      category: 'fruit'  
    },
    {
      name: 'Chocolate Whole Milk',
      price: 0.99,
      category: 'dairy'  
    },
]



Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
