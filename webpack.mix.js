let mix = require('laravel-mix');

const css_out_dir = './assets/css';
const js_out_dir = './assets/js';

const css_tasks = [
    {name: 'css-style', file: './themes/src/assets/scss/style.scss', dest: '.'},
    //{name: 'css-slider', file: './themes/src/assets/scss/slider.scss', dest: css_out_dir},
    {name: 'css-editor', file: './themes/src/assets/scss/style-editor.scss', dest: css_out_dir}
];

const js_tasks = [
    {name: 'js-script', file: './themes/src/assets/js/scripts.js', dest: js_out_dir, uglify: true},
    {name: 'js-nav', file: './themes/src/assets/js/nav.js', dest: js_out_dir, uglify: true},
    {name: 'js-slideshow', file: './themes/src/assets/js/slideshow-details.js', dest: js_out_dir, uglify: true},
    {name: 'js-splide-slideshow', file: './themes/src/assets/js/splide-slider.js', dest: js_out_dir, uglify: true},
    {name: 'js-variables', file: './themes/src/assets/js/variables.js', dest: js_out_dir, uglify: true},
    {name: 'js-animations', file: './themes/src/assets/js/animate-elements.js', dest: js_out_dir, uglify: true}
];



for (const task of css_tasks) {
    mix.sass(task.file, task.dest).sourceMaps();
}

for (const task of js_tasks) {
    mix.js(task.file, task.dest).sourceMaps();
}

mix.setPublicPath('themes/dist').options({processCssUrls: false});