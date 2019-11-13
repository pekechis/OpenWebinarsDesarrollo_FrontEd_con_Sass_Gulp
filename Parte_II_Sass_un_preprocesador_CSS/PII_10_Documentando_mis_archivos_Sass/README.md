## Parte II.10 Documentando mis archivos Sass

Como ya comenté al principio de este curso, uno de los objetivos principales del curso era crear un entorno de desarrollo CSS más profesional. Con esa idea, uno de los puntos que no podemos dejar atrás es el hecho de que debemos documentar los que vayamos haciendo. Documentar es tedioso y que cuesta mucho esfuerzo pero, por suerte, existen herramientas como **SassDoc**

**SassDoc** es un sistema de documentación que me va a permitir **generar** de manera **automática** documentación en formato HTML referente a los ficheros SCSS en los que estoy trabajando. Siempre,evidentemente, siguiendo ciertas reglas que comentaremos posteriormente.

Hay muchas razones por las que debemos usar este tipo de herramientas entre ellas:

- Son herramientas profesionales y nosotros queremos ser profesionales (recordad el nombre del curso).
- Es ideal para proyecto grandes y complejos en los que trabaja mucha gente y en los que la existencia de documentación es algo vital.
- La documentación, no hay que olvidarlo, es parte del desarrollo aunque normalmente no nos guste mucho a los desarrolladores.
- Me permite gestionar automáticamente las dependencias de los elementos.
- Puedo integrarlo con Gulp que es el gestor de tareas que veremos luego y que me va a permitir construir mi workflow de trabajo.
- Puedo darle distintos temas visuales (predefinidios o creados por el usuario).

### Requisitos

Para poder trabajar con SassDoc necesitamos el entorno NodeJs instalado. Es decir:

- **Nodejs**: Entorno de ejecución para JavaScript.
- **Npm**: Gestor de paquetes para Node.
- **Npx**: Para poder ejecutar paquetes Node.

Para poder instalar todo esto tenemos las instrucciones detalladas, para todos los sistemas operativos, en el sigiente enlace.

[Instalación de Nodejs y asociados](https://nodejs.org/es/download/).

Podremos comprobar que todo está bien instalado con los siguientes comandos (pongo las versiones actuales):

```sh

> node --version
v10.16.3
> npm --version
6.9.0
> npm --version
6.9.0

```

### Instalación de SassDoc

Una vez hemos instalado los requisitos necesarios la instalación de **SassDocs** es muy sencilla. Debemos hacer lo siguiente:

```sh
## Para instalarlo a nivel global debemos de tener los permisos necesarios
> npm install sassdoc -g

## Para comprobar que la instalación se ha llevado a cabo correctamente
> sassdoc --version
2.71
```

### Uso básico

Para generar la documentación automáticamente con **SassDoc** debo:

- En primer lugar añadiré **comentarios a mis ficheros Sass**. Los comentarios que queramos incluir en la documentación generada por SassDoc deberán comenzar con **_///_** (tres barras invertidas).
- Estos comentarios se colocarán encima de los elementos que queramos documentar.
- Una vez hayamos añadido todos los comentarios necesarios tendremos que ejecutar el siguiente comando:

```sh
> sassdoc ruta_proyecto_sass [opciones]
```

Esto generará por defecto la carpeta _sassdoc_ con toda la documentación generada automáticamente siendo el punto de entrada el fichero _index.html_.

Y, ¿qué debemos comentar?. Pues normalmente en la documentación deberemos incluir información relativa a variables, funciones y mixins.

Dentro de los comentarios de SassDoc podemos añadir anotaciones que nos van a permitir dotar de significado a ciertos elementos de la documentación, agrupar elementos o simplemente darles un formato diferente (entre muchas otras cosas). Estas anotaciones comienzan por el carácter **_@_** y su lista completa es la siguiente.

| C1          | C2         | C3       |
| ----------- | ---------- | -------- |
| @access     | @ignore    | @return  |
| @alias      | @link      | @see     |
| @author     | @name      | @since   |
| @content    | @output    | @content |
| @deprecated | @parameter | @throw   |
| @example    | @property  | @todo    |
| @group      | @require   | @type    |

Cada una de ellas tiene sus propias características y uso y aunque en el ejemplo no usaré todas en el siguiente enlaces tenéis la documentación exhaustiva:

[Anotaciones SassDoc Referencia](http://sassdoc.com/annotations/).

Curso desarrollado por @pekechis para @openwebinars
