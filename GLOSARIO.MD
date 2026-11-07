> **Superset**: Un lenguaje que incluye todas las carácteristicas de otro lenguaje, al mismo tiempo que incorpora nuevas carácteristicas adicionales. Ejemplo: TypeScript con respecto a JavaScript.
> Fuente: https://www.epicweb.dev/what-is-a-superset-in-programming
>
> **Transpilación**: Traducir el código de un lenguaje a otro de nivel de abstracción similar.
> Fuente: Material de Clase 'Introducción a TypeScript'.
>
> **Narrowing**: Proceso de reducir el tipo de una variable de un tipo más general o amplio hacia un tipo más específico dentro de cierto bloque de código o contexto.
> Fuente: https://medium.com/@hrishikesh.pandey9955/what-is-narrowing-in-typescript-047b4c450de4
>
> ```
> function printIfTruthy(value: string | null): void {
>  if (value) {
>  console.log(value.toUpperCase());
>  } else {
>  // Inside this block, value is narrowed to null
>  }}
> ```
>
> **Type-Stripping**: Técnica introducida en el entorno Node.js, consiste en ejecutar archivos `.js` eliminando tipos sin verificarlos ni transformar el código en sí.
> Fuente: https://satanacchio.hashnode.dev/everything-you-need-to-know-about-nodejs-type-stripping
>
> **Enum**: Estructura que define un conjunto de valores constantes nombrados, todo bajo un mismo nombre.
> Fuente: https://coddy.tech/docs/es/typescript/enums
>
> ```
> enum Direction {
> Up = 1,
> Down,
> Left,
> Right,
> }
> ```
>
> **Interfaz**: Herramienta que permite definir la estructura de un objeto y su comportamiento. Al implementarlo en una clase se establece como un contrato.
> Fuente: https://www.luisllamas.es/interfaces-en-typescript/
>
> ```
> interface Persona {
>   nombre: string;
>   edad: number;
>   saludar(): void;
> }
> ```
>
> **tsc**: _TypeScript Compiler_. Es el compilador que implementa TypeScript para verificar tipos.
> Fuente: https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler
>
> **String**: Tipo utilizado para representar secuencias de caracteres.
> Fuente: https://www.luisllamas.es/typescript-tipo-string/
>
> ```
> let mensaje: string = "Hola, TypeScript!";
> let saludo: string = '¡Bienvenido!';
> let plantilla: string = `Este es un mensaje de TypeScript`;
> ```
>
> **Union Type**: Tipo compuesto que permite aceptar múltiples tipos de datos en una variable o función.
> Fuente: https://www.luisllamas.es/typescript-uniones/
>
> ```
> let valor: number | string;
> ```
>
> **outDir**: Directorio donde se colocarán los archivos .js generados por la transpilación de código TypeScript a JavaScript.
> Fuente: https://www.typescriptlang.org/tsconfig/#outDir
