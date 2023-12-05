"use strict";
/**
 * 1 - Selecione o link usando o método getElementById()
 * 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://
*/
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http', 'https');
}
