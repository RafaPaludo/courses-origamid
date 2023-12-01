console.log('%cExercícios::', 'color: #e40071; font-size: larger')

/*
 * Conserte a função abaixo::

    function normalizarTexto (texto) {
        return texto.trims().toLowercase();
    }

*/ 

function normalizarTexto (texto:string): string {
    return texto.trim().toLowerCase();
}

console.log(normalizarTexto('       Hello World!!!!      '));

/*
    * Conserte o código abaixo::

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

*/ 

const input = document.querySelector('input');
const paragraph = document.querySelector('p');
const total = localStorage.getItem('total');


function updateTotal () {
    if(input) {
        localStorage.setItem('total', input.value);
        setTotal(Number(input.value));
    }
}

function setTotal (value: number) {
    if(paragraph) {
        paragraph.innerText = `ganho total: ${ value + 100 - (value* 0.2) }`;
    }
}

if(input && total) {
    input.value = total;
    input.addEventListener('keyup', updateTotal);

    updateTotal();
}