"use strict";
console.log('%cExercícios::', 'color: #e40071; font-size: larger');
/*
 *  1 - Crie uma função chamada toNumber
 *  2 - A função pode receber number | string
 *  3 - Se a função receber número, retorne número
 *  4 - Se a função receber string, retorne um número
 *  5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
*/
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw new Error("Value deve ser um número ou uma string");
    }
}
console.log(toNumber(100));
console.log(toNumber('100'));
console.log(toNumber({ value: 100 }));
