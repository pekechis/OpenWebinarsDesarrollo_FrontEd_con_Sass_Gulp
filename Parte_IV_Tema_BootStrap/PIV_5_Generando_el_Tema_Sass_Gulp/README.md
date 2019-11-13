## Parte IV.5 Generando el tema con Sass - Gulp

 En los anteriores dos apartados hemos ido  desarrollando el tema y viendo sus resultados en directo. Esto está bien para aprender pero cuando tengamos ya todo el proceso definido lo que queremos en generar un resultado de forma automáticoay  con todo lo necesario empaquetado.

 Para conseguir esto usaremos las herramienta Gulp que es la herramienta con la que hemos trabajado en el tema anterior.

 En este caso la tareas que quiero que haga Gulp son las siguientes:

 * Generar mi nueva de estilos BootStrap usando Sass.
 * Minimizar esa hoja de estilos.
 * Mover esa hoja de estilos generada a la carpeta del proyecto con el que estamos trabajando.
 * Mover también a esa carpeta del proyecto todos los ficheros js (javaScript) de BootStrap). En este caso no los estoy usando pero puede que en un futuro quiera usarlos para trabajar con los componentes de BootStrap.
 * Procesar el Html para enlazar correctamente la hoja de estilos.

Algunas de estas tareas las podremos paralelizar. Eso lo veremos cuando estemos creando mi fichero gulpfile.js

**NOTA:** Recordar que para poder trabajar con Gulp tendré que crear el proyecto e instalar gulp y los plugins que vaya a usar.



Curso desarrollado por @pekechis para @openwebinars
