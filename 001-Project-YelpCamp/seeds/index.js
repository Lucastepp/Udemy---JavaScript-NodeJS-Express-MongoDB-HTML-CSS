
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelpcamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected!")
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '622b866886ec350d19cd67ec',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus expedita eaque? Tenetur, quaerat reiciendis non similique...',
            price, 
            images: [
                {
                  url: 'https://res.cloudinary.com/ltepcloudinary/image/upload/v1647102227/YelpCamp/sfpzvnjycbjmmvumkx3d.jpg',
                  filename: 'YelpCamp/sfpzvnjycbjmmvumkx3d'
                },
                {
                  url: 'https://res.cloudinary.com/ltepcloudinary/image/upload/v1647102230/YelpCamp/imx3dg0n5csfr10v3icp.jpg',
                  filename: 'YelpCamp/imx3dg0n5csfr10v3icp'
                }
            ]
            
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})