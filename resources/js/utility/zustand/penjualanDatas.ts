import { create } from 'zustand';

interface PenjualanState {
    qty: number;
    unit: string;
    price: number;
    setQty: (qty: number) => void;
    setUnit: (unit: string) => void;
    setPrice: (price: number) => void;
    reset: () => void;
}

const usePenjualanStore = create<PenjualanState>((set) => ({
    qty: 0,
    unit: '',
    price: 0,

    setQty: (qty) => set({ qty }),
    setUnit: (unit) => set({ unit }),
    setPrice: (price) => set({ price }),

    reset: () => set({ qty: 0, unit: '', price: 0 }),
}));

export default usePenjualanStore;
