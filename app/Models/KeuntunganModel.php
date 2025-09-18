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

    public static function get_all_keuntungan_chart(){

        $sql = "WITH pengeluaran AS ( ";
        $sql .= "SELECT IFNULL(SUM(CASE WHEN a.flag_untung = 'Y' THEN a.nominal ELSE 0 END), 0) AS Total_Pengeluaran_Untung, ";
        $sql .= "DATE_FORMAT(a.tanggal, '%Y-%m') AS Periode ";
        $sql .= "FROM TRX_Pengeluaran a ";
        $sql .= "WHERE a.status IS NULL and a.Flag_Gaji is null ";
        $sql .= "GROUP BY DATE_FORMAT(a.tanggal, '%Y-%m') ";
        $sql .= "), adjustment AS ( ";
        $sql .= "SELECT IFNULL(SUM(a.Nominal), 0) AS Jumlah_Adjust_Untung, DATE_FORMAT(a.tanggal, '%Y-%m') AS Periode ";
        $sql .= "FROM TRX_Adjustment_Untung a ";
        $sql .= "WHERE a.status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.tanggal, '%Y-%m') ";
        $sql .= ") SELECT 'Keuntungan' AS jenis, MONTH(a.Tanggal) as Bulan, ";
        $sql .= "CONCAT( CASE MONTH(a.Tanggal) ";
        $sql .= "WHEN 1 THEN 'Januari' WHEN 2 THEN 'Februari' WHEN 3 THEN 'Maret' WHEN 4 THEN 'April' WHEN 5 THEN 'Mei' WHEN 6 THEN 'Juni' ";
        $sql .= "WHEN 7 THEN 'Juli' WHEN 8 THEN 'Agustus' WHEN 9 THEN 'September' WHEN 10 THEN 'Oktober' WHEN 11 THEN 'November' WHEN 12 THEN 'Desember' ";
        $sql .= "END, ' ', YEAR(a.Tanggal) ) AS Nama_Bulan, ";
        $sql .= "IFNULL(SUM(b.keuntungan), 0) AS Tot_Keuntungan, IFNULL(p.Total_Pengeluaran_Untung, 0) AS Tot_Pengeluaran_Untung, ";
        $sql .= "IFNULL(ad.Jumlah_Adjust_Untung, 0) AS Jumlah_Adjust_Untung, ";
        $sql .= "(IFNULL(SUM(b.keuntungan), 0) - IFNULL(p.Total_Pengeluaran_Untung, 0) + IFNULL(ad.Jumlah_Adjust_Untung, 0) ) AS Grand_Untung ";
        $sql .= "FROM trx_penjualan_harian AS a ";
        $sql .= "INNER JOIN trx_penjualan_harian_detail AS b ON a.No_Transaksi = b.No_Transaksi ";
        $sql .= "LEFT JOIN pengeluaran AS p ON DATE_FORMAT(a.Tanggal, '%Y-%m') = p.Periode ";
        $sql .= "LEFT JOIN adjustment AS ad ON DATE_FORMAT(a.Tanggal, '%Y-%m') = ad.Periode ";
        $sql .= "WHERE a.Status IS NULL ";
        $sql .= "GROUP BY DATE_FORMAT(a.Tanggal, '%Y-%m'), p.Total_Pengeluaran_Untung, ad.Jumlah_Adjust_Untung, Nama_Bulan, Bulan ";
        $sql .= "ORDER BY YEAR(a.Tanggal), MONTH(a.Tanggal); ";
        
        return DB::select($sql, []);

    }
}
