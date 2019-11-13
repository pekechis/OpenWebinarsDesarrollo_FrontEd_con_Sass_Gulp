## Parte II.8 Directivas Sass

Ya hemos visto algunas directivas *@nombre_directiva* de Sass cuando hemos hablado de estructuras de control y de funciones pero, además, **Sass** nos proporciona algunas más que nos van a permitir 

Entre ellas:

* @import
* @extend
* @error / @warn / @debug
* @at-root
* @media / @support / @keyframe


### @import

Desde mi punto de vista es una de las directivas más importantes y nos va a permitir construir una hoja de estilos combinando distintos archivos en tiempo de compilación, ya sean CSS o SCSS y que llamaremos ***partials***.

De esta manera podré evitar distintas peticiones HTTP para cada una de las hojas de estilos.

Al realizar esta combinación desde esa hoja de estilos generada, que es una combinación de todos los partials, podremos acceder a las variables, a las funciones y a todas las partes de todos y cada uno de los archivos que compongan el archivo resultante.

De manera general usaremos la directiva de la siguiente manera:

```scss
@import "file1";
//...
@import "file2";
//@import "file1","file2"; sería los mismo

//Los ficheros (partials) tendrán que tener los siguientes nombres
//_file1.scss y _file2.scss

```

Un ejemplo de esto podría ser:

```scss
@import "scss/colors.scss";
@import "scss/layout.scss";
```


### @extend

Mediante el uso de la directiva @extend podremos reutilizar estilos (fragmentos de código) de tal manera que podré construir estilos de unos componentes usando como base los estilos de otros.

La síntaxis para usar esta directiva es la siguiente:

```scss
.some_selector  {
    //Estilos para este selector
}

.another_selector {
    @extend .some_selector;
    //Estilos propios de .another_selector
}
```

En este caso ***.another_selector*** tendrá todos los estilos propios además de los estilos de ***.some_selector***.

Um ejemplo típico del uso de esta directiva es la contrucción de distintos tipos de botones que tiene la misma forma pero distinto color de fondo:

```scss
.btn {
    border-radius: 2px;
    color: #FFF;
    padding: 5px 0;
    margin: 2px auto;
    text-align: left;
    width: 150px;
}

.btn-error {
    @extend .btn;  
    background-color: #F00;  
}

.btn-ok {
    @extend .btn;
    background-color: #0F0;
}
```
Puede ser que queramos que uno de los selectores usados no salga en el CSS resultante pero que sí sea usado como base usando la directiva @extend. Para ello tendremos que utilizar un  ***placeholder selector*** que funciona igual pero tenemos que añadir el carácter ***%*** delante del nombre del selector. Un ejemplo:

```scss
%btn {
    
}

.btn-error {
    @extend %btn;  
    background-color: #F00;  
}

.btn-ok {
    @extend %btn;
    background-color: #0F0;
}
```

Esta directiva, para usos avanzados tiene algunas peculiaridades que deben ser consultadas en la documentación oficial, pero de manera general podemos hacer algunos apuntes:

* La directivas @ se procesan después del resto (incluidos los selectores referentes a padres o parentescos).
* Copia el estilo en la regla actual.
* Los estilos añadidos tienen preferencia, igual que en HTML+CSS puro.
*  Está a limitado a selectores simples (dart-version)
*  Usado dentro de una directiva @media solo podremos hacer referencia a selectores dentro de esa directiva.
*  Similar a @mixin (comparativa en el capítulo posterior).

### @error / @warning / @debug

La directivas ***@error***, ***@warn*** y ***@debug** son directivas útiles cuando estamos depurando nuestro SCSS. Nos permiten mostrar mensajes y valores de variables, funciones etc..durante el proceso de generación del CSS.

Tienen una síntaxis muy sencilla:

```scss
@error <expression>; //PARA LA COMPILACIÓN

@warn <expression>;

@debug <expression>;
```

Un posible ejemplo sería:

```scss
$test: false;

body {
  @if $test {
    @error "Mensaje de error";
    @debug "Test tiene el siguiente valor: #{$test}"; //nuca sale
  }
  else {
    @warn "Mensaje de warning";
    @debug "Test tiene el siguiente valor: #{$test}"; //Sale cuando test es false
  }
}

```

### @at-root

La directiva ***@at-root*** permite que selectores dentro de reglas con anidamiento sean *movidos* a la raíz del documento. Su uso no es algo común y se puede llegar a usar con anidamientos avanzados que usan fuciones de selección y selectores referentes al elementos padre. Tiene sentido si seguimos metodologías de nombrado como [BEM](http://getbem.com/).

Tiene una síntaxis muy sencilla:

```scss

@at-root selector {
    //Estilos para ese elemento
}

```

Y una aplicación podría ser la siguiente:

```scss

.item {
    color: black;    
    @at-root #{&}is-active {
      color: blue;
    }
}

```

Que genera el siguiente CSS:

```css

.item {
  color: black;
}
.item.is-active {
  color: blue;
}

```

Vemos con el selector  sale a la raíz del documento y genera un selector que une los dos, que es el usado para aquellos elementos que tienen esas dos clases a la vez.

### @media / @support / @keyframes

Sass soporta las directivas @media, @support y @keyframes que son directivas propias de CSS.

Curso desarrollado por @pekechis para @op(igual queenwebinars
