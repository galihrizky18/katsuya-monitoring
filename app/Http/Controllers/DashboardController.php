<?php

namespace App\Http\Controllers;

use App\Models\KeuntunganModel;
use App\Models\ModalModel;
use App\Models\PembelianModel;
use App\Models\PenjualanModel;
use App\Services\ChartServices;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    protected $chartService;

    public function __construct(ChartServices $chartService)
    {
        $this->chartService = $chartService;
    }

    public function show(){

        $user = Auth::user();

        $allSeller = PenjualanModel::get_all_seller();
        $allPembelian = PembelianModel::get_all_pembelian();
        $currentModal = ModalModel::Get_Current_Modal();
        $currentUntung = KeuntunganModel::Get_Current_Untung();

        $data_chart = $this->chartService->Get_Main_Chart();
        
        $data_penjualan_by_product = $this->chartService->Get_Data_Penjualan_Produk();

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
                ],
                "charts"=> $data_chart,
                "penjualan_by_product"=>[
                    "data"=>$data_penjualan_by_product
                ]
            ]
        ]);
    }
}
