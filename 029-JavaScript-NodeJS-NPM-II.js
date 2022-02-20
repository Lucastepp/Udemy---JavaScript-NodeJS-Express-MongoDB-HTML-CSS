


const jokes = require('give-me-a-joke');
const colors = require('colors');
jokes.getRandomDadJoke (function (joke) {
    console.log(`Second joke: ${joke.rainbow}`);
});



const giveMeAJoke = require('give-me-a-joke');
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    console.log(`First joke: ${joke.underline.red}`);
});