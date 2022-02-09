





// setTimeout //

console.log("Hello there")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000);

// setInterval // clearInterval

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);     

clearInterval(id)