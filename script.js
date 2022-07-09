const input = document.querySelector('input');
const divMessage = document.querySelector('.message');

let password = 'user';
let message = 'Example message to show';

const showMessage = function (e) {

    if (e.target.value == password) {
        divMessage.textContent = message
    } else { divMessage.textContent = '' }
}


const focusChange = function () {
    input.style.backgroundColor = 'black';
    input.style.color = 'white'
}

input.addEventListener('input', showMessage);
input.addEventListener('focus', focusChange);