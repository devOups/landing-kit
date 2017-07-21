var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('useref', function () {
  return gulp.src('public/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', minifyCss()))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-img', function () {
  return gulp.src('public/images/**/*')
    .pipe(gulp.dest('dist/images/'))
});

gulp.task('copy-fonts', function () {
  return gulp.src('public/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('clean:dist', function (callback) {
  del(['dist/**', '!dist'], {force:true});
  return callback();
});

gulp.task('clean', function (callback) {
  del('dist/**', {force:true});
  return callback();
});


gulp.task('default', ['connect', 'watch', 'sass']);
gulp.task('dist', function (callback) {
  runSequence(
    'clean:dist',
    ['sass', 'useref', 'copy-img', 'copy-fonts'],
    callback
  );
});
