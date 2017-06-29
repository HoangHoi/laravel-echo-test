
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': token.content
        }
    });
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


import Echo from 'laravel-echo'
window.io = require('socket.io-client');

window.Echo = new Echo({
    namespace: 'App.Events',
    broadcaster: 'socket.io',
    host: `${window.location.hostname}:9090`
});
