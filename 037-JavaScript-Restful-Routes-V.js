






const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, '033-views'))
app.set('view engine', 'ejs')

let comments = [
    {   
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'    
    },
    {   
        id: uuid(),
        username: 'Darlan',
        comment: 'Putin ta certo!'    
    },
    {
        id: uuid(),
        username: 'Braynner',
        comment: 'Ta saindo leite da minha teta!'    
    },
    {
        id: uuid(),
        username: 'Lola',
        comment: 'I want to eat!'    
    }  
]

app.get('/comments', (req, res) => {
    res.render('033-folder/comments', { comments })
} )

app.get('/comments/new', (req, res) => {
    res.render('033-folder/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('033-folder/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('033-folder/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');

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