var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', function(){
	console.log('Hello World');
});

gulp.task('compress', function(cb){
	pump([
		gulp.src('lib/*.js'),
		uglify(),
		gulp.dest('dist')
	],
	cb
);
});
