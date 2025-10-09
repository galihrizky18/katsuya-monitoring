import { create } from 'zustand';

interface menus {
    menu: string;
    qty: number;
    harga: number;
}

interface TopSalesState {
    menus: menus;
    tambahMenu: (menus: menus) => void;
    setMenus: (menus: menus[]) => void;
    hapusMenu: (menu: string) => void;
    resetMenusL: () => void;
}

const useTopSales = create(() => ({
    menu: [],
}));

export default useTopSales;
