<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PenjualanController extends Controller
{
    public function show(){


        return Inertia::render("dashboard/penjualan/PenjualanPage",[]);

    }
}
