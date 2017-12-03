const gulp        = require('gulp');
const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  gulp.src('sass/*')
  .pipe(sass().on('error', sass.logError))
  .pipe(prefix())
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    });

    gulp.watch("sass/*", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'watch'])
