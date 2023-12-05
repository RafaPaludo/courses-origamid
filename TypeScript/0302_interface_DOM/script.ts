/*
 * Lembrar que o DOM é criado usando classes em JavaScript. Dependendo da seleções dos elementos, podemos ter diferentes classes ou mesmo extensões (extends) das classes que possibilitam o uso ou não de certos métodos.
*/

// O TS consegue identificar que esse elemento é uma instância de HTMLAnchorElement
let anchor = document.querySelector('a')
console.log(anchor?.href)


/*
    O TS consegue identificar que esse elemento é no máximo uma instância de Element, não sendo possível inferir com mais precisão. 
    Por isso caso queira usar um método de uma classe mais específica, por exemplo HTMLAnchorElement, o ideal é verificar se a variável pertence aquela instância com instanceof
*/
let element = document.querySelector('.some-class')

if (element instanceof HTMLAnchorElement) {
    console.log(element.href)
}