

const express = require('express');
const app = express();
const path = require('path');
const { traceDeprecation } = require('process');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF!!')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})