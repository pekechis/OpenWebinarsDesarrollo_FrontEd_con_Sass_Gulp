const {src, dest, series, parallel} = require('gulp');
const sass = require('gulp-dart-scss');
const pleeease = require('gulp-pleeease');
const rename = require('gulp-rename');
const processhtml = require('gulp-processhtml');


function build_css() {
    return src("./BootStrap/scss/bootstrap.scss")
    .pipe(sass())
    .pipe(pleeease())
    .pipe(
      rename({
        basename: "bootstrap",
        suffix: ".min",
        extname: ".css" 
      }))    
    .pipe(dest('Proyecto/css/'));
}

function mover_js() {
    return src('./BootStrap/dist/js/*')
    .pipe(dest('./Proyecto/js/'));
}

var options = {
    overwrite: true
}

function procesar_html() {
    return src("./Proyecto/proyecto.html")
    .pipe(processhtml())
    .pipe(dest('./Proyecto/',options));
}


exports.build_css = build_css;
exports.mover_js = mover_js;
exports.procesar_html = procesar_html;
exports.default = parallel(build_css,mover_js,procesar_html);

