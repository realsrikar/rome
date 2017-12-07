const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const maps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  gulp.src('sass/*')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(maps.write())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    ui: false,
    port: 7800,
    browser: "Google Chrome",
    notify: false,
  });

  gulp.watch("sass/*", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'serve'])
