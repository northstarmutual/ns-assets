'use strict';
// generated on 2015-02-19 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv;

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('app/styles/*.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    return gulp.src('app/*.html')
        .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        .pipe(gulpif(argv.production, $.uglify()))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(gulpif(argv.production, $.csso()))
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest(gulp.distFolder))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(gulp.distFolder + '/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(gulp.distFolder + '/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest(gulp.distFolder));
});

gulp.task('move', function () {
    var distFolder = '';
    var server = '';
    var assetsPath = '';
    (argv.production) ? distFolder = 'dist' : distFolder = 'dev';
    (typeof(argv.server) == "undefined") ? server = 'arthur3' : server = argv.server;
    assetsPath = '\\\\' + server + '\\cool_ice\\assets\\common';
    console.log("Moving files to: " + assetsPath);
    console.log('To move them to a different server pass the option "gulp move --server=arthur2"');
    var files = [
        './' + distFolder + '/styles/**/*.*',
        './' + distFolder + '/fonts/**/*.*',
        './' + distFolder + '/images/**/*.*',
        './' + distFolder + '/scripts/**/*.*',
        './' + distFolder + '/**/*.*'
    ];
    return gulp.src(files, { base: './' + distFolder + '/'}).pipe(gulp.dest(assetsPath));
});

gulp.task('clean', function () {
    var distFolder = '';
    (argv.production) ? distFolder = 'dist' : distFolder = 'dev';
    return gulp.src(['.tmp', distFolder], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

gulp.task('default', ['clean'], function () {
    (argv.production) ? gulp.distFolder = 'dist' : gulp.distFolder = 'dev';
    //console.log(argv.env);
    (argv.production) ?
      console.log("Building production files in dist folder") : console.log('Run "gulp --production" to build production assets');
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'styles'], function () {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            exclude: ['bootstrap-sass']
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/styles/**/*.css',
        'app/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
