<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PembelianModel extends Model
{
    public static function get_all_pembelian(){

        $sql = "select ifnull(sum(harga), 0) as Total_Harga ";
        $sql .= "from trx_belanja_harian a, trx_belanja_harian_detail b ";
        $sql .= "where a.no_transaksi = b.No_Transaksi and a.Status is null ";

        return DB::select($sql, []);
    }
}
