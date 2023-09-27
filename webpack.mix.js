// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('./src/scripts/index.js', 'index.js')
.js('./src/scripts/about.js', 'about.js')
.js('./src/scripts/contact.js', 'contact.js')
.sass('./src/styles/main.scss', 'index.css')
.setPublicPath('./dist');
