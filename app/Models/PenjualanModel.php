<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PenjualanModel extends Model
{
    
    public static function get_all_seller(){
        
        $sql = "select ifnull(sum(qty), 0) as Total_Qty, 'Pcs' as satuan, ifnull(sum(Total_Belanja), 0) as Total_Belanja ";
        $sql .= "from trx_penjualan_harian ";
        $sql .= "where Status is null";

        return DB::select($sql, []);
    }

    public static function get_all_penjualan_chart(){
        
        // Data Penjualan
        $sql = "SELECT 'Penjualan' AS jenis, ";
        $sql .= "CONCAT(CASE MONTH(a.Tanggal) ";
        $sql .= "WHEN 1 THEN 'Januari' ";
        $sql .= "WHEN 2 THEN 'Februari' ";
        $sql .= "WHEN 3 THEN 'Maret' ";
        $sql .= "WHEN 4 THEN 'April' ";
        $sql .= "WHEN 5 THEN 'Mei' ";
        $sql .= "WHEN 6 THEN 'Juni' ";
        $sql .= "WHEN 7 THEN 'Juli' ";
        $sql .= "WHEN 8 THEN 'Agustus' ";
        $sql .= "WHEN 9 THEN 'September' ";
        $sql .= "WHEN 10 THEN 'Oktober' ";
        $sql .= "WHEN 11 THEN 'November' ";
        $sql .= "WHEN 12 THEN 'Desember' ";
        $sql .= "END, ' ' ) AS Nama_Bulan, ";
        $sql .= "SUM(b.harga_jual) AS Total_Harga_Jual ";
        $sql .= "FROM ";
        $sql .= "trx_penjualan_harian AS a ";
        $sql .= "INNER JOIN trx_penjualan_harian_detail AS b ON a.No_Transaksi = b.No_Transaksi ";
        $sql .= "WHERE ";
        $sql .= "a.Status IS NULL ";
        $sql .= "GROUP BY YEAR(a.Tanggal), MONTH(a.Tanggal), Nama_Bulan ";
        $sql .= "ORDER BY YEAR(a.Tanggal), MONTH(a.Tanggal); ";
        return DB::select($sql, []);


    }

}
