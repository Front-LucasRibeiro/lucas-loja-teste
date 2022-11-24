var gulp = require('gulp'),

//Sass
sass = require('gulp-sass'),
filesCss = './styles/sass/**/*.+(scss|sass)',
outputCss = './styles/css';


//Sass
gulp.task('sass', function () {
  return gulp.src(filesCss)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(outputCss));
});

const { watch } = require('gulp');

gulp.task('watchFiles', function () {
  gulp.watch(filesCss, gulp.series('sass'));
});

//Run/Watch
gulp.task('default', gulp.parallel('sass', 'watchFiles'));
