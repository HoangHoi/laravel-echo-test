<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/chat', function (Illuminate\Http\Request $request) {
    event(new App\Events\ChatEvent($request->user(), $request->get('message')));

    return [
        'status' => true,
    ];
})->name('chat');
