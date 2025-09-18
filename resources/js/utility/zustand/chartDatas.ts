import { create } from 'zustand';

interface useChartDatasProps {
    penjualan: number;
    modal: number;
    keuntungan: number;
    tahun: number;
    setPenjualan: (penjualan: number) => void;
    setModal: (modal: number) => void;
    setKeuntungan: (keuntungan: number) => void;
    setTahun: (tahun: number) => void;
}

interface useChartPenjualanByProdukProps {
    produk: any[];
    setProduk: (data: any[]) => void;
}

export const useChartDatas = create<useChartDatasProps>((set) => ({
    penjualan: 0,
    modal: 0,
    keuntungan: 0,
    tahun: 0,
    setPenjualan: (penjualan: number) => set(() => ({ penjualan })),
    setModal: (modal: number) => set(() => ({ modal })),
    setKeuntungan: (keuntungan: number) => set(() => ({ keuntungan })),
    setTahun: (tahun: number) => set(() => ({ tahun })),
}));

export const useChartPenjualanByProduk = create<useChartPenjualanByProdukProps>((set) => ({
    produk: [],
    setProduk: (data) => set(() => ({ produk: data })),
}));
