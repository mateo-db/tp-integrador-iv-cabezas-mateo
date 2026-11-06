> ## Tema 1

### ¿Qué es _TypeScript_?

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

> ## Tema 2

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
