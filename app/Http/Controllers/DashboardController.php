<?php

namespace App\Http\Controllers;

use App\Models\KeuntunganModel;
use App\Models\ModalModel;
use App\Models\PembelianModel;
use App\Models\PengeluaranModel;
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
        $omzet_modal = ModalModel::get_omzet_modal();
        $currentUntung = KeuntunganModel::Get_Current_Untung();
        $omzet_Untung = KeuntunganModel::get_omzel_untung();

        $pengeluaran_modal = PengeluaranModel::get_all_pengeluaran_modal();
        $pengeluaran_untung = PengeluaranModel::get_all_pengeluaran_untung();

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
                    'Total_Modal'=>$currentModal,
                    'Omzet_Modal' => $omzet_modal[0]->Total_Omzet_Modal
                ],
                'untung'=>[
                    'Tot_Untung' => $currentUntung,
                    'Omzet_Untung' => $omzet_Untung[0]->Total_Omzet_Keuntungan
                ],
                'pengeluaran'=>[
                    'modal'=>$pengeluaran_modal[0]->Nominal,
                    'untung'=>$pengeluaran_untung[0]->Nominal
                ],
                "charts"=> $data_chart,
                "penjualan_by_product"=>[
                    "data"=>$data_penjualan_by_product
                ]
            ]
        ]);
    }
}
