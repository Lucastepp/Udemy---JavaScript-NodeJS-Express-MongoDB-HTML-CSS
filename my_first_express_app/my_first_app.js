




const express = require('express');
const app = express();

app.use((req, res) => {
    console.log('We got a new Request')
    //res.send("Hello, we got your Request =D - This is a response")
    res.send({ color: 'red'})
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})
