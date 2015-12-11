/**
 * Created by fiddlest on 02/12/15.
 */
'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('default',['lint','nodemon']);


gulp.task('lint', function() {
    return gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
        script: './app.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});