var gulp = require('gulp');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

var paths = {
	test: ['./api/user/spec/**/*.js'],
	api: ['./api/**/*.js'],
	config: ['./config/**/*.js'],
	scripts: ['./client/app/**/*.js', '!./client/app/lib/**/*.js'],
  styles: ['./client/styles/**/*.styl', './client/styles/main.styl'],
  test: ['./client/specs/**/*.js'],
  html: ['./client/app/**/*.html'],
  dest: 'client'
};

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', function(){
	return gulp.src(paths.test)
			.pipe(mocha({reporter: 'nyan'}))
			.once('end', function(){
				process.exit();
			})
			.on('error', handleError);
});

gulp.task('stylus', function(){
  return gulp.src(paths.styles[1])
              .pipe(stylus())
              .pipe(gulp.dest('./client/app/styles'));
});

//serves static assets and auto-reloads browser when files change
gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['jshint']);
  gulp.watch(paths.styles[0], ['stylus']);
});

// jshint's api folder
gulp.task('jshint-api', function(){
	gulp.src(paths.api)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// jshint's config folder
gulp.task('jshint-config', function(){
	gulp.src(paths.config)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('deploy', shell.task(['git push heroku master']));

gulp.task('default', ['jshint-api', 'jshint-config']);


