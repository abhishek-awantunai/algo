const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function uglifyJs() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream());
}


function style() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./assets/scss/*.scss', style);
  gulp.watch('./assets/js/**/*.js', uglifyJs);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/scss/*.scss').on('change', browserSync.reload);
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
  gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

exports.watch = watch;
exports.uglifyJs = uglifyJs;
exports.style = style;