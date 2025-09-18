<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProductModel extends Model
{
    public static function Get_Total_Penjualan_by_Produk(){

        $sql = "SELECT b.kode_produk, ";
        $sql .= "ifnull(( select z.produk from master_produk z where b.kode_produk  = z.kode_produk ), '-') as Nama_Produk, ";
        $sql .= "SUM(a.Qty) AS Total_Qty ";
        $sql .= "FROM trx_penjualan_harian a ";
        $sql .= "INNER JOIN trx_penjualan_harian_detail b ";
        $sql .= "ON a.No_Transaksi = b.No_Transaksi ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "AND b.kode_produk IN ( ";
        $sql .= "select z.kode_produk from master_produk z where b.kode_produk  = z.kode_produk) ";
        $sql .= "GROUP BY b.kode_produk; ";

        return DB::select($sql, []);
        

    }
}
