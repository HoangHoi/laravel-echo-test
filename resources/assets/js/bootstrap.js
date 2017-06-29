
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
window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '11f716410294b4f3867d',
    namespace: 'App.Events',
    cluster: 'ap1',
    encrypted: true
});
