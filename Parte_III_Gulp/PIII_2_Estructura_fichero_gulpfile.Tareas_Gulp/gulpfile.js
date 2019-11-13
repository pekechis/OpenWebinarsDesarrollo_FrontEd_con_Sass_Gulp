//Comprueba que tengo gulp instalado en la carpeta y lo asigna a una variable
// para poder usarla luego
const { watch, series, parallel, src, dest } = require("gulp");

//Tarea Hola Mundo
function holamundo(cb) {
  console.log("HOLA:" + Date.now());
  cb();
}

//Tarea Adios Mundo
function adiosmundo(cb) {
  console.log("ADIOS:" + Date.now());
  cb();
}

function watch_css(cb) {
  watch("css/*.css", holamundo);
  cb();
}

//Declaro las tareas públicas con exports
exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;
exports.serie = series(adiosmundo, holamundo);
exports.paralelo = parallel(adiosmundo, holamundo);
exports.watch_css = watch_css;

exports.pipeline = function() {
  return src("css/*.css").pipe(dest("dist/"));
};
