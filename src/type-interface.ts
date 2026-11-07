//interface
interface Persona {
    nombre: string;
    edad: number;
}

//implementar una interface
const me: Persona = {
    nombre: "Mateo",
    edad: 24
}

//resultado
console.log(me)

//type
type Cat = {
    name: string;
    legs: number;
    isDogFriendly: boolean;
}

//implementar el type
const myMascot: Cat = {
    name: "Sam",
    legs: 4,
    isDogFriendly: false
}

console.log(myMascot)

//propiedad opcional
let user: {name: string, age?: number};

user = {name: 'Mateo'}

console.log(user)