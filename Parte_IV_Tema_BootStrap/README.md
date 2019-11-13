## Parte IV. Creando un nuevo tema BootStrap

1. Descargando BootStrap.
2. Comprendiendo la organización del proyecto BootStrap.
3. Creando mi Tema I
4. Creando mi Tema II
5. Generando el tema con Sass y Gulp


### Elementos modificados

#### Colores

```scss
// En el fichero _variables.scss

//Cambio la paletas de colores principal
$primary:#222222 !default;
$secondary:#CACACA !default;
$success:#015668 !default;
$danger:#06648C !default;
$info:#0F81C7 !default;
$warning:#0DE2EA !default;
$light:#ececec !default;
$dark:#FF304F !default;

```

#### Tipo de fuente

```scss
//El fichero _variables.scss

//Fuentes general de la página
@import url(https://fonts.googleapis.com/css?family=Oleo+Script:200,300,400,700);
@import url(https://fonts.googleapis.com/css?family=Comfortaa:200,300,400,700);

$font-family-base:            Comfortaa !default;

//Fuentes de las cabeceras
$headings-font-family:        Oleo Script;

```



#### Menú superior (navbar)

```scss
//En el fichero _variables.scss

//Color de las letras del menú
$navbar-dark-color:                    $white !default;

//Padding de los elementos
$nav-link-padding-y:                0 !default;
$nav-link-padding-x:                1rem !default;


//En el fichero _nav_bar.scss
.navbar-nav {
    .nav-link {
      color: $navbar-dark-color;

      &:hover {
        color: $primary; //Oscurezco el color de la letra
      }
      &:focus {
        color: $navbar-dark-hover-color;
      }

      &.disabled {
        color: $navbar-dark-disabled-color;
      }
    }

#### Lista desplegable (dropdown-menu)

```scss 
//En el fichero _variables.scss
$dropdown-bg:  rgba($dark, 0.5) !default;
$dropdown-link-hover-bg:  $primary !default;
$dropdown-link-hover-color:   $white !default;


//En el fichero _dropdown.scss
.dropdown-menu {
  -//...
  left: 30%; //Muevo el menú desplegable hacia la derecha de la opción
  //...
```

#### Formularios

```scss
//En el fichero _variables.scss

//Para que tengan su hueco y un pequeño bordecito (por cambiar)
$label-margin-bottom:  0.5rem !default;
$label-margin-top: 0.5rem !default;
$label-border-color:  rgba($dark,0.2);
$label-border-width:   $input-btn-border-width;

//Quiero quitar todos los bordes redondeados (sobre todo de los botones)
$border-radius:               0 !default;
$border-radius-lg:            0 !default;
$border-radius-sm:            0 !default;

//En el fichero _reboot.scss añado esas variables a la etiqueta a las 
//propiedades existentes
label {
  border-bottom: $label-border-width solid $label-border-color;
  display: inline-block; // 1
  margin-bottom: $label-margin-bottom;
  margin-top: $label-margin-top;    
}

```

#### Carrusel de imágenes

```scss
//En el fichero _variables.scss

//Modifico la duración de la transición
$carousel-transition-duration:       3s !default;

//Cambio el color base de los indicadores y de los controles para que sean de acuerdo al tema
$carousel-control-color:             $dark !default;
$carousel-indicator-opacity:         .3 !default; //Por usar colores más fuertes
$carousel-indicator-active-bg:       $dark !default;

//Añadimos para el carrusel un bordecito
$carousel-border-width: 0.5 !default;
$carousel-border-color: $dark !default;
$carousel-style: "solid";

//El el fichero _carousel.scss
.carousel-inner {
  //Añadido para que el carrusel tenga cierto borde
  border: $carousel-border-width #{$carousel-border-style}$carousel-border-color;
  .....
}
```



#### Cards

```scss
//En el archivo _variables.scss

//Aumento los bordes redondeados del card
$card-border-radius:                2rem !default;

//En el archivo _cards.scss le doy un borde
.card-subtitle {
  border-bottom : 5*$card-border-width solid $primary; 
  .....
}


```

#### List-Groups

```scss

// En _variables.scss
$list-group-hover-bg:               $gray-300 !default;
$list-group-active-color:           $white !default;
$list-group-active-bg:              $dark !default;

```

####  Cuadros modales


```scss

//En el fichero _modal.scss
.modal-dialog {
  position: absolute;
  right: 0;
  margin: $modal-dialog-margin;
  ....
}
```


#### Alertas


```scss

//En el fichero _alerts.scss

.alert {
  position: relative;
  padding: $alert-padding-y $alert-padding-x;
  margin-bottom: $alert-margin-bottom;
  border: $alert-border-width solid transparent;
  //Un tamaño grande para que se vea el aviso
  font-size: $display3-size;
  text-align: center;
  //No quiero borders
  // @include border-radius($alert-border-radius);
}
```



Curso desarrollado por @pekechis para @openwebinars
