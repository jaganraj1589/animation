var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
connect = require('gulp-connect');
watch = require('gulp-watch');
livereload = require('gulp-livereload');
//let cleanCSS = require('gulp-clean-css');
//let sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['less', 'connect', 'watch'])

gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./src/css'))
    .pipe(livereload());
});
gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./gulp-test/*.html')
    .pipe(gulp.dest('./gulp-test'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['./gulp-test/*.html'], ['html']);
  gulp.watch('./src/less/*.less', ['less']);
});





