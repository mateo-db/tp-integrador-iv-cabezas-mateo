//typed parameters
function sum(x: number, y: number) {
    return console.log(x + y)
}

sum(5, 10)

//typed return 
function bio(ocupacion: string, nivel: string): void {
    console.log(`Soy ${ocupacion} ${nivel}.`);
}

bio("Programador", "Junior")

//optional parameter
function saludar(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola ${nombre}.`);
    }
}

saludar('Ana')

//default parameter
function factura(producto: string, cantidad: number = 1): void {
    console.log(`Nombre del producto: ${producto}, cantidad comprada: ${cantidad}`);
}

factura('gorra')