//подключение модуля галпа
var gulp = require('gulp'),
       sass = require('gulp-sass'), //Подключаем Sass пакет
       // rename      = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
       // imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
       // pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
       // cache       = require('gulp-cache'), // Подключаем библиотеку кеширования
       // pug = require('gulp-pug'),
       // tinypng = require('gulp-tinypng-compress'), //Сжатие картинок на сайте tinypng, 500 в месяц
       // ttf2woff = require('gulp-ttf2woff'), //Конвертация шрифров в woff
       // ttf2woff2 = require('gulp-ttf2woff2'), //Конвертация шрифров в woff2
       // svgmin = require('gulp-svgmin'), // Подключаем библиотеку для очистки svg от мусора
       // svgstore = require('gulp-svgstore'), //Сборка SVG-спрайтов
       // spritesmith = require('gulp.spritesmith'), //Сборка растровых спрайтов
       // postcss = require('gulp-postcss'), //Подключение postcss
       // mqpacker = require('css-mqpacker'), //Оптимизация медиа-запросов
       // concat = require('gulp-concat'), //объединение файлов
       autoprefixer = require('gulp-autoprefixer'), //авто префиксы
       // cssnano = require('gulp-cssnano'), //Сжатие CSS-файлов
       // uglify = require('gulp-uglify'), //минимизация js
       // del = require('del'), //очищение папок от файлов
       browserSync = require('browser-sync').create(); //обновление браузера

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/sass/style.sсss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync.init ({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sсss', gulp.parallel('sass')); // Наблюдение за sass файлами
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));

// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     //Следить за CSS файлами
//     gulp.watch('./src/css/**/*.css', styles);
//     //Следить за JS файлами
//     gulp.watch('./src/js/**/*.js', scripts);
//     //При изменении HTML запустить синхронизацию
//     gulp.watch("./*.html").on('change', browserSync.reload);
// }



