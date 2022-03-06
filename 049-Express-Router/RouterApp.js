const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');




app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!')
})