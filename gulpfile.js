var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');


gulp.task('clean-dist-folder', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
            index:"dist/components/examples.html"
        }
    });
});

/**
	Processando os components
*/
gulp.task('parse-and-minify-react-components', function() {
	return gulp.src(["components/**/*.jsx"],{base:"./"})
		.pipe(react())
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-html-components', function() {
	return gulp.src(["components/**/*.html"],{base:"./"})
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-css-components', function() {
	return gulp.src(["components/**/*.css"],{base:"./"})
		.pipe(gulp.dest('dist'));
});

/**
	Copiando o exemplo para a pasta dist
*/
gulp.task('copy-example', function() {
	return gulp.src(["components/example.*"],{base:"./"})
		.pipe(gulp.dest('dist'));
});

/**
	Processando as dependencias do bower
*/
gulp.task('copy-bower-components', function() {
	return gulp.src(["bower_components/**/*.js"],{base:"./"})
		.pipe(gulp.dest('dist'));
});


gulp.task('build',[
	'parse-and-minify-react-components',
	'copy-bower-components',
	'copy-html-components',
	'copy-css-components',
	'copy-example'
]);


gulp.task('default',['clean-dist-folder'], function(){
	gulp.start('build');
});

gulp.task('watch',['build','browser-sync'], function(){
	return gulp.watch("app/**/*.*", ['build', browserSync.reload]);
});