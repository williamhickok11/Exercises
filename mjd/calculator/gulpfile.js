var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['lint', 'watch', 'jasmine']);

gulp.task('watch', function() {
  gulp.watch('./Javascript/**/*.js', ['lint']);
});

gulp.task('lint', function() {
  return gulp.src('./Javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
 
gulp.task('jasmine', function() {
  gulp.src('spec/test.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it 
    .pipe(jasmine())
  }
);