const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const babelify = require('babelify');

var scriptCount = 0;
//Gulp task
//-------------------------------
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('deploy', function () {
    bundleApp(true)''
});

gulp.task('watch', function () {
    gulp.watch(['./js/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

//Private Functions
//---------------------------------------------------
function bundleApp(isProduction){
    scriptsCount++;
//broserify will bundle all out js files together and will
//to allow modules to work on front-end
let appBundlet = browserify({
    entries: './js/app.js',
    debug: true;
})
}