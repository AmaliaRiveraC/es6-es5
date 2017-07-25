var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');


gulp.task('es6', () => {
	browserify('./src/js/app.js')
	.transform('babelify', {presets: ['es2015', 'react']})
	.bundle()
	.pipe(fs.createWriteStream('./public/bundle.js'))
});