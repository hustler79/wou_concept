'use strict';

const gulp = require('gulp');
const gg = require('gore-gulp');

const gore = gg({
  baseDir: __dirname
});

gore.setup(gulp);

gulp.task('build', ['webpack.development']);
