const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useUnifiedTopology: true })
.then(() => {
    console.log("CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO!! ERROR!!!")
    console.log(err)
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})