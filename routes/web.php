<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PenjualanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });


Route::get("/", [LoginController::class, "show"])->name("login");

Route::post("/login", [LoginController::class, "AuthUser"])->name("AuthUser");

Route::middleware(['auth'])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "show"])->name('dashboard');
    Route::get("/penjualan", [PenjualanController::class, "show"])->name("penjualan_page");

    Route::post("/logout", [LoginController::class,"logout"])->name("logout");
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
