"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
function showProduct(data) {
    var exercice = document.querySelector('#exercice');
    var htmlToRender = `   
        <div>Nome: ${data.nome}</div>
        <div>Preço: ${data.preco}</div>
        <div>Descrição: ${data.descricao}</div>
        <div>Garantia? ${data.garantia} meses</div>
        <div>Possui seguro? ${data.seguroAcidentes ? 'Sim' : 'Não'}</div>
        <div>
            Empresa fabricante:
            <spam>${data.empresaFabricante.nome} | </spam>
            <spam>${data.empresaFabricante.fundacao} | </spam>
            <spam>${data.empresaFabricante.pais}</spam>
        </div>
        <div>
            Empresa montadora:
            <spam>${data.empresaMontadora.nome} | </spam>
            <spam>${data.empresaMontadora.fundacao} | </spam>
            <spam>${data.empresaMontadora.pais}</spam>
        </div>
    `;
    if (exercice) {
        exercice.innerHTML += htmlToRender;
    }
}
fetchProduct();
