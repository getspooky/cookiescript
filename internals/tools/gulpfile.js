/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const gulp = require('gulp');
const clean = require('gulp-clean');
const minify = require('gulp-imagemin');

// Removing files and folders files before or after running your build.
gulp.task('clean::build', () => gulp.src('build/*').pipe(clean({force: true})));

// Minify PNG, JPEG, GIF and SVG images.
gulp.task('img:min', () =>
  gulp
    .src('app/assets/*')
    .pipe(minify())
    .pipe(gulp.dest('app/assets/compress'))
);
