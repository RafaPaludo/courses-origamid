/*
 * TYPES::
 * Podemos criar um type, que define quais os tipos de dados serão aceitos e usá-lo sempre que necessário informar o tipo aceito.
*/

type Car = { // O ideal, para definir Objetos é usar INTERFACE, porém assim também funciona
    name: string;
    price: number;
    oldPrice: number | null;
    description: string;
}

function renderProduct (car: Car) {
    var htmlToRender = 
    `
        <h2>${car.name}</h2>
        <p>R$ ${car.price}</p>
        <p>${car.oldPrice ? "R$ " + car.oldPrice : ''}</p>
        <p>${car.description}</p>
    `;
    var teory = document.querySelector('#teory');

    if(teory) {
        teory.innerHTML += htmlToRender
    }
}

let car = {
    name: "Monza Vermelho",
    price: 4000,
    oldPrice: null,
    description: "Único dono!"
}

renderProduct(car)

/*
 * É possível criar um types para limitar quais as opções de dados, muito além de apenas os tipos primitivos.
   Exemplo, definir um conjunto possível de dados para tal tipo.
*/

type Avatar = 'Water' | 'Fire' | 'Earth' | 'Air';

function castBall (avatar: Avatar) {
    var styleBG = "#fff";

    if (avatar === 'Water') {
        styleBG = '#5e72d3'
    }

    if (avatar === 'Fire') {
        styleBG = '#e6adad'
    }

    if (avatar === 'Earth') {
        styleBG = '#b1e6ad'
    }

    if (avatar === 'Air') {
        styleBG = 'lightblue'
    }

    document.body.style.backgroundColor = styleBG
}

castBall('Air')

/*
 * INTERFACE::
 * Usada com o mesmo propósito, porém focada em OBJETOS!
*/

interface Bike {
    name: string;
    color: string;
    wheels: number;
    seat: boolean;
}

function makeBike (bike: Bike) {
    var htmlToRender = 
    `   
        <h2>${bike.name}</h2>
        <p>Essa é uma bicicleta ${bike.color}, com ${bike.wheels} rodas!</p>
        ${ bike.seat ? '' : '<p>Vixe! Ela não tem banco</p>' }
    `
    var teory = document.querySelector('#teory');

    if(teory) {
        teory.innerHTML += htmlToRender
    }
}

var caloi = {
    name: "Caloi",
    color: "amarela",
    wheels: 2,
    seat: false
}

makeBike(caloi)