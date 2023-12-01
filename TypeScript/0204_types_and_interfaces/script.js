"use strict";
/*
 * TYPES::
 * Podemos criar um type, que define quais os tipos de dados serão aceitos e usá-lo sempre que necessário informar o tipo aceito.
*/
function renderProduct(car) {
    var htmlToRender = `
        <h2>${car.name}</h2>
        <p>R$ ${car.price}</p>
        <p>${car.oldPrice ? "R$ " + car.oldPrice : ''}</p>
        <p>${car.description}</p>
    `;
    var teory = document.querySelector('#teory');
    if (teory) {
        teory.innerHTML += htmlToRender;
    }
}
let car = {
    name: "Monza Vermelho",
    price: 4000,
    oldPrice: null,
    description: "Único dono!"
};
renderProduct(car);
function castBall(avatar) {
    var styleBG = "#fff";
    if (avatar === 'Water') {
        styleBG = '#5e72d3';
    }
    if (avatar === 'Fire') {
        styleBG = '#e6adad';
    }
    if (avatar === 'Earth') {
        styleBG = '#b1e6ad';
    }
    if (avatar === 'Air') {
        styleBG = 'lightblue';
    }
    document.body.style.backgroundColor = styleBG;
}
castBall('Air');
function makeBike(bike) {
    var htmlToRender = `   
        <h2>${bike.name}</h2>
        <p>Essa é uma bicicleta ${bike.color}, com ${bike.wheels} rodas!</p>
        ${bike.seat ? '' : '<p>Vixe! Ela não tem banco</p>'}
    `;
    var teory = document.querySelector('#teory');
    if (teory) {
        teory.innerHTML += htmlToRender;
    }
}
var caloi = {
    name: "Caloi",
    color: "amarela",
    wheels: 2,
    seat: false
};
makeBike(caloi);
