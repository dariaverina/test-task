<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinkController;

Route::get('/', function () {
    return response()->json([
        'message' => 'Short Link API Service',
        'version' => '1.0',
        'status' => 'online',
        'endpoints' => [
            'api' => '/api'
        ]
    ]);
});
Route::get('/{code}', [LinkController::class, 'redirect']);
