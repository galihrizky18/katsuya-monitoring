import { create } from 'zustand';

interface PengeluaranState {
    pengeluaranModal: number;
    pengeluaranUntung: number;
    setPengeluaranModal: (modal: number) => void;
    setPengeluaranUntung: (untung: number) => void;
}

const userPengeluaran = create<PengeluaranState>((set) => ({
    pengeluaranModal: 0,
    pengeluaranUntung: 0,
    setPengeluaranModal: (pengeluaranModal) => set({ pengeluaranModal }),
    setPengeluaranUntung: (pengeluaranUntung) => set({ pengeluaranUntung }),
}));

export default userPengeluaran;
