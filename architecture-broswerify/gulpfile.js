var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserify  = require('gulp-browserify');
var uglify      = require("gulp-uglify");
var watch       = require("gulp-watch");
var jshint      = require("gulp-jshint");
var concat      = require("gulp-concat");
 
gulp.task("default", function () {
    gutil.log("Gulp is working!");
    gulp.start('watch');
});

gulp.task('jshint', function () {
    gutil.log('Starting jshint task.');
    return gulp.src(['./app/components/**/*.js', './app/components/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function() {
    gulp.src('./app/components/commom.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/components/'))
});

gulp.task('uglify', function () {
    gutil.log('Starting uglify task.');
    gulp.src(['./app/components/bundle.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./app/components/'));
});

gulp.task('concat', function() {
    gutil.log('Starting concatJS task.');
    gulp.src('./app/components/bundle.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/components/'));
});

gulp.task('watch', function () {
    gutil.log('Starting watch task.');
    gulp.watch(['./app/components/**/*.js', './app/components/*.js'], function (event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('jshint');
        gulp.start('browserify');
        gulp.start('uglify');
        gulp.start('concat');
    });
 });