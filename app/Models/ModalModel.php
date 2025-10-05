<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ModalModel extends Model
{
    public static function Get_Current_Modal(){

        $Tot_Untung = 0;
        $Tot_Modal = 0;
        $Tot_Jual = 0;

        $Tot_Belanja = 0;
        $Tot_Pengeluaran = 0;
        $tot_Adjustment_Modal = 0;

        // TOTAL MODAL, PENJUALAN, KEUNTUNGAN
        $sql = "select ifnull(sum(b.Jumlah * c.Harga_Jual), 0) as Total_Jual, ";
        $sql .= "ifnull((sum(b.Jumlah_hpp)), 0) as Total_Modal, ";
        $sql .= "ifnull(Sum(b.keuntungan), 0) as Total_Untung ";
        $sql .= "from TRX_Penjualan_Harian a ";
        $sql .= "inner join TRX_Penjualan_Harian_Detail b on a.No_Transaksi  = b.no_transaksi ";
        $sql .= "inner join master_produk c on b.kode_produk = c.kode_produk ";
        $sql .= "where a.Status is null ";
        $result = DB::select($sql, []);
        $Tot_Modal = $result[0]->Total_Modal;
        $Tot_Jual = $result[0]->Total_Jual;
        $Tot_Untung = $result[0]->Total_Untung;

        // Total Belanja
        $sql = "select ifnull(Sum(b.Harga), 0) as Tot_Belanja ";
        $sql .= "from TRX_Belanja_Harian a ";
        $sql .= "inner join TRX_Belanja_Harian_Detail b on a.No_Transaksi  = b.No_Transaksi ";
        $sql .= "where a.Status is null ";
        $result = DB::select($sql, []);
        $Tot_Belanja = $result[0]->Tot_Belanja;


        $sql = "select ";
        $sql .= "ifnull(SUM(CASE WHEN flag_modal = 'Y' THEN nominal ELSE 0 END), 0) AS Total_Pengeluaran_Modal, ";
        $sql .= "ifnull(SUM(CASE WHEN flag_untung = 'Y' THEN nominal ELSE 0 END), 0) AS Total_Pengeluaran_Untung ";
        $sql .= "FROM TRX_Pengeluaran ";
        $sql .= "where status is null ";
        $result = DB::select($sql, []);
        $Tot_Pengeluaran = $result[0]->Total_Pengeluaran_Modal;

        $sql = "select ifnull(sum(Nominal), 0) as Nominal from TRX_Adjustment_Modal ";
        $sql .= "where status is null ";
        $result = DB::select($sql, []);
        $tot_Adjustment_Modal = $result[0]->Nominal;

        return ($Tot_Modal - $Tot_Belanja - $Tot_Pengeluaran) + $tot_Adjustment_Modal;
    
    }

    public static function get_omzet_modal(){
        $sql = "select ifnull(sum(b.Jumlah_hpp), 0) as Total_Omzet_Modal ";
        $sql .= "from TRX_Penjualan_Harian a ";
        $sql .= "inner join TRX_Penjualan_Harian_detail b on a.No_Transaksi  = b.No_Transaksi ";
        $sql .= "where a.Status is null ";
        
        return DB::select($sql, []);


    }

    public static function get_all_modal_chart(){

        $sql = "WITH belanja AS ( ";
        $sql .= "SELECT IFNULL(SUM(b.Harga), 0) AS Tot_Belanja, DATE_FORMAT(a.Tanggal, '%Y-%m') AS Periode ";
        $sql .= "FROM TRX_Belanja_Harian a ";
        $sql .= "INNER JOIN TRX_Belanja_Harian_Detail b ON a.No_Transaksi = b.No_Transaksi ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.Tanggal, '%Y-%m') ";
        $sql .= "), pengeluaran AS ( ";
        $sql .= "SELECT IFNULL(SUM(CASE WHEN a.flag_modal = 'Y' THEN a.nominal ELSE 0 END), 0) AS Total_Pengeluaran_Modal, ";
        $sql .= "DATE_FORMAT(a.Tanggal, '%Y-%m') AS Periode ";
        $sql .= "FROM TRX_Pengeluaran a ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.Tanggal, '%Y-%m') ";
        $sql .= "), adjustment AS ( ";
        $sql .= "SELECT IFNULL(SUM(a.Nominal), 0) AS Jumlah_Adjust_Modal, DATE_FORMAT(a.Tanggal, '%Y-%m') AS Periode ";
        $sql .= "FROM TRX_Adjustment_Modal a ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.Tanggal, '%Y-%m') ";
        $sql .= ") SELECT 'Modal' AS jenis, DATE_FORMAT(a.Tanggal, '%Y-%m') AS Periode, MONTH(a.Tanggal) as Bulan, ";
        $sql .= "CASE MONTH(a.Tanggal) ";
        $sql .= "WHEN 1 THEN 'Januari' WHEN 2 THEN 'Februari' WHEN 3 THEN 'Maret' WHEN 4 THEN 'April' WHEN 5 THEN 'Mei' WHEN 6 THEN 'Juni' ";
        $sql .= "WHEN 7 THEN 'Juli' WHEN 8 THEN 'Agustus' WHEN 9 THEN 'September' WHEN 10 THEN 'Oktober' WHEN 11 THEN 'November' WHEN 12 THEN 'Desember' ";
        $sql .= "END AS Nama_Bulan, ";
        $sql .= "IFNULL(SUM(b.Jumlah_hpp), 0) AS Tot_Modal, ";
        $sql .= "IFNULL(d.Tot_Belanja, 0) AS Tot_Belanja, ";
        $sql .= "IFNULL(e.Total_Pengeluaran_Modal, 0) AS Tot_Pengeluaran_Modal, ";
        $sql .= "IFNULL(f.Jumlah_Adjust_Modal, 0) AS Jumlah_Adjust_Modal, ";
        $sql .= "(IFNULL(SUM(b.Jumlah_hpp), 0) - IFNULL(d.Tot_Belanja, 0) - IFNULL(e.Total_Pengeluaran_Modal, 0) + IFNULL(f.Jumlah_Adjust_Modal, 0) ) AS Grand_Modal ";
        $sql .= "FROM TRX_Penjualan_Harian a ";
        $sql .= "INNER JOIN TRX_Penjualan_Harian_Detail b ON a.No_Transaksi = b.No_Transaksi ";
        $sql .= "INNER JOIN master_produk c ON b.kode_produk = c.kode_produk ";
        $sql .= "LEFT JOIN belanja d ON DATE_FORMAT(a.Tanggal, '%Y-%m') = d.Periode ";
        $sql .= "LEFT JOIN pengeluaran e ON DATE_FORMAT(a.Tanggal, '%Y-%m') = e.Periode ";
        $sql .= "LEFT JOIN adjustment f ON DATE_FORMAT(a.Tanggal, '%Y-%m') = f.Periode ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.Tanggal, '%Y-%m'), MONTH(a.Tanggal), YEAR(a.Tanggal), d.Tot_Belanja, e.Total_Pengeluaran_Modal, f.Jumlah_Adjust_Modal, Nama_Bulan, Bulan ";
        $sql .= "ORDER BY YEAR(a.Tanggal), MONTH(a.Tanggal);";

        return DB::select($sql, []);


        
    }




}
