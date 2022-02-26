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
        type: Number
    },

    isOnSale: Boolean,
    rating: String 
});

const Product = mongoose.model('Movie', productSchema);
//const amadeus = new Movie({ title: 'Amadeuss', year: 1984, score: 9.2, rating: 'R'});

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