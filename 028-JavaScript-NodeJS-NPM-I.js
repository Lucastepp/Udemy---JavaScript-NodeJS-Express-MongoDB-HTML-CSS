


const jokes = require('give-me-a-joke');
jokes.getRandomDadJoke (function (joke) {
    console.log(`Second joke: ${joke}`);
});



const giveMeAJoke = require('give-me-a-joke');
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    console.log(`First joke: ${joke}`);
});