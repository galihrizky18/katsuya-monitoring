<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class KeuntunganModel extends Model
{
    public static function Get_Current_Untung(){

        $Tot_Untung = 0;
        $Tot_Pengeluaran_Untung = 0;
        $Tot_Adjustment_Untung = 0;

        // TOTAL MODAL, PENJUALAN, KEUNTUNGAN
        $sql = "select ifnull(sum(b.Jumlah * c.Harga_Jual), 0) as Total_Jual, ";
        $sql .= "ifnull((sum(b.Jumlah_hpp)), 0) as Total_Modal, ";
        $sql .= "ifnull(Sum(b.keuntungan), 0) as Total_Untung ";
        $sql .= "from TRX_Penjualan_Harian a ";
        $sql .= "inner join TRX_Penjualan_Harian_Detail b on a.No_Transaksi  = b.no_transaksi ";
        $sql .= "inner join master_produk c on b.kode_produk = c.kode_produk ";
        $sql .= "where a.Status is null ";
        $result = DB::select($sql, []);
        $Tot_Untung = $result[0]->Total_Untung;

        $sql= "select ";
        $sql .= "ifnull(SUM(CASE WHEN flag_modal = 'Y' THEN nominal ELSE 0 END), 0) AS Total_Pengeluaran_Modal, ";
        $sql .= "ifnull(SUM(CASE WHEN flag_untung = 'Y' THEN nominal ELSE 0 END), 0) AS Total_Pengeluaran_Untung ";
        $sql .= "FROM TRX_Pengeluaran ";
        $sql .= "where status is null ";
        $result = DB::select($sql, []);
        $Tot_Pengeluaran_Untung = $result[0]->Total_Pengeluaran_Untung;

        $sql = "select ifnull(sum(Nominal), 0) as Nominal from TRX_Adjustment_Untung ";
        $sql .= "where status is null ";
        $result = DB::select($sql, []);
        $Tot_Adjustment_Untung = $result[0]->Nominal;

        return ($Tot_Untung - $Tot_Pengeluaran_Untung) + $Tot_Adjustment_Untung;
    }
}
