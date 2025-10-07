<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PengeluaranModel extends Model
{

     public static function get_all_pengeluaran_modal(){

        $sql = "select ifnull((sum(Nominal)), 0) as Nominal from trx_pengeluaran ";
        $sql .= "where Status is null ";
        $sql .= "and flag_modal = 'Y' ";
        
        return DB::select($sql, []);

    }

      public static function get_all_pengeluaran_untung(){

        $sql = "select ifnull((sum(Nominal)), 0) as Nominal from trx_pengeluaran ";
        $sql .= "where Status is null ";
        $sql .= "and flag_untung = 'Y' ";
        
        return DB::select($sql, []);

    }

}
