/*
 * Instanceof é uma validação de JavaScript, que permite identificarmos se determinado valor foi contruído usando uma classe específica.
 * No TypeScript isso é util para entender quais os métodos e propriedades estão disponíveis caso seja da classe   
*/

class Movie {
    name: string // Precisa declarar as propriedades para poder usar dentro do constructor
    duration: number

    constructor (name: string, duration: number) {
        this.name = name
        this.duration = duration
    }
}

class Game {
    name: string
    online: boolean

    constructor (name: string, online: boolean) {
        this.name = name
        this.online = online
    }
}

function hobby (name: string) {
    if (name === "movie") {
        return new Movie('Senhor dos Aneis', 0)
    }

    if (name === "game") {
        return new Game('Catan', false)
    }

    return null   
}

// const myHobby = hobby('movie')
const myHobby = hobby('game')
var body = document.querySelector('body')

if (myHobby instanceof Movie) {
     if(body) {
        body.innerHTML += "Duração: " + myHobby.duration // Permite acessar .duration pois já verificamos se myHobby é da classe Movie
    }
}

if (myHobby instanceof Game) {
    if(body) {
        body.innerHTML += "Online: " + myHobby.online // Permite acessar .duration pois já verificamos se myHobby é da classe Game
    }
}