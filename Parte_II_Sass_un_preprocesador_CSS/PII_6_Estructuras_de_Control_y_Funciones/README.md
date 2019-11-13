## Parte II.6 Estructuras de control y funciones

Además de los elementos básicos que vimos en el apartado 2.3 y, tal como ya dijimos anteriormente, **Sass** nos proporciona una serie de estructuras que, siendo típicas de los lenguajes de programación, nos van ayudar mucho a la hora de desarrollar nuestras hojas de estilos en proyectos grandes.

En este apartado vamos a tratar dos:

* Estructuras de Control.
* Funciones.


### Estructuras de Control

Las estructuras de control son aquellas que nos van a permitir definir un flujo de ejecución a la hora de generar nuestras hojas de estilos. **Sass** nod proporciona las siguientes:

* @if / @else if / @else
* @while
* @for
* @each

#### @if / @else if / @else

Esta estructura nos permite controlar si un bloque **Sass** será evaluado o no atendiendo a una expresión o condición. De manera general tienen la siguiente estructura:

```scss
    @if expresion2 {
        //Se evalua si se cumple la expresión
    } @else if expresion2 {
        //Esta parte es opcional y se evalua si se cumple la expresión2    
    } @else {
        //Esta parte también es opcional. Se evalua cuando no se cumple ninguna de la expresiones de las pares anteriores.
    }
```

Un ejemplo sería:

```scss
// @if / @else if / @else example
$light-theme: true;
$dark-theme: false;

header {
  @if $light-theme == true {
    background-color: #fff;
    color: #000;
  } @else if $dark-theme {
    background-color: #000;
    color: #fff;
  } @else {
    //Default theme
    background-color: #aaa;
    color: #444;
  }
}
```

Dependiendo de los valores de las variables $light-theme y $dark-theme tendremos una u otra combinación de colores y, en caso de que ambas sean falsas, un combinación de colores por defecto.

#### @while

Esta estructura de control nos sirve para evaluar de manera repetitiva ciertas órdenes ***Sass***. De manera general tiene la siguiente estructura:

```scss
  @while expresión {
      //Esto se evaluará mientras se cumpla la expresión
}
  
```

Un posible ejemplo sería:

```scss
$num: 1;
$color-list: #0f0, #00f, orange, #ccc;
@while $num < 5 {
  td:nth-child(#{$num}) {
    color: #f00;
    background-color: nth($color-list, $num);
  }
  $num: $num + 1;
}
```

Utilizamos el bucle para recorrer una lista de colores y hacer que las celdas de una tabla tengan diferentes colores dependiendo de la posición en la que se encuentran.

El Css que se genera sería el siguiente:

```css
td:nth-child(1) {
  color: #f00;
  background-color: #0f0;
}

td:nth-child(2) {
  color: #f00;
  background-color: #00f;
}

td:nth-child(3) {
  color: #f00;
  background-color: orange;
}

td:nth-child(4) {
  color: #f00;
  background-color: #ccc;
}
```
#### @for

Esta estructura de control es muy similar a la estructura @while. Las diferencisa son que nosotros establecemos unos valores inicial y final para controlar el ńumero de veces que se repite la estructura y que no tenemos que preocuparnos para la actualización de las variables de control. De manera general tiene la siguiente estructura:

```scss
    @for $var from $start to $end {

    }

```

Un ejemplo sería:

```scss
num: 1;
$color-list: #0f0, #00f, orange, #ccc;

@for $i from 1 to 5 {
  p:nth-of-type(#{$i}) {
    color: #f00;
    background-color: nth($color-list, $i);
  }
}

```

Aquí estamos dando unos colores a los 4 primeros párrafos de una página web y escogiendo esos colores de una lista de colores. El Css que se genera es el siguiente:

```css
p:nth-of-type(1) {
  color: #f00;
  background-color: #0f0;
}

p:nth-of-type(2) {
  color: #f00;
  background-color: #00f;
}

p:nth-of-type(3) {
  color: #f00;
  background-color: orange;
}

p:nth-of-type(4) {
  color: #f00;
  background-color: #ccc;
}
```

#### @each

Esta estructura es una estructura iterativa que utilizaremos para recorrer tanto listas como mapas.

#### @each para recorrer una lista

La estructura general sería:

```scss
$list: ...;

@each $e in $list {
    //Trozo de código que se evalua tantas veces como elementos tenga la lista. En cada iteración en $e tendremos el elemento de la lista que tratamos cada vez.
}
```

Un ejemplo:

```scss
$usuarios: pepe, lola,manuel;

@each $u in $usuarios {
   .profile-#{$e} {
    background: 
  image-url("img/#{$e}.png") no repeat;
}

```

Esto genera el siguiente Css:

```css
.profile-pepe {
  background: image-url("img/pepe.png") no repeat;
}

.profile-lola {
  background: image-url("img/lola.png") no repeat;
}

.profile-manuel {
  background: image-url("img/manuel.png") no repeat;
}
```

***Nota:*** Debemos tener cuidado con la utilización (o no), de las comillas en las listas.

#### @each para recorrer mapas.

En estos casos la estructura general sería:

```scss
$map: ...;

@each $k,$v in $map {
    //Trozo de código que se evalua tantas veces como elementos tenga el mapa. En cada iteración en $k tendremos la clave y en $v el valor del elemento del mapa
}
```

Un ejemplo sería:

```scss
$mapa : pepe : pepe.png, lola: lola.png ,manuel: manuel.png;

@each $u,$v in $mapa {
   .perfil-#{$u} {
    background: image-url("img/#{$v}") no repeat;
}
```

El Css resultante sería:
```css
.perfil-pepe {
  background: image-url("img/pepe.png") no repeat;
}

.perfil-lola {
  background: image-url("img/lola.png") no repeat;
}

.perfil-manuel {
  background: image-url("img/manuel.png") no repeat;
}

```

### Funciones

Al igual que en un lenguaje de programación en **Sass** podemos definir funciones en las que por un lado pondremos, normalmente un trozo de código que vayamos a utilizar frecuentemente y , por otro lado, nos deben devolver un valor.

En Sass tendremos:

* Funciones definidas por nosotros mismos.
* Funciones nativas de Sass


#### Funciones definidas por el usuario

De manera general tienen la siguiente estructura:

```scss
//Función sin parámetros
@function name() {
    //Cuerpo de la función
    //que devolverá un valor
    @return ...;
}

//Función con parámetros (uno o varios)
@function name(p1,...,pn) {
    //Cuerpo de la función
    //que devolveŕa un valor
    @return ...;
}
```

Un ejemplo sería:

```scss

@function anchura-col($col,$total) {
  @return percentage($col/$total);
}

//Llamadas a la función
.sidebar {
    ...
    width: anchura-col(2,10);
    ...
}

.main {
    ...
    width: anchura-col(5,10);
    ...
}

```

El CSS generado:

```css
.sidebar {
    ...
    width: 20%;
    ...
}

.main {
    ...
    width: 50%;
    ...
}
```

#### Funciones nativas

En relación a las funciones nativas decir que Sass nos proporciona un montón de utilidades en forma de función. En especial funciones:

* Numéricas
* Cadenas (Strings)
* Colores
* Listas
* Mapas
* Selectores
* Introspection


Podemos encontrar más información en la [documentación de Sass](https://sass-lang.com/documentation/functions
).

Curso desarrollado por @pekechis para @openwebinars
