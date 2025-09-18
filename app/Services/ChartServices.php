<?php

namespace App\Services;

use App\Models\KeuntunganModel;
use App\Models\ModalModel;
use App\Models\PenjualanModel;
use App\Models\ProductModel;
use Illuminate\Support\Facades\DB;

class ChartServices
{
    /**
     * Handle Chart
     */
    public function Get_Main_Chart(){

        $data_penjualan = PenjualanModel::get_all_penjualan_chart();
        $data_modal = ModalModel::get_all_modal_chart();
        $data_keuntungan = KeuntunganModel::get_all_keuntungan_chart();

        $penjualan  = $this->generateChartData($data_penjualan, 'Total_Harga_Jual');
        $modal      = $this->generateChartData($data_modal, 'Grand_Modal');
        $keuntungan = $this->generateChartData($data_keuntungan, 'Grand_Untung');

        $tahun = $data_penjualan[0]->Tahun;

        $result=[
            "penjualan"=>$penjualan,
            "modal"=>$modal,
            "keuntungan"=>$keuntungan,
            "tahun"=>$tahun
        ];

        return $result;

        
    }


    public function Get_Data_Penjualan_Produk(){

        $dataPenjualan = ProductModel::Get_Total_Penjualan_by_Produk();

        $result = [];

        foreach ($dataPenjualan as $data){
            array_push($result,[
                "Kode_Produk"=> $data->kode_produk,
                "Nama_Produk"=> $data->Nama_Produk,
                "Jumlah"=> $data->Total_Qty,
            ]);
        }
        return $result;

    }







    private function generateChartData($data, $fieldTotal) {
        $indexed = [];
        foreach ($data as $row) {
            $indexed[$row->Bulan] = $row->$fieldTotal;
        }

        $result = [];
        for ($i = 1; $i <= 12; $i++) {
            $result[$i] = $indexed[$i] ?? 0; 
        }

        return $result;
    }
   
}
