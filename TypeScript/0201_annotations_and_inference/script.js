"use strict";
console.log('%cTeoria::', 'color: #4bc; font-size: larger');
let price = 12000;
/* Não conseguimos atribuir outro tipo de dado a price
 *
 * Errado::
 *      price = [];
 * Correto::
 *      price = 4000;
*/
let product = 'Notebook';
/* Mesmo não colocando o tipo de dado, o TS ainda consegue verificar qual o esperado, e só permite adicionar os dados definidos.
 *
 * Errado::
 *      product = {};
 * Correto::
 *      product = "celular";
 */
/* Nas funções, os tipos de dados são mais úteis e precisam ser declarados. O retorno pode ser inferido, mas podemos adicionar após os parâmetros
*/
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
function currency(item) {
    item.price = 'R$ ' + price;
    return item;
}
let notebook = {
    name: 'Notebook',
    price: '12.000,00'
};
console.log(currency(notebook));
