
// Event Listener using function

const btn = document.querySelector('#v3');
btn.addEventListener('click', function () {
    alert('提示');
})


// Event Listener using Arrow function

const btn4 = document.querySelector('#v4');
btn4.addEventListener('click', () => {
    alert('Leaving the page securely!!!');
})