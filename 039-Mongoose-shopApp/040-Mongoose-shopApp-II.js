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
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Pricec must have a positive value']
    },
    onSale: {
        type: Boolean,
        default: false 
    },
    categories: {
        type: [String]
        
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike Jersey', price: 29.55, categories: ['Cycling'], size: "S" });
bike.save()
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err);
    })

// Product.findOneAndUpdate({ name: "Bike Tire" }, { price: 16.55 })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!!")
//         console.log(err);
//     })
// const bike2 = new Product({ name: 'Gravel  Bike', price: 899 });
// bike.save()


// Product.insertMany([
//     {name: 'Mountain  Bike', price: 599 },
//     {name: 'Gravel Bike', price: 799 },
//     {name: 'Road Bike', price: 999 }
// ])
    
    
  

   



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