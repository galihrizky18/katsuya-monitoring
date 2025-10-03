<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function Show(){
        return Inertia::render("login/LoginPage");
    }

    public function AuthUser(Request $request){

       $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required'],
        ]);

        // Cari user berdasarkan username
        $user = User::where('username', $request->username)->first();


        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Username tidak ditemukan.'
            ], 401);
        }

        // Periksa password menggunakan Hash::check
        if (!Hash::check($request->password, $user->Password)) {
            return response()->json([
                'status' => false,
                'message' => 'Password salah.'
            ], 401);
        }

        // Login manual menggunakan Auth::login
        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'status' => true,
            'message' => 'Login berhasil!',
            'user' => $user,
        ], 200);

    }

    public function Logout(Request $request){

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout successful'], 200);
    }
}
