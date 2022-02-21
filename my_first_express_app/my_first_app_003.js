




const express = require('express');
const app = express();


//Comment everything as we can only send one response at the time
// app.use((req, res) => {
//     console.log('We got a new Request')
//     //res.send("Hello, we got your Request =D - This is a response")
//     res.send({ color: 'red'})
// })

app.get('/',(req, res) => {
    console.log('HOME PAGE REQUEST')
    res.send("THIS IS THE HOME PAGE")
})

app.get('/cats',(req, res) => {
    console.log('CAT REQUEST')
    res.send("MEOW")
})

app.post('/cats',(req, res) => {
    res.send("CATS POST REQUEST!!!!")
})


app.get('/dogs',(req, res) => {
    console.log('DOG REQUEST')
    res.send("WOOOF!")
})

// This is a solution to everything if none of the above matches

app.get('*',(req, res) => {
    console.log("User trying a path that doesn't exist")
    res.send("I don't know that path!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})
