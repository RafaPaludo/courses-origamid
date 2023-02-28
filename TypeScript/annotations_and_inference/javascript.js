const input = document.querySelector('input');
const paragraph = document.querySelector('p');
const total = localStorage.getItem('total');
input.value = total;

input.addEventListener('keyup', updateTotal);
updateTotal(input.value);

function updateTotal (value) {
    var value = Number(input.value);
    localStorage.setItem('total', value);
    setTotal(value);
}

function setTotal (value) {
    paragraph.innerText = `ganho total: ${ value + 100 - (value* 0.2) }`;
}

