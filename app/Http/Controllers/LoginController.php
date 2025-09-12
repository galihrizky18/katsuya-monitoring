<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function Show(){
        return Inertia::render("login/LoginPage");
    }

    public function AuthUser(Request $request){

    }
}
