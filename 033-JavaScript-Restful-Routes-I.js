






const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, '033-views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'    
    },
    {
        username: 'Darlan',
        comment: 'Putin ta certo!'    
    },
    {
        username: 'Braynner',
        comment: 'Ta saindo leite da minha teta!'    
    } 
]

app.get('/comments', (req, res) => {
    res.render('033-folder/comments')
} )

app.get('/tacos', (req, res) => {
    res.send("GET / tacos response")
} )

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`POST / HELLO, HERE ARE YOUR ${qty} ${meat}`)
} )

app.listen(3000, () => {
    console.log('ON PORT 3000!!')
})