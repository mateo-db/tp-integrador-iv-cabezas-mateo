//primitive types
let nombre: string = 'Mateo'
let edad: number = 24
let estaPromovido: boolean = true 

console.log('Mi nombre: ', nombre)
console.log('Mi edad: ', edad)
console.log('Pasé de año?: ', estaPromovido)

//typed array
let grades: number[] = [8, 10, 9, 7]
console.log(grades)

//union type
function unionExample(value: string | number) {
    if (typeof value === 'string') {
    
        // El valor es tratado como string aquí
        console.log(value.toUpperCase());
    } else {
    
        // El valor es tratado como number aquí
        console.log(value.toFixed(2));
    }
}

unionExample('ejemplo unión')
unionExample(3.1204)