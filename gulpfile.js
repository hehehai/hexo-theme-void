var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var onError = function(err) {
  console.log(err);
};

gulp.task('sass', function() {
  return gulp
    .src('./source/scss/*.scss')
    .pipe(
      plumber({
        errorHandler: onError,
      }),
    )
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./source/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('./source/scss/_partial/*.scss', ['sass']);
  gulp.watch('./source/scss/*.scss', ['sass']);
});
