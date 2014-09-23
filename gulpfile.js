var gulp    = require('gulp')
   ,stylus  = require('gulp-stylus')
   ,jade 	= require('gulp-jade')
   ,jshint	= require('gulp-jshint')
   ,watch	= require('gulp-watch');

gulp.task('test', function(){
	console.log('hello world');
});

gulp.task('stylus', function(){
	gulp.src('./app/assets/css/main.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public'));
});

gulp.task('default',['test']);