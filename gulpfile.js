// FOR SETUP SEE: https://www.browsersync.io/docs/gulp

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.js").on("change", reload);
    gulp.watch("*.css").on("change", reload);
});

// or...

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });

// Gulp default task
gulp.task('default', ['browser-sync']);