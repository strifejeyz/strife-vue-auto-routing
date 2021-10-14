require('laravel-mix-vue-auto-routing');
require("laravel-mix")
    .js('resources/js/Engine.js','assets/dist/js')
    .sass('resources/css/App.scss','assets/dist/css')
    .vueAutoRouting({
        pages:'resources/js/views',
        importPrefix:'@/views/',
    })