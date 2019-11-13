# Parte V. Workflow Sass Gulp

Para desarrollar nuestro proyecto vamos a usar como base el mismo workflow que desarrollamos en el apartado 3.5 de este curso.

![Workflow de trabajo](./img/workflow.png)

Y dentro de ese workflow vamos a distinguir las siguientes tareas:

* Borrado de los directorios destino cada vez que comencemos el proceso.
* Generar y minimizar  el CSS partiendo de nuestros ficheros Sass.
* Generarar la documentación usando SassDoc.
* Mover los ficheros generados a su sitio adecuado (ahora tendré más ficheros).
* Preprocesar el fichero html de ejemplo para que todo funcione correctamente.
* Subir mi página al servidor.

Para ellos vamos a usar la misma lista de plugins para gulp que usamos en ese apartado:

* **delete**
* **gulp-dart-scss**
* **gulp-pleeease**
* **sassdoc**
* **gulp-rename**
* **gulp-ssh**
* **gulp-processhtml**
* **gulp-autoprefixer**


Curso desarrollado por @pekechis para @openwebinars
