var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss') // /**/* возвращает все файлы .scss в директории и поддиректориях
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
})


gulp.task('minContacts', function() {
    return gulp.src(['app/js/idGenerator.js',
            'app/js/userRegistration.js',
            'app/js/loginScript.js',
            'app/js/userControl.js',
            'app/js/logoutScript.js',
            'app/js/headerScript.js',
            'app/js/headerScriptLog.js'
        ])
        .pipe(concat('contacts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('minIndex', function() {
    return gulp.src(['app/js/idGenerator.js',
            'app/js/userRegistration.js',
            'app/js/loginScript.js',
            'app/js/userControl.js',
            'app/js/logoutScript.js',
            'app/js/uiScript.js',
            'app/js/headerScript.js',
            'app/js/headerScriptLog.js',
            'app/js/slider.js',
            'app/js/smoothScroll.js'
        ])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('minQuiz', function() {
    return gulp.src(['app/js/idGenerator.js',
            'app/js/userControl.js',
            'app/js/headerScript.js',
            'app/js/question.js',
            'app/js/getQuestions.js',
            'app/js/quizController.js ',
            'app/js/timer.js',
            'app/js/results.js',
            'app/js/quizScript.js'
        ])
        .pipe(concat('quiz.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('minReport', function() {
    return gulp.src(['app/js/userControl.js',
            'app/js/headerScript.js',
            'app/js/question.js',
            'app/js/getQuestions.js',
            'app/js/reportScript.js'
        ])
        .pipe(concat('report.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('minScores', function() {
    return gulp.src(['app/js/idGenerator.js',
            'app/js/userRegistration.js',
            'app/js/loginScript.js',
            'app/js/userControl.js',
            'app/js/logoutScript.js',
            'app/js/headerScript.js',
            'app/js/headerScriptLog.js',
            'app/js/scoresScript.js'
        ])
        .pipe(concat('scores.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
})

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
})

gulp.task('cleanDist', function() {
    return del.sync('dist');
})

gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('app/sass/**/*.scss', function() {
        setTimeout(function() { gulp.start('sass'); }, 1000)
    });
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
})

gulp.task('build', ['cleanDist', 'sass'], function() {
    var buildCss = gulp.src('app/css/main.css')
        .pipe(gulp.dest('dist/css'));

    var bulidFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJson = gulp.src('app/json/**/*')
        .pipe(gulp.dest('dist/json'));

    var buildJs = gulp.src('app/js/*.min.js')
        .pipe(gulp.dest('dist/js'));

    var loadServer = gulp.src('app/server.js')
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
})