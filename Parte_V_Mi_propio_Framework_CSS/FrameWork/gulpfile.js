const { watch,src, dest, series, parallel} = require('gulp');
const del = require('delete');
const sass = require('gulp-dart-scss');
const pleeease = require('gulp-pleeease');
const sassdoc = require('sassdoc');
const rename = require('gulp-rename');
const ssh = require('gulp-ssh');
const processhtml = require('gulp-processhtml');
const autoprefix = require('gulp-autoprefixer');

function borrar(cb) {
    del("./dist/*");
    cb();
}

function build_css() {
    return src("scss/base.scss")
    .pipe(sass())
    .pipe(pleeease())
    .pipe(
      rename({
        basename: "styles",
        suffix: ".min",
        extname: ".css"
      }))    
    .pipe(dest('dist/css/'));
}

function build_docs() {
   var doc_options = {
       dest : "./dist/docs",
       verbose: true
   }
    return src("./scss/*.scss")
   .pipe(sassdoc(doc_options));
}

function mover_img() {
    return src('./img/*')
    .pipe(dest('./dist/img'));
}

function mover_html() {
    return src("./index.html")
    .pipe(processhtml())
    .pipe(dest('./dist'));
}

function mover_js() {
    return src('./js/*')
    .pipe(dest('./dist/js'));
}

function mover_fonts() {
    return src('./fonts/*')
    .pipe(dest('./dist/css/fonts'));
}

var config = {
    host: '172.17.0.2',
    port: '22',
    username: 'root',
    password: '12345678'
}

var gulpSSH = new ssh({
    ignoreErrors : false,
    sshConfig : config
});

function subir_servidor() {
    return src(['./dist/*','./dist/**/*'])
    .pipe(gulpSSH.dest('/usr/local/apache2/htdocs/'))
}

exports.borrar = borrar;
exports.build_css = build_css;
exports.build_docs = build_docs;
exports.subir_servidor = subir_servidor;
exports.mover_img = mover_img;
exports.mover_html = mover_html;
exports.mover_js;
exports.proceso = series(borrar,
                                       parallel(build_css,build_docs),
                                       parallel(mover_img,mover_html,mover_js,mover_fonts),
                                       subir_servidor);

exports.default = function() {
    watch('./scss/*.scss',build_css);
}


