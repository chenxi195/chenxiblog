var gulp = require('gulp');
var concat = require('gulp-concat');

var src_libjs = [
    'public/bower_components/jquery/dist/jquery.min.js'
    ];
var src_libcss = [
    'public/bower_components/bootstrap/dist/css/bootstrap.min.css'
];
var dest_js = 'public/js';
var dest_css = 'public/css';

gulp.task('build:libjs', function() {
    gulp.src(src_libjs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(dest_js));
});
gulp.task('build:libcss', function() {
    gulp.src(src_libcss)
        .pipe(concat('libs.css'))
        .pipe(gulp.dest(dest_css));
});
gulp.task('default', ['build:libjs', 'build:libcss']);