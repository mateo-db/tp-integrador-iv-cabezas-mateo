//type literal
type Direccion = "norte" | "sur" | "este" | "oeste";

let direccion: Direccion = "este"

// direccion = "norte"; // Correcto
// direccion = "sur";   // Correcto
// direccion = "noreste"; // Error: El tipo '"noreste"' no se puede asignar al tipo 'Direccion'.
console.log(direccion)

//enum
enum Priority {
    low = 0,
    medium = 1,
    high = 2,
    critical = 3,
}

const h = Priority.high;
console.log(Priority[h]);