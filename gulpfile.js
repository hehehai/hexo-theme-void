var gulp         = require('gulp');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var onError = function(err) {
  console.log(err);
};

gulp.task('sass', function() {
  return gulp
    .src('./source/_scss/*.scss')
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
  gulp.watch('./source/_scss/**/*.scss', ['sass']);
});
