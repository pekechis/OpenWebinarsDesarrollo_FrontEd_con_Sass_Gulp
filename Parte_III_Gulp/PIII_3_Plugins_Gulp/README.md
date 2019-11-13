## Parte III.3 Plugins Gulp

**Gulp** nos proporciona una serie de plugins que nos van a permitir realizar tareas dentro de nuestro _workflow_ o _pipeline_ para llegar a construir e incluso desplegar nuestra página web.

Recordad, que de manera general nuestro _workflow_ de trabajo va a ser algo similar a lo que podemos ver aquí abajo.

![Workflow en Gulp](./img/workflow.png)

Pero, ¿dónde podemos encontrar todos esos plugins que nos van a facilitar el desarrollo web?.

Tenemos la suerte de que en la misma página oficial de [Gulp](https://guljs.com) tenemos un recopilatorio de más de 3700 plugins con todo tipo de funcionalidad. Dada esa variedad la misma página nos proporciona un buscador para hacer un poco más fácil la búsqueda. Podemos acceder a la lista completa y al buscador en el siguiente [enlace](https://gulpjs.com/plugins/).

### Instalación de los plugins

Una vez hemos localizado el plugin que nos interesa nos daremos cuenta de al hacer click sobre el nombre nos lleva a la página del [gestor de paquetes de Node (npm)](https://www.npmjs.com/). En dicha página se recoge la instalación y de cada uno de ellos aunque, para simplificar, podemos decir que la instalación de un plugin se realizará de la siguiente manera:

```sh

## Si queremos que la instalación sea global
> npm install -g nombre_del_modulo_o_plugin

## Si queremos que la dependencia se guarde en el package.json para la posterior distribución de mi proyecto
> npm install --save-dev nombre_del_modulo_o_plugin

```

### Algunos plugins o módulos recomendados

La lista es larga, evoluciona constantemente pero para las tareas relacionadas con los contenidos del curso podemos establecer una lista más pequeña:

- **gulp-concat:** Concatenación de ficheros.
- **gulp-if:** Ejecución condicional de tareas en Gulp.
- **gulp-rename:** Renombrado de ficheros.
- **gulp-dart-sass:** Compilación de Dart-Sass(gulp-sass para versiones anteriores de Sass).
- **gulp-processhtml:** Procesamiento y modificación de ficheros HTML.
- **gulp-plumber:** Gestión de los errores en la ejecución de las tareas de un pipeline o workflow.
- **del:** Borrado de ficheros.
- **path:** Trabajar con rutas a ficheros y/o directorios.
- **gulp-image-optimize:** Para optimizar el tamaño de los ficheros de image.
- **gulp-pleease:** Postproceso de ficheros CSS.
- **sassdocs:** Documentación de ficheros SCSS utilizando ficheros SassDoc.
- **gulp-ssh:** Para gestionar conexiones y transferencias sftp o ssh.

Existen, por supuesto, muchas más y sobre todos son interesantes para el desarrollo Front-End aquellas relacionadas con JavaScript, pero el desarrollo JavaScript queda fuera del alcance de este curso.

### Ejemplos de uso

A continuación vamos a ver ejemplos para ficheros gulpfile.js que usan algunos de estos plugins para ejecuar tareas.

#### Ejemplo con gulp-concat

```js
//Defino una tarea que devuelve un stream que concatena todos los
// archivos de la carpeta css en un solo archivo final.css y lo deja en
// la misma carpeta
function concatenar() {
  return src("./css/*")
    .pipe(concat("final.css"))
    .pipe(dest("./css/"));
}

exports.contatenar = concatenar;
```

#### Ejemplo con gulp-pleeease y gulp-rename

```js
///Defino una tarea que devuelve un stream que minimiza el contenido del fichero final.css, le cambia el nombre poniendo el sufijo .min y lo deja en la misma carpeta
function min_and_rename() {
  return src("./css/final.css")
    .pipe(pleeease())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css"
      })
    )
    .pipe(dest("./css/"));
}


```


### Ejemplo con del 

```js
//Borra el archivo final generado (callbacks). En este caso no hay stream
function borrado (cb) {
  del("./dist/css/final.css");
  cb();
}
```

#### Ejemplo con gulp-dart-sass y sassdoc

```js
//Tarea para generar el CSS a partir de los ficheros Sass
function generar() {
  return src("./scss/styles.scss")
  .pipe(sass())
  .pipe(dest('./dist/css/'));
}

//Opciones para el módulo sassdoc
var doc_options = {
  dest : 'docs' //Ruta de destino a la documentación
}

//Tarea para generar los documentos de los ficheros Scss
function generar_docs() {
  return src("./scss/styles.scss")
  .pipe(sassdoc(doc_options));
}

```

#### Ejemplo con gulp-if

```js

//Opciones que vamos a usar como condiciones del plugin gulpif
var options = {
  minimize : false,
  rename : true
}

function min_and_rename() {
  return src("./dist/css/final.css")
    // Si minimize es true se aplica la tarea
    .pipe(gulpif(options.minimize,pleeease()))
    // Si la opción de rename es true se aplica la tarea de renombrado
    .pipe(gulpif(options.rename,
      rename({
        suffix: ".min",
        extname: ".css"
      })
    ) )   
    .pipe(dest("./dist/css/"));
}

```

Curso desarrollado por @pekechis para @openwebinars.
