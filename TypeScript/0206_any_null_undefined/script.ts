/*
 *Any são dados sem valor específico, o ideal é evitar usar, pois é quase como se não usasse TS    
 */

function normalize (text:any) {
    return text.trim()
}

console.log(normalize(' texto qualquer      '))
console.log(normalize(100)) // Isso vai quebrar, porém o TS não nos avisa!!!

/*
 * Definir o objeto que será usado como parêmetro como any também é um problema, pois a função permite executar, mas ainda pode quebrar o programa. 
 */

function printPerson (person: Person) {
    document.body.innerHTML += `
        <h1>${person.name}</h1>
        <p>${person.age}</p>
    `
}

interface Person {
    name: string,
    age: number
}

const p1 = {
    name: 'John',
    age: 22
}

const p2: any =  "John, 22"

printPerson(p1) // Correto!
printPerson(p2) // TS não avisa do erro, mas ainda vai quebrar o código


/*
 * Variáveis que possam conter null e undefined precisam de uma verificação para serem executadas. Usar IF ou o operador '?'
*/

let button = document.querySelector('button')

if (button) {
    console.log(button)
}

button?.click()

/*
 * Esse operador é muito útil na criação de Objetos com propriedades opcionais
*/

interface Vehicle {
    name: string,
    wheels?: number,
    doors?: number
}

const bike: Vehicle = { name: 'Caloi' }
console.log(bike.name)
console.log(bike.wheels?.toFixed()) // Uso do ? pois wheels pode ser number | undefined
console.log(bike.doors?.toString())  // Uso do ? pois doors pode ser number | undefined