<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('todos', 'API\TodoController@getIndex');
Route::post('todos', 'API\TodoController@postIndex');
Route::put('todos/{id}', 'API\TodoController@putIndex');
Route::delete('todos/{id}', 'API\TodoController@deleteIndex');
