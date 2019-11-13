const { src, series, dest } = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const pleeease = require("gulp-pleeease");
const  gulpif = require("gulp-if");
const del = require("delete");
const sass = require("gulp-dart-scss");
const sassdoc = require("sassdoc");

function concatenar() {
  return src("./css/*")
    .pipe(concat("final.css"))
    .pipe(dest("./dist/css/"));
}
var options = {
  minimize : false,
  rename : true
}

function min_and_rename() {
  return src("./dist/css/final.css")
    .pipe(gulpif(options.minimize,pleeease()))
    .pipe(gulpif(options.rename,
      rename({
        suffix: ".min",
        extname: ".css"
      })
    ) )   
    .pipe(dest("./dist/css/"));
}

function borrado (cb) {
  del("./dist/css/final.css");
  cb();
}

function generar() {
  return src("./scss/styles.scss")
  .pipe(sass())
  .pipe(dest('./dist/css/'));
}

var doc_options = {
  dest : 'docs'
}

function generar_docs() {
  return src("./scss/styles.scss")
  .pipe(sassdoc(doc_options));
}


exports.concatenar = concatenar;
exports.min_and_rename = min_and_rename;
exports.borrado = borrado;
exports.comb1 = series (concatenar,min_and_rename,borrado);
exports.generar = generar;
exports.generar_docs = generar_docs;

