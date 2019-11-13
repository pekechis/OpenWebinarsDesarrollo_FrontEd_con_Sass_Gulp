## Parte II.7 Ejercicio Práctico.

Para seguir practicando e ir conociendo toda la potencia de Sass vamos a desarrollar en este ejemplo práctico lo siguiente.

* Un sistema para decoración de tablas con colores para las distintas columnas ya sean pares o impares (hasta 10 columnas) usando **@for** ,**@if** y **@function**.
* Un sistema de botones para tener botones de error / warning / accepted / normal usando **mapas** y **@each**.
* Un sistema de maquetación de hasta 8 columnas usando **@for** y **@function**.


### Decoración de tablas

```scss
//Estilos genreales para la tabla
table {
    border-collapse: collapse;
}

th,td {
    border: 1px solid black;
    padding: 1rem;   
   
}

//Colores para los columnas
$color-col-pares: #CCCCCC;
$color-col-impares: #888888;


//Función que me devuelve el color de fondo de las columnas dependiendo de si es para o impar
@function colum-color($col-number) {
    @if ($col-number%2 == 0) {
        @return $color-col-pares;
    } @else {
        @return $color-col-impares;
    }
}

//Establezco el número máximo de columnas
$inicio : 1;
$fin: 10;

tbody  tr td:hover {
    background-color: orange;
}

@for $num from $inicio to $fin {
    tbody tr  td:nth-child(#{$num}) {        
        background-color: colum-color($num);             
    }
}
```

### Sistema de botones

```scss
//Colores de base
$color-error: #FF0000;
$color-warning: rgb(239, 241, 120);
$color-accepted: rgb(55, 138, 0);
$color-normal: rgb(0, 110, 255);
$color-shadow: #888;

//Valor del radio para redondear los botones
$border-radius: 0.4rem;

//Mapa del que cogeremos los nombres para interpolarlos y los valores de los colores
$btn-colors: ("error" : $color-error,
    "warning" : $color-warning,
    "accepted" : $color-accepted,
    "normal" : $color-normal);

//Elemento botón general
.btn {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border-radius: $border-radius;
    padding: 0.5rem;
    //Estilo para el efecto de cuando pase el ratón por encima
    &:hover {
        box-shadow: $border-radius/2 $border-radius/2 $color-shadow;
    }
    //Estilo al hacer click en el boton
    &:active {
        background-color: orange;
        color: white;
    }
}

//Clase adicional que le da color
@each $k,
$v in $btn-colors {

    .btn-#{$k} {
        background-color: $v;
    }
}

```

### Sistema de maquetación de 8 columnas

```scss
//Sistema de maquetación

//Padre de cada fila
.row {
  display: flex;
  flex-direction: row;
}

//Les doy un tamaño y un borde para distinguirlos
//Sólo válida para el ejemplo
.row > * {
  border: 1px solid black;
  height: 150px;
}

//Número de elementos máximos que voy a tener
$num_elementos: 8;

//Función que devuelve la anchura correspondiente al elemento
@function anchura_col($i) {
  @return (100 / $num_elementos)*$i ;
}


//Bucle para generar las clases
@for $i from 1 through $num_elementos {
.row > .col-#{$i} {
    padding: 1rem;
    width: #{anchura_col($i)}+ "%";
  }
}
```

