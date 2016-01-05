'use strict';
// generated on 2015-02-19 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rev = require('gulp-rev'),
    argv = require('yargs').argv,
    assetManifest = require('gulp-asset-manifest'),
    request = require('request'),
    fs = require('fs');

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
        .pipe(rev())
        .pipe(assetManifest({
          bundleName: gulp.bundleName,
          manifestFile: gulp.distFolder + '/manifest.json',
          log: true
        }))
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
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(gulp.distFolder + '/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest(gulp.distFolder));
});

//gulp.task('move', ['cleanServer'], function () {
gulp.task('move', function () {
    var distFolder = '';
    var server = '';
    var assetsPath = '';
    var bundleName = 'common';
    (argv.production) ? distFolder = 'dist' : distFolder = 'dev';
    (typeof(argv.server) == "undefined") ? server = 'thor' : server = argv.server;

    // Read in the manifest.json file
    var manifest = JSON.stringify(fs.readFileSync('./' + distFolder + '/manifest.json', 'utf8'));

    // Set the destination
    switch (true) {
      case server.toLowerCase() == 'arthur':
        var host = 'http://quote.nstarco.com';
        break;
      case server.toLowerCase() == 'arthur2':
        var host = 'http://quotetest.nstarco.com';
        break;
      case server.toLowerCase() == 'arthur3':
        var host = 'http://quotedev.nstarco.com';
        break;
      case server.toLowerCase() == 'thor':
        var host = 'http://thor.nstarco.com';
        break;
    }

    // Load parameters
    assetsPath = '\\\\' + server + '\\cool_ice\\assets\\' + bundleName;
    var versionPath = '/public/default.asp?Category=NS_Public&Service=Assets_Version';

    console.log("Moving new files to: " + assetsPath);
    console.log('To move them to a different server pass the option "gulp move --server=arthur2"');
    console.log('To move the minified version of the files pass --production"');

    var files = [
        './' + distFolder + '/styles/**/*.*',
        './' + distFolder + '/fonts/**/*.*',
        './' + distFolder + '/images/**/*.*',
        './' + distFolder + '/scripts/**/*.*',
        './' + distFolder + '/**/*.*'
    ];

    gulp.src(files, { base: './' + distFolder + '/'})
        .pipe(gulp.dest(assetsPath));


    var formData = {
      token: 'G1Ac6E1MChpEfNU71U7b',
      bundleName: bundleName,
      m_manifest: manifest
    }
    request.post({ url: host + versionPath, formData: formData}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('assets_version failed:', err);
      }
      else if (!err && httpResponse.statusCode == 200) {
        var response = JSON.parse(body);
        if (response.status == 0) {
          console.log('Updated assets versions!');
          console.log(body);
          return
        }
      }
      else {
        console.log("It's dead Jim")
        return
      }
    });
});

gulp.task('clean', function () {
    var distFolder = '';
    (argv.production) ? distFolder = 'dist' : distFolder = 'dev';
    return gulp.src(['.tmp', distFolder], { read: false }).pipe($.clean());
});

gulp.task('docs', function () {
    var distFolder = '';
    (argv.production) ? distFolder = 'dist' : distFolder = 'dev';
    var files = [
        './' + distFolder + '/fonts/**/*.*',
        './' + distFolder + '/images/**/*.*',
        './' + distFolder + '/scripts/**/*.*',
    ];
    return gulp.src(files, { base: './' + distFolder + '/'})
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['html', 'images', 'fonts', 'extras', 'docs']);

gulp.task('default', ['clean'], function () {
    (argv.production) ? gulp.distFolder = 'dist' : gulp.distFolder = 'dev';
    gulp.bundleName = 'common';
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

gulp.task('serve', ['connect', 'styles', 'docs'], function () {
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

gulp.task('watch', ['connect', 'serve', 'docs'], function () {
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

    gulp.watch('app/styles/**/*.scss', ['styles', 'docs']);
    gulp.watch('app/scripts/**/*.js', ['scripts', 'docs']);
    gulp.watch('app/images/**/*', ['images', 'docs']);
    gulp.watch('bower.json', ['wiredep']);
});
