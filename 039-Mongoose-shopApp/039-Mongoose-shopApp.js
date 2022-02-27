const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useUnifiedTopology: true })
.then(() => {
    console.log("CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO!! ERROR!!!")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    isOnSale: Boolean,
    rating: String 
});

const Product = mongoose.model('Product', productSchema);
// const bike = new Product({ name: 'Mountain  Bike', price: 599 });
// const bike2 = new Product({ name: 'Gravel  Bike', price: 899 });
// bike.save()


Product.insertMany([
    {name: 'Mountain  Bike', price: 599 },
    {name: 'Gravel Bike', price: 799 },
    {name: 'Road Bike', price: 999 }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err);
    })

   



// Movie.insertMany([
//     {title: 'Amadeuss', year: 1984, score: 9.2, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2021, score: 7.3, rating: 'PG'}
// ])
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })