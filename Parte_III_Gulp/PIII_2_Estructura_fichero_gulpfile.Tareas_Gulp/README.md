## Parte III.3 Estructura de un fichero Gulpfile.js

En el apartado anterior dejamos preparado todo el entorno para poder trabajar con **_Gulp_**. Creamos el proyecto, instalamos la dependencia de **Gulp** para el mismo e investigamos en contenido del fichero package.json que se se había creado al hacer estas dos operaciones.

Ahora vamos a empezar a utilizar **Gulp**. Si recordamos la definición era un "Task Runner" o "Build Tool", es decir que lo que vamos a hacer con Gulp es definir una serie de tareas que **Gulp** ejecutará automáticamente con el objetivo de construir el **Workflow** (flujo de trabajo) para mi proyecto Front-End.

### Mi primer gulpfile.js

Sin anestesia...

```js
require("gulp");

//TAREA
function holamundo(cb) {
  console.log("Hola Mundo");
  cb();
}

//TAREA
function adiosmundo(cb) {
  console.log("Adios Mundo");
  cb();
}

//HACEMOS PUBLICAS LAS TAREAS
exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
//ESTABLEZCO TAREA POR DEFECTO
exports.default = holamundo;
```

En primer lugar destacar que las síntaxis de esta versión del Gulp (4.0.2) difiere bastante con respecto a versiones anteriores. Es algo a tener en cuenta si buscáis tutoriales para aprender por vuestra cuenta.

Si sabemos un poco de javascript todo será mucho más fácil de entender pero básicamente lo que hacemos en ese fichero lo podemos dividir en tres partes:

- Inclusión del módulo Gulp para hacerlo disponible.
- Declaración de las tareas que vamos a tener como si fueran funciones javascript.
- Exportamos las tareas que consideramos que deben ser públicas (ejecutables desde el exterior) y declaramos la tarea por defecto (default).

### Ejecutando las tareas del gulpfile.js

Una vez hemos creado ese fichero podremos ejecutar las tareas e interactuar con el mismo a través de la línea de comandos. Siguiente con el ejemplo anterior:

```sh
### Lista las tareas contenidos en el fichero gulpfile.js de ese directorio
> gulp --task

### Ejecuta la tarea por defecto (default)
> gulp

### Ejecuta las tareas especificando el nombre
> gulp holamundo
> gulp adiosmundo
```

## Ejecutar tareas en serie y en paralelo

Para flujos de trabajo complejos Gulp nos permite realizar tareas unas detrás de otra, estableciendo una secuencia e incluso,dadas las características de javascript, lanzar tareas en paralelo para que se vayan ejecutando a la vez.

Probablemente al comienzo nuestros flujos de trabajo no vayan a ser muy complejos y debemos de tener cuidado con las dependencias y posibles condiciones de carrera que puedan tener nuestras tareas en paralelo.

La síntaxis de Gulp para declarar ejecuciones de tareas en paralelo y en serie es la siguiente:

```js
//Asignación desestructurada
const { series, parallel } = require("gulp");

function t1(cb) {
  //Contenido de la tarea t1
  cb();
}

function t2(cb) {
  //Contenido de la tarea t2
  cb();
}

exports.paralelo = parallel(t1, t2);
exports.default = series(t1, t2);
```

Es importante destacar que puede tener más de dos en serie y más de dos en paralelo y que puedo anidar tareas en serie y en paralelo para flujos complejos. Para más información deberíamos leer la documentación oficial.

### Creando un Pipeline. src() y dest()

Con los método src() y dest() de Gulp podemos procesar ficheros y construir pipelines de tal manera que cogiendo unos ficheros de origen los procesaremos usando algún plugin y el resultado será procesado por otros plugins y así sucesivamente hasta colocar los ficheros resultantes en su destino.

Un ejemplo básico sería el siguiente:

```js
const { src, dest } = require("gulp");

exports.default = function() {
  //Se mueven los ficheros js dentro de la carpeta src a la carpeta output
  return src("css/*.js").pipe(dest("dist/"));
};
```

En el anterior ejemplo no hay procesamiento ninguno. Existe únicamente un movimiento de ficheros desde una localización a otra. Sin embargo, entre esos dos pasos podemos añadir el procesamiento de los ficheros de origen por tantos plugins como queramos. Muchos de los plugins que nos interesan los veremos en el capítulo posteriormente pero la estructura general será la siguiente:

```js
const { src, dest } = require('gulp');

exports.default = function() {
  //Se mueven los ficheros js dentro de la carpeta src a la carpeta output
  return src('css/*.js')
  .pipe(plugin1())
  ....
  ....
  .pipe(plugin())
  .pipe(dest('dist/'));
}
```

### Reaccionando a cambios (watch)

Si no queremos estar llamando a tareas Gulp cada vez que realizamos un cambio en los ficheros el API de Gulp nos proporciona el método **watch()** que ejecutará ciertas tareas de manera automática si ciertos ficheros cambian.

La síntaxis es sencilla y podemos verla directamente con un ejemplo:

```js
//Obtengo la referencia
const { watch } = require("gulp");

exports.default = function() {
  //Cada vez que cambia un archivo scss se vuelven a generar todos los estilos
  watch("scss/*.scss", compilar_scss);
};
```

Curso desarrollado por @pekechis para @openwebinars.
