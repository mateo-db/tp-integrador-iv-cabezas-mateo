> ## Tema 1: ¿Qué es TypeScript?

### ¿Qué es _TypeScript_ y quién lo desarrolla?

- TypeScript es un lenguaje de programación que funciona como un _superset_ o superconjunto de JavaScript. Que sea un superconjunto de JS quiere decir que todo código válido escrito en JavaScript es también código TypeScript válido.
- Lo desarrolla la compañía Microsoft desde 2012 como proyecto de código abierto.

### ¿Qué diferencias tiene con JavaScript?

- La principal diferencia es su tipado estático frente el tipado dinámico de JavaScript.
  - El tipado estático significa que las variables se declaran con un tipo de dato, y los valores que se asignan a esas variables solo pueden ser del tipo correspondiente.
  - JavaScript, en cambio, es más flexible o permisivo con los tipos y conversiones implicitas.
- Otra de las diferencias principales entre estas dos tecnologías es que TypeScript requiere un tiempo de compilación previo, donde se compila (o transpila) a JavaScript para su posterior ejecución. En contraste con esto, JavaScript es un lenguaje interpretado con compilación JIT (_Just-In-Time_). No necesita una compilación previa antes de ser leído y ejecutado por el entorno de desarrollo, en cambio TypeScript sí.

### ¿Qué ventajas ofrece?

- TypeScript ofrece varias ventajas añadidas:
  - Menos bugs: el tipado estático detecta inconsistencias y errores en tiempo de desarrollo.
  - Escalabilidad: ideal para proyectos con grandes volúmenes de código escrito por múltiples contribuyentes.
  - Ecosistema: es compatible con librerías JS y soporta muchos frameworks (React, Vue, Node.js, etc.)

### ¿Cúal es su versión actual?

La versión actual de TypeScript es la _7.0_.

Fuentes: https://codigofacilito.com/articulos/typescript
https://codica.la/blog/todo-lo-que-debe-saber-el-principiante-sobre-typescript
https://builtin.com/software-engineering-perspectives/typescript
https://es.wikipedia.org/wiki/TypeScript
https://ajluisarg.medium.com/javascript-se-compila-c%C3%B3mo-que-no-es-interpretado-te-lo-demuestro-d38bc6dd64dd
https://www.coderhouse.com/ar/coderlibrary/que-es-typescript-y-por-que-es-clave-en-desarrollo-web-moderno
https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/

> ## Tema 2: Crear y ejecutar un proyecto

### ¿Como se instala TypeScript en un proyecto?

- TypeScript se instala localmente (a través del _package manager_ NPM) como dependencia de un proyecto, ejemplo:

`npm install --save-dev typescript`

o bien,

`npm i -D typescript`

### ¿Para qué sirve el archivo _tsconfig.json_?

- El archivo tsconfig.json sirve para configurar nuestro proyecto de TypeScript, indicando qué archivos forman parte del proyecto, el nivel de rigor con el que se verificará los tipos y como se generará los archivos JavaScript resultantes, entre otras cosas.

### ¿Qué hace el comando _tsc_?

- El comando _tsc_ verifica tipos y nos genera los archivos `.js` correspondientes. Por lo general, este comando genera archivos `.js` aunque haya errores. Para esto existen configuraciones en `tsconfig.json` como `noEmitOnError`, para que no genere el archivo correspondiente si se detectaron inconsistencias.

### ¿Cual es la diferencia entre ejecutar un archivo con _tsc_, _tsx_ y _node_?

- Ejecutando con _node_: no se verifican tipos, se ignora el `tsconfig.json` y no se genera código nuevo JS. No soporta sintaxis de TypeScript como `enum`. Borra las anotaciones de tipos (_type stripping_) y ejecuta el JavaScript resultante.
- Ejecutando con _tsx_: no se verifican tipos, simplemente los quita y le pasa el JS que queda a Node. Soporta sintaxis de TypeScript como `enum`.
- Ejecutando con _tsc_: se verifican tipos, muestra errores y genera archivos `.js` en la carpeta _outDir_.

Fuentes: Material Unidad 4 "Introducción a TypeScript".
https://coddy.tech/docs/es/typescript/install-typescript
https://dev.to/walodja1987/understanding-typescript-execution-tools-a-deep-dive-14ca

> ## Tema 3: Tipos básicos

### ¿Qué son los tipos string, number y boolean?

- Los tipos `string` son tipos de dato que representan texto. Se escriben entre comillas simples, dobles o backticks.
- Los tipos `number` son tipos de dato que representan cúalquier número, entero o no. No existen los tipos `int` o `float`.
- Los tipos `boolean` son tipos de dato que representan dos posibles valores: `true` o `false`.

### ¿Cómo se declara un array con tipo?

- Un array con tipo se declara mediante `let` o `const`, el nombre de la variable junto a dos puntos y luego el nombre del tipo de dato junto a corchetes.

### ¿Qué es un tipo unión?

- Los tipos unión representan un conjunto de distintos tipos que puede tomar un valor en particular. Lista alternativas de tipos con una barra vertical `|`. El valor en cuestión puede tomar solo un tipo de los listados. Ejemplo:

`let typedAnswer: string | number; // union type // typedAnswer es una variable con un valor de tipo string O number`

- Con las variables de tipo unión se puede ir verificando mediante operadores como el `typeof` que posible valor tomará la variable, y de acuerdo a eso que acción tomar. A esto se le llama _narrowing_.

### ¿Por qué se recomienda evitar _any_?

- Se recomienda evitar el tipo `any` ya que es la parte más insegura del sistema de tipos en TypeScript. El tipo `any` indica un tipo que puede tomar cualquier valor y puede usarse en lugar de cualquier otro tipo. Al usar `any` se desactiva la verificación de tipos de TypeScript, lo que lo hace sumamente inseguro ya que el compilador acepta a ciegas cualquier valor que tome este tipo.

Fuentes: https://coddy.tech/learn/javascript/introduction_to_typescript/typed_arrays
https://coddy.tech/docs/es/typescript/basic-types
https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-union-types/cheatsheet
https://coddy.tech/docs/es/typescript/union-types
https://coddy.tech/docs/es/typescript/any-vs-unknown
https://typescript-eslint.io/blog/avoiding-anys/

> ## Tema 4: Funciones

### ¿Cómo se indican los tipos de los parámetros?

- Los tipos de los parametros se indican escribiendo el nombre del parámetro junto a dos puntos seguido del tipo. Cualquier tipo sirve como tipo de parámetro. Ej:

```
function area(width: number, height: number) {
  return width * height;
}
```

### ¿Cómo se indica el tipo de retorno?

- En las funciones, aparte del parámetro también se puede especificar el tipo del retorno. Se hace luego del paréntesis de cierre de los parámetros, dos puntos seguido del tipo que tendrá el retorno de la función. El tipo del retorno de una función, si no se especifica, suele ser inferido por TypeScript según lo que retorne la función.

### ¿Qué es un parámetro opcional?

- Los parámetros opcionales son aquellos que, a la hora de llamar a una función, no es necesario proporcionarles un valor. Para especificar si un parametro es opcional simplemente se le agrega un signo de interrogación (**?**) luego del nombre del parámetro.

### ¿Qué es un parámetro por defecto?

- Un parámetro por defecto es aquel que servirá como valor "default" de nuestra función. Es decir, si a la función cuando la invocamos no se le proporciona un valor al parámetro en cuestión, ese parámetro tomará el valor por defecto con el cual fue declarado en un principio.

Fuentes: https://coddy.tech/docs/es/typescript/functions
https://www.luisllamas.es/typescript-parametros-funciones/
https://www.typescriptlang.org/docs/handbook/functions.html

> ## Tema 5: Interfaces y type

### ¿Qué es una _interfaz_ y para qué sirve?

- Una `interface` es una herramienta fundamental en la programación orientada a objetos que sirve para definir la estructura y comportamiento de un objeto. Es como programar una "plantilla" o plano que servirá para construir otras cosas.

### ¿Qué es un _type_?

- Los _type_ o _alias de tipo_ son una forma de dar nombre a cualquier tipo con la palabra clave `type`, ya sea formas de objeto, funciones, uniones, etc. Como vemos `type` es una forma de "describir" tal como las interfaces, la diferencia radica en qué puede hacer uno qué el otro no. `Type` puede nombrar cosas que una `interface` no puede (`unions` por ejemplo).

### ¿Como se declara una propiedad opcional?

- Una propiedad opcional se declara agregando un signo de interrogación (**?**) luego del nombre de la propiedad, antes de los dos puntos.

### ¿Cuando conviene usar cada uno?

- Depende de lo que se necesite hacer:
  - Para formas de objeto: conviene usar `interface`. Esto permite la fusión de declaraciones (lo que amplía los tipos), también hay una mejor descripción de los errores en composiciones grandes al usar `extends`.
  - Para todo lo que no sea una única forma de objeto, es recomendado usar un alias de tipo (`type`). Ejemplo:
  ```
  type ID = string | number; //union de primitivas
  ```
  Tanto este ejemplo de arriba como muchos otros (tuplas, tipos de función, tipos literales) no se pueden realizar usando `interface`.

Fuentes: https://coddy.tech/docs/es/typescript/type-aliases
https://coddy.tech/docs/es/typescript/interface-vs-type
https://medium.com/@jesusmurfontanals/typescript-para-que-sirven-los-types-y-interfaces-y-en-que-se-diferencian-bee0af17fffa
https://code.mu/es/javascript/typescript/book/prime/structures/optional-properties/#
https://www.luisllamas.es/interfaces-en-typescript/

> ## Tema 6: Enums y tipos literales

### ¿Qué es un _enum_?

- Un `enum` en TypeScript es un conjunto de valores constantes bajo un mismo nombre. Para definir un enum, se utiliza la palabra clave `enum` seguida del nombre del enum y un bloque de llaves que contiene los valores del enum. Los enums son una de las pocas características de TypeScript que no son solo tipos: un enum se convierte en un _objeto real_ de JavaScript cuando se compila el código.

### ¿Qué es un tipo literal?

- Un tipo literal es un tipo que admite solo valores que se le asignó al momento de ser declarado y nada más. El motivo principal de esto es limitar los posibles valores que pueda tomar una variable, asegurando mayor control y seguridad sobre esta última.
- Dependiendo el tipo (tipo literal de cadena, númerico, etc) puede admitir 1 o más variables, pero solo esos. Asignarle un valor diferente de los que se le asignó en un principio provocará un error. Ejemplo:

```
type UnoADiez = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

let numero: UnoADiez;

numero = 1;  // Correcto
numero = 5;  // Correcto
// numero = 11; // Error: El tipo '11' no se puede asignar al tipo 'UnoADiez'.
```

### ¿En qué se parecen y en qué se diferencian?

- Son similares en el sentido de que ambos tanto el enum como los literals son formas de restringir los posibles valores aceptables para una variable. Ahora, tienen varias diferencias:
  - Un `enum` le da **nombre** al conjunto de valores aceptados, y es reutilizable ya que al transpilar el código a JavaScript persiste como un objeto real.
  - Un `type literal` permite _definir un tipo_ para el conjunto de valores aceptados en una variable, pero eso solo le servirá al desarrollador en momento de producción, ya que el tipo literal creado y los valores aceptables que define desaparecen sin producir código al momento de compilación.

### ¿En qué situaciones puedo usar cada uno?

- Enums: cuando se necesita hacer un listado restringido a opciones fijas, claras y nombradas como roles, estados, etc. Herramienta muy útil en la construcción de proyectos medianos a grandes como blogs o APIs.

- Literals: debido a que tienen costo cero (no compilan a código) y son rápidos de usar, se suelen usar para indicar _pocos_ valores fijos para una variable. Se puede usar cuando se necesita una alternátiva rápida y barata a los enums.

Fuentes: https://www.youtube.com/watch?v=SOUYThoIzqc
https://coddy.tech/docs/typescript/literal-types
https://coddy.tech/docs/es/typescript/enums
https://www.luisllamas.es/typescript-literales/
https://dev.to/dchowitz/typescript-enums-vs-string-unions-whats-the-deal-53om
