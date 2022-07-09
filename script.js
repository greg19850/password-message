const input = document.querySelector('input');
const divMessage = document.querySelector('.message');

let password = 'user';
let message = 'Example message to show';

const showMessage = function (e) {

    if (e.target.value == password) {
        divMessage.textContent = message
    } else { divMessage.textContent = '' }
}

const onFocus = function (e) {
    e.target.classList.add('active');
}
const onBlur = function (e) {
    e.target.classList.remove('active');
}

input.addEventListener('input', showMessage);
input.addEventListener('focus', onFocus);
input.addEventListener('blur', onBlur);