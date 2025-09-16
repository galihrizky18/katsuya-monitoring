import { create } from 'zustand';

interface keuntunganProps {
    Tot_Keuntungan: number;
    setTot_Keuntungan: (Tot_Keuntungan: number) => void;
}

const useKeuntungan = create<keuntunganProps>((set) => ({
    Tot_Keuntungan: 0,
    setTot_Keuntungan: (Tot_Keuntungan: number) => set(() => ({ Tot_Keuntungan })),
}));

export default useKeuntungan;
