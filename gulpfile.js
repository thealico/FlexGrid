var gulp = require( 'gulp' ),
sass = require( 'gulp-ruby-sass' ),
//autoprefixer = require( 'gulp-autoprefixer' ),
cssmin = require( 'gulp-cssmin' ),
rename = require( 'gulp-rename' );
//notify = require( 'gulp-notify' );

gulp.task( 'styles', function() {
	return sass( 'src/style/**/*.scss' ).on( 'error', sass.logError )
	//.pipe( autoprefixer( 'last 2 version' ) )
	.pipe( gulp.dest( 'dist' ) )
	.pipe( rename( { suffix: '.min' } ) )
    .pipe( cssmin( { processImport : false } ) )
    .pipe( gulp.dest( 'dist' ) )
	//.pipe( notify({ message: 'sass files compiled'}) );
} );

gulp.task( 'watch', function() {
	gulp.watch( 'src/style/**/*.scss', [ 'styles' ] );
});

gulp.task( 'default', [ 'styles', 'watch' ] );
