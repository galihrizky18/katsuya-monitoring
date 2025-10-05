import { create } from 'zustand';

interface keuntunganProps {
    Tot_Keuntungan: number;
    Omzet_Untung: number;
    setTot_Keuntungan: (Tot_Keuntungan: number) => void;
    Set_Omzet_Untung: (Omzet_Untung: number) => void;
}

const useKeuntungan = create<keuntunganProps>((set) => ({
    Tot_Keuntungan: 0,
    Omzet_Untung: 0,
    setTot_Keuntungan: (Tot_Keuntungan: number) => set(() => ({ Tot_Keuntungan })),
    Set_Omzet_Untung: (Omzet_Untung: number) => set(() => ({ Omzet_Untung })),
}));

export default useKeuntungan;
