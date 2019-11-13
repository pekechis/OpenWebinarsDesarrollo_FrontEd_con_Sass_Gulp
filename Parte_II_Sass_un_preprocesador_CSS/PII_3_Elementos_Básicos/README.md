## Parte II.3 Elementos básicos de Sass

En este apartado vamos a comenzar a practicar con Sass. Para ello introduciremos y usaremos sus elementos básicos.

Sin embargo, antes de lanzarnos a todo esto me parece importante destacar, ya que este curso lleva la palabra _**profesional**_ en el título, el hecho de que para usar de manera eficiente Sass en nuestros proyectos Web es muy recomendable establecer ciertas reglas, guías o convenciones que nos sirvan para optimizar nuestro esfuerzo haciendo que el código que escribimos sea **_reusable,escalable y mantenible_**.

Hay multitud de guías por ahí pero en relación a Sass hay una que me gusta especialmente. Os recomiendo que la tengáis siempre a mano.

[Sass Guideline](https://sass-guidelin.es/es/)

Además, por supuesto, también hay que tener siempre presente la documentación oficial:

[Sass - Documentación Oficial](https://sass-lang.com/documentation/)

Una vez aclarado esto, los elementos básicos que vamos a ver en este apartado son:

- Variables
- Comentarios
- Listas y Mapas
- Interpolación
- Anidamiento
- Mi primera compilación

### Variables

Las **_variableS_** son elementos típicos de los lenguajes de programación y de manera muy básica podemos definirlos como contenedores donde **_guardaremos_** ciertos **_valores_** para poder utilizarlos con posterioridad.

**Sass** nos proporciona la posibilidad de trabajar con variables y podemos distinguir:

- La definición de la variable, que es donde le damos nombre y normalmente un valor que puede ser un valor en sí mismo o el resultado de una expresión.
- El uso de esas variables y, por consiguiente, de sus valores asociados.

Un ejemplo:

```scss
//Definición de las variables con sus valores
$cabecera-fondo: rgba(200, 200, 200, 0.8);
$cabecera-anchura: 80%;

//Uso de las variables
.cabecera {
  background-color: $cabecera-fondo;
  width: $cabecera-anchura/2;
  margin: 10px auto;
}
```

En relación a los valores que podemos tener podemos distinguir entre los siguiente tipos de datos:

- Números
- Cadenas
- Colores
- Booleanos
- Null
- Mapas y listas

Estos tipos de datos, salvo los últimos que explicaremos con más detenimiento, son comunes a muchos lenguajes de programación y son conceptos que se deberían manejar para poder realizar el curso.

No obstante podemos encontrar información adicional en el siguiente enlace de la documentación:

[Tipos de valores en Sass](https://sass-lang.com/documentation/values)

#### Valores por defecto y ámbito de las variables

Cuando estoy creando mi propia librería Sass y quiero permitir que los usuarios puedan personalizar las variables de la librería antes de generar el código CSS puedo dar a las variables valores por defecto.

Con esto consigo que al dar valor a una variable no se "machaque" el valor anterior. Se le asigne un valor sólo si no está definida y no es nula.

Se consigue de la siguiente manera:

```scss
// Código del usuario, previo al uso (o importación)
// de mi librería.
$gris: #ddd;
$color-letra-pie: $gris;

// Código de mi librería, respeto el anterior ya
// que está previamente definido.
$gris: #eee !default;
```

Las variables en Sass tienen ámbito, que no es mas que el _"espacio"_ en el cuál su valoe este disponible. Así, en Sass podemos distinguir entre:

- **_Variables globales:_** que estarán disponibles a lo largo de todo el código Sass y que se definen fuera de todo bloque, normalmente al principio de los ficheras Sass.
- **_Variables locales:_** declaradas dentro de bloques (**{}**) y que sólo están disponibles y tienen valor dentro de ese bloque.

Un ejemplo de estos dos tipos:

```scss
//Variable global fuera de todo bloque
$logo-width: 50%;

.header {
  //Variable local
  $header-width: 50%;
}
```

_**NOTA:**_ En caso de coincidir en nombre una variable local y una variable global prevalece en valor de la local.

### Comentarios

Los comentarios son un elemento fundamental en cualquier lenguaje de programación. Sass nos permite utilizarlos pudiendo distinguir entre:

1. Comentarios de una línea.
2. Comentarios multilínea.

Un ejemplo de cada uno de estos tipos lo podemos ver en el siguiente ejemplo:

```scss
//Este es un comentario de una línea

/*
  ...
  Este es un comentario multilínea
  ...
*/
```

Comentar bien es algo fundamental y es algo que se va aprendiendo con los años. No obstante os dejo aquí algunas recomendaciones básicas al respecto.

- Comenta todo lo que no sea evidente.
- Es casi imposible _comentar demasiado_ , no te preocupes y explica lo que hagas.
- Describe las funciones que crees y utilices
- Explica las agrupaciones de las reglas y sus objetivos
- Describir los números mágicos.

### Listas y Mapas

Como hemos dicho anteriormente Sass nos propociona la posibilidad de definir valores complejos como Listas y Mapas.

#### Listas

Las listas son colecciones de valores de datos y podemos declarar listas de la siguiente manera:

```scss
//Forma general de la definición
$variable_lista: (v1, v2, v3);

//Por ejemplo
$sizes: (40px, 80px, 160px);
//Otra posibilidad (conforme a las recomendaciones)
$sizes: (
  //
    40px,
  //
    80px,
  //
    160px
);
```

Asociadas a las listas existen multitud de funciones asociadas para acceder a los distintos elementos, añadir elementos, buscar un elementos etc..

[Funciones relacionadas con Listas](https://sass-lang.com/documentation/functions/list)

#### Mapas

Los mapas son colecciones de valores de datos a los que accedemos por clave. Podemos declarar listas de la siguiente manera:

```scss
//Forma general de la definición
$nombre_mapa: (
  //
    "clave1": valor1,
  //...
    "claveN": valorn
);

//Por ejemplo
$breakpoint: (
  "pequeño": 576px,
  "medio": 768px,
  "grande": 992px
);
```

Asociados a los mapas existen multitud de funciones asociadas para acceder a los distintos elementos, añadir elementos, buscar elementos etc...

[Funciones relacionadas con Mapas](https://sass-lang.com/documentation/functions/map)

### Interpolación

Una de las características más útiles y más usadas de Sass es la **Interpolación**.

La **Interpolación** nos permite, casi en cualquier sitio de un documento Sass, incrustar una expresión, cuyo resultado al ser evaluada formará un trozo de código CSS.


Para que esto ocurra debemos incluir la expresión de la siguiente manera:

```scss
  #{expresión_a_evaluar}  
```

Algunos de los lugares donde podemos usar la interpolación son los siguientes:

* Selectores
* Nombres de propiedades
* Comentarios
* Reglas de Sass como @import, @extend y @mixins
* Cadenas con o sin comillas
* Funciones
* Etc...

A continuación vamos a ver algún ejemplo y cómo quedaría todo al generar el CSS:


```scss

  // Interpolación en selectores
  $buttton-type: "error";
  $btn-color : #f00;

  .btn-#{$name} {
      background-color:  $btn-color;
  }

  //Interpolación en el uso de funciones
  $fondo :  "images/fondos/default.png";

  .container {
    ...
    background-image: url("#{fondo}");
    ...
  }

  //Interpolación en comentarios
  $autor: "OpenWebinars";

  /* 
      Web desarrollada por #{$autor}
  */

```

### Anidamiento

Si estamos habituados a trabajar con CSS nos habremos dado cuenta de que conforme nuestras hojas de estilos se van haciendo más complejas nuestros selectores y sus niveles de anidamiento de van alargando.

La escritura de estos selectores es repetitiva, redundante y además no existe e nuestro código CSS ninguna relación de estos selectores cosa que, a nivel de significado si existe.

Sass nos permite anidar selectores para que, además de escribir menos, agrupemos selectores relacionados dentro de una misma organización sintáctica.

Lo podemos ver claramente en el siguiente ejemplo:

```scss

    //Estructura CSS para un menú simple
    nav {...}
    nav li {....}
    nav li a {...}

    //Alternativa usando las posiblidad es de anidamiento (Nesting) de Sass
    nav {
      ...
      li {
        ...
        a{...}
      }
    }
```
Podemos apreciar que este tipo de organización (nesting) es más concisa y agrupa lógicamente los selectores.

Además, podemos hacer referencia al selector padre usando el carácter ***&***. Un ejemplo típico sería:

```scss
    //Estructura en CSS
    a {...}
    a:hover {...}

    //Alternativa en Sass usando & para referirse al selector padre
    a {
      ....
      &:hover {...}
    }
```

Podemos incluso usar ese carácter ***&*** para crear nuevos selectores extendiendo el nombre del selector (ideal para metodologías de nombrado como BEM). Un ejemplo:

```scss
    //Selectores CSS
    .btn {...}
    .btn__warning {...}

    //Origen de selectores en SASS
    .btn {
      ...
      &__warning {...}
    }
```

### Mi primera compilación

Una vez hemos presentados los elementos más básicos que puede contener un fichero Sass vamos a ver cómo procedemos a generar el fichero CSS a partir de dicho fichero.

Recordad, tal y cómo hemos explicado anteriormente, cuál es el proceso.

![Proceso de Compilación](./img/proceso.png)

Y para compilarlo, desde nuestra terminal:

```bash
  > sass fichero_sass.scss fichera_salida.css
```

Curso desarrollado por @pekechis para @openwebinars
