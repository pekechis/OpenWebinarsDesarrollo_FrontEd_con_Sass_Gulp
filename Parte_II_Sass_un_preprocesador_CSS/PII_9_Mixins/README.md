## Parte II.9 Mixins en Sass

Los mixins son un de las directivas más importantes que nos proporciona **_Sass_**.

¿Por qué es tan importante?. Pues porque nos permite definir estilos que luego voy a poder **reutilizar** a lo largo de la creación de mi hoja de estilos.

### Definición y uso de los mixins, la directiva @include

La definición de un mixin y su posterior uso es algo muy sencillo:

```scss
//Definición del mixin
@mixin nombre_del_mixin {
  //Contenido (estilos / etiquetas con estilos etc..)
}

//Uso del mixin
@include nombre_del_mixin;
```

Un ejemplo básico sería:

```scss
@mixin centrado {
  margin: 0px auto;
}

header {
  @include centrado;

  background-color: black;
  color: white;
}
```

Generando el siguiente CSS:

```css
.header {
  margin: 0px auto;
  background-color: black;
  color: white;
}
```

Puedo incluir selectores dentro del _mixin_ de tal manera que se pueda usar desde fuera de cualquier otro selector.
Por ejemplo:

```scss
@mixin highlighted-link {
  a {
    background-color: yellow;
    font-style: italic;
    text-decoration: none;
  }
}
@include highlighted-link; //Todo el contenido del mixin de muestra en el css
```

Y una de las cracterísticas más útiles de los _mixins_ es que podemos anidarlos usando la directiva @include dentro de una otra definición de mixin que a su vez, podremos usar posteriormente en otro lugar de nuestras hojas de estilos. Un ejemplo de ese uso podría ser:

```scss
@mixin centrado_menu {
  @include centrado;

  background-color: #666;
  color: white;
  height: 3rem;
}

.main_menu {
  @include centrado_menu();
}
```

### Mixins con parámetros

La verdadera potencia del uso de los **_mixins_**, además de la reutilización de nuestro estilos, reside en la posibilidad que vamos a tener de parametrizarlos. Cada mixins podrá recibir una serie se parámetros, que serán obligatorios u opcionales. En caso de ser opcionales tendremos que asignales en la definición un valor por defecto.

Lo vamos a ver de manera muy claro con un ejemplo:

```scss
//Mixin con todos los parámetros obligatorios
@mixin girar($grados) {
  -webkit-transfrom: rotate(#{gradosdeg}deg);
  -ms-transform: rotate(#{gradosdeg}deg);
  transform: rotate(#{gradosdeg}deg);
}

//Mixin con parámetros opcionales y valores por defecto
@mixin logo($image, $radio: 10px) {
  background-image: url("#{$image}");
  background-position: center;
  border-radius: $radio;
}

//Especificando un valor
.logo-cuadrado {
  @include logo("img/milogocuadrado.png", 0px);
}

//Usando el valor por defecto del parámetro opciones
.logo-redondeado {
  @include logo("img/milogoredondeado.png");
}
```

### Mixins Vs Extends

Si os habeís dado cuenta ,la filosofía de la directiva **@mixin** es **similar** a lo que se pretende conseguir con la directiva **@extend**. El objetivo de ambas es conseguir la **reutilización de código**. Sin embargo tienen algunas diferencias que debemos mencionar y que tenemos que tener en cuenta cuando estemos diseñando nuestras hojas de estilos usando CSS.

- @mixin nos va a permitir el uso de parámetros mientras que @extend no. Eso hace que el uso de @mixin nos de más flexibilidad.
- Con @extend podemos combinar selectores, con @mixin no.
- @extend _puede_ considerarse más adecuado si lo único que queremos es replicar estilos.
- Si usamos @extend con clases y subclases (coge todos los estilos) podemos encontrarnos con que es difícil de preveer el código que vamos a generar. Eso es bastante peligroso en sí mismo

### Usos comunes para los mixins

Hay muchas posibilidades para el uso de la directiva @mixin pero a continuación vamos a citar algunos de los más comunes:

- Media Queries.
- Prefijos relativos a los navegadores.
- Transformaciones CSS.
- Animaciones CSS.
- Colocación fija de elementos.
- Gradientes.

Por si es de vuestro interés existe una página que los recopila por temática.

[Ejemplos de Sass Mixins](!https://github.com/7ninjas/scss-mixins)

Curso desarrollado por @pekechis para @openwebinars
