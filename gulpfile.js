var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');


gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss') // /**/* возвращает все файлы .scss в директории и поддиректориях
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
})

// gulp.task('cleanJS', function() {
//     return del.sync('app/js/index.min.js');
// })

// gulp.task('scripts', ['cleanJS'], function() {
//     return gulp.src('app/js/**/*.js')
//         .pipe(concat('index.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'));
// })


gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
})

// gulp.task('cleanDist', function() {
//     return del.sync('dist');
// })

// gulp.task('watch', ['sass', 'browserSync'], function() {
//     gulp.watch('app/sass/**/*.scss', ['sass']);
//     gulp.watch('app/*.html', browserSync.reload);
//     gulp.watch('app/**/*.js', browserSync.reload);
// })

gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('app/sass/**/*.scss', function() {
        setTimeout(function() { gulp.start('sass'); }, 500)
    });
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
})

gulp.task('build', ['cleanDist', 'sass', 'scripts'], function() {
    var buildCss = gulp.src('app/css/main.css')
        .pipe(gulp.dest('dist/css'));

    var bulidFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildImg = gulp.src('app/json/**/*')
        .pipe(gulp.dest('dist/json'));

    var buildJs = gulp.src('app/js/index.min.js')
        .pipe(gulp.dest('dist/js'));

    var loadServer = gulp.src('app/server.js')
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
})