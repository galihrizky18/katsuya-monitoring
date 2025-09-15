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

}
