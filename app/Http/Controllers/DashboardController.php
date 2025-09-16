<?php

namespace App\Http\Controllers;

use App\Models\KeuntunganModel;
use App\Models\ModalController;
use App\Models\PembelianModel;
use App\Models\PenjualanModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show(){

        $user = Auth::user();

        $allSeller = PenjualanModel::get_all_seller();
        $allPembelian = PembelianModel::get_all_pembelian();
        $currentModal = ModalController::Get_Current_Modal();
        $currentUntung = KeuntunganModel::Get_Current_Untung();


        return Inertia::render("dashboard/dashboard", [
            'user' => [
                'nama' =>$user->UserID,
                'level' => $user->UserLevel
            ],
            'data'=> [
                'penjualan' =>[
                    'Total_Qty'=> $allSeller[0]->Total_Qty,
                    'satuan'=> $allSeller[0]->satuan,
                    'Total_Belanja'=> $allSeller[0]->Total_Belanja,
                ],
                'pembelian'=>[
                    'Total_Pembelian' => $allPembelian[0]->Total_Harga
                ],
                'modal'=>[
                    'Total_Modal'=>$currentModal
                ],
                'untung'=>[
                    'Tot_Untung' => $currentUntung
                ]
            ]
        ]);
    }
}
