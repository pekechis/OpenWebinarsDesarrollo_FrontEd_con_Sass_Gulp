# Parte V.1 Estructura de mi proyecto

Vamos a ponernos manos a la obra. Vamos a desarrollar un pequeño FrameWork CSS usando las herramientas que hemos visto a lo largo del curso.

Usaremos **Gulp** para definir mi proceso, del que ya hablaremos más detenidamente en el próximo apartado, usaremos **Sass** para generar y mantener de manera correcta las hojas de estilos y usaremos **SassDoc** para generar de manera automática los documentos asociados al framework.

De momento, y para empezar, en este apartado describiremos la estructura de directorios del proyecto y enumeraremos los elementos que lo van a conformar.

Tened en cuenta que es un FrameWork sencillo construido para uso docente. Un framework de verdad tendría  muchos más elementos y más complejidad.

## Estructura de directorios

Tendremos una estructura de datos inicial con las siguiente carpetas y ficheros:

* **scss:** Carpeta que contendrá todos los ficheros Sass..
* **js:** Carpeta que contendrá los archivos tjavascript de mi proyecto. En nuestro caso la librería de iconos ***FontAwesome***.
* **vendors:** Hojas de estilos realizadas por terceros. En nuestro caso las hojas de reseteo.
*  **dist:** Carpeta en la que colocaremos el resultado de la compilación **Sass** y **SassDoc**.
*  **img:** Carpeta que contendrá las imágenes del proyecto de prueba.
*  El fichero *index.html* que esl fichero que usaremos para poner en funcionamiento nuestro framework.


A su vez, una vez hemos compilado todos los ficheros para la construcción del Framework dentro de la carpeta **dist** tendremos las siguientes subcarpetas y ficheros:

* **css:** Hojas de estilos generados por Sass.
* **docs:** Documentos generados por SassDocs.
* **js:** Ficheros javascript necesarios para el proyecto.
* **img:** Carpeta que contendrá las imágenes del proyecto una vez hayan sido optimizadas.
* El fichero index.html con las hojas de estilos y los ficheros javascript perfectamente enlazados.


## Elementos del Framework

Siguiendo con la idea de un FrameWork sencillo vamos a tener los siguientes elementos.

En la Parte I:

* Hojas de reseteo de estilos.
* FontAwesome.
* Estilos para elementos generales.
  
En la Parte II:

  * Layout / Maquetación.
  * Tablas.
  * Listas.

En la Parte III:

  * Imágenes.
  * Formularios.
  * Menú.


Curso desarrollado por @pekechis para @openwebinars
