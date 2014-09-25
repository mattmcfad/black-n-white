var gulp    = require('gulp')
   ,stylus  = require('gulp-stylus')
   ,jade 	= require('gulp-jade')
   ,jshint	= require('gulp-jshint')
   ,watch	= require('gulp-watch')
   ,gutil   = require('gulp-util');

gulp.task('stylus', function(){
	gutil.log(gutil.colors.cyan('starting Stylus'));
	gulp.src('./app/assets/css/main.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public'));
});

gulp.task('jade', function(){
	gutil.log(gutil.colors.cyan('starting Jade'));
	gulp.src('./app/assets/templates/*.jade')
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest('./public'));
})

gulp.task('jshint', function(){
	gutil.log(gutil.colors.cyan('starting JShint'));
	gulp.src('./app/assets/javascript/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default', { verbose: true }));
})

gulp.task('watch', function(){
	gulp.watch('./app/assets/css/*.styl', ['stylus']);
	gulp.watch('./app/assets/javascript/*.js', ['jshint']);
	gulp.watch('./app/assets/templates/**/*.jade',['jade']);

})

gulp.task('build',['stylus','jade']);

gulp.task('default',['build','jshint','watch']);