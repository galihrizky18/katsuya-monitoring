<?php

namespace App\Services;

use App\Models\KeuntunganModel;
use App\Models\ModalModel;
use App\Models\PenjualanModel;
use Illuminate\Support\Facades\DB;

class ChartServices
{
    /**
     * Handle Chart
     */
    public function Get_Main_Chart(){

        $jenis = ["Penjualan", "Pembelian", "Keuntungan"];
        
        $data_penjualan = PenjualanModel::get_all_penjualan_chart();
        $data_modal = ModalModel::get_all_modal_chart();
        $data_keuntungan = KeuntunganModel::get_all_keuntungan_chart();


        



    }
   
}
