import { create } from 'zustand';

interface PembelianDatasProps {
    Total_Pembelian: number;
    setTotalPembelian: (Total_Pembelian: number) => void;
}

const usePembelianDatas = create<PembelianDatasProps>((set) => ({
    Total_Pembelian: 0,
    setTotalPembelian: (Total_Pembelian: number) => set(() => ({ Total_Pembelian })),
}));

export default usePembelianDatas;
