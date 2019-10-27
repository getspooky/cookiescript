const gulp = require('gulp'),
  clean = require('gulp-clean'),
  minify = require('gulp-imagemin');

// Removing files and folders files before or after running your build.
gulp.task('clean::build', () => gulp.src('build/*').pipe(clean({force: true})));

// Minify PNG, JPEG, GIF and SVG images.
gulp.task('img:min', () =>
  gulp
    .src('app/assets/*')
    .pipe(minify())
    .pipe(gulp.dest('app/assets/compress'))
);
