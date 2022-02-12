


// Checking if the input is Empty and asking to enter new Username


let h1 = document.querySelector('h1');
const username = document.querySelector('#username');

username.addEventListener('input', function (e){
    h1.innerText = `Welcome, ${username.value}`;
    validateEmpty(username)
});



 function validateEmpty(username) {
        if (username.value.length === 0) {
             document.querySelector('h1').innerHTML = "Enter Your Username";
        }
}





