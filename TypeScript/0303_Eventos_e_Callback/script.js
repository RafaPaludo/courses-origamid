"use strict";
/**
 * Eventos::
 *
 * Passamos o evento como uma string e uma função de callback no método addEventListener.
 * A função de callback possui um parâmetro que faz referência ao evento executado.
 *
 * Por padrão o tipo de dado será um Event. Porém existem outras classes que a implementam, podendo ser mais específico e necessitando criar novas verificações com instanceof <TipoDaInstancia>
 */
function handleClick(event) {
    console.log(event.pageX);
}
function handleScroll(event) {
    console.log(event.currentTarget);
}
const inputSubmit = document.querySelector('input');
inputSubmit?.addEventListener('click', handleClick);
window?.addEventListener('scroll', handleScroll);
/**
 * Dentro de eventos, podemos definir o valor de THIS, que faz referência ao objeto que gerou o evento.
 * Porém é um pouco problemático por conta do uso do MODO STRICT.
 * Logo, o ideal é validar sempre o currentTarget do elemento clicado.
*/
function mouseUp(event) {
    console.log("this", this);
}
function mouseDown(event) {
    const element = event.currentTarget;
    if (element instanceof HTMLInputElement) {
        element.value = 'Novo Texto';
    }
}
inputSubmit?.addEventListener('mouseup', mouseUp);
inputSubmit?.addEventListener('mousedown', mouseDown);
