/**
 * Eventos::
 * 
 * Passamos o evento como uma string e uma função de callback no método addEventListener. 
 * A função de callback possui um parâmetro que faz referência ao evento executado.
 * 
 * Por padrão o tipo de dado será um Event. Porém existem outras classes que a implementam, podendo ser mais específico e necessitando criar novas verificações com instanceof <TipoDaInstancia>
 */

function handleClick (event: MouseEvent) {
    console.log(event.pageX)
}

function handleScroll (event: Event) {
    console.log(event.currentTarget)
}


const inputSubmit = document.querySelector('input')

inputSubmit?.addEventListener('click', handleClick)
window?.addEventListener('scroll', handleScroll)


/** 
 * Dentro de eventos, podemos definir o valor de THIS, que faz referência ao objeto que gerou o evento.
 * Porém é um pouco problemático por conta do uso do MODO STRICT. 
 * Logo, o ideal é validar sempre o currentTarget do elemento clicado.
*/
function mouseUp(this: HTMLInputElement, event: MouseEvent) {
    console.log("this", this);
}

function mouseDown(event: MouseEvent) {
    const element = event.currentTarget

    if (element instanceof HTMLInputElement) {
        element.value = 'Novo Texto'
    }
}

inputSubmit?.addEventListener('mouseup', mouseUp)
inputSubmit?.addEventListener('mousedown', mouseDown)