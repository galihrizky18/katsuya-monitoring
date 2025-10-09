import { create } from 'zustand';

interface Menu {
    menu: string;
    qty: number;
    harga: number;
}

interface TopSalesState {
    menus: Menu[];
    tambahMenu: (item: Menu) => void;
    setMenus: (data: Menu[]) => void;
    hapusMenu: (menu: string) => void;
    resetMenus: () => void;
}

const useTopSales = create<TopSalesState>((set) => ({
    menus: [],

    tambahMenu: (item) =>
        set((state) => ({
            menus: [...state.menus, item],
        })),

    setMenus: (data) => set({ menus: data }),

    hapusMenu: (nama) =>
        set((state) => ({
            menus: state.menus.filter((item) => item.menu !== nama),
        })),

    resetMenus: () => set({ menus: [] }),
}));

export default useTopSales;
