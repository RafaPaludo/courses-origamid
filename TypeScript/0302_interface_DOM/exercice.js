"use strict";
/**
 * 1 - Selecione os elementos com a classe link
 * 2 - Crie uma função que deve ser executada para cada elemento
 * 3 - Modificar através da função o estilo da color e border
 */
const links = document.querySelectorAll('.link');
function changeColors(links, borderColor, color) {
    links.forEach(link => {
        if (link instanceof HTMLElement) {
            link.style.borderColor = borderColor;
            link.style.color = color;
        }
    });
}
changeColors(links, '#2abf63', '#2abf63');
