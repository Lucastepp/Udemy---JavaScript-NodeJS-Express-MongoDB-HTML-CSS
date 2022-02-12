





const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const form = document.querySelector('#form');
const messages = document.querySelector('#messages');

input1.addEventListener('input', function (e) {
    h1.innerText = input1.value;
} )

input2.addEventListener('input', function (e) {
    h2.innerText = input2.value;
} )

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const greetingInput = form.elements.input1;
    const goodbyeInput = form.elements.input2;
    addMessage(greetingInput.value, goodbyeInput.value);
    greetingInput.value = "";
    goodbyeInput.value = "";

})




const addMessage = (input1, input2) => {
    const newMessage = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(input1);
    newMessage.append(bTag);
    newMessage.append(` - ${input2}`)
    messages.append(newMessage);
}





