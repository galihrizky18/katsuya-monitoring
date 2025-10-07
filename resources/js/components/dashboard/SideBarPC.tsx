import { ScrollArea } from '@mantine/core';
import { DollarSign, LayoutDashboard, NotebookTabs, ShoppingBasket, ShoppingCart, TrendingDown, TrendingUp } from 'lucide-react';
import ButtonLogout from '../login/ButtonLogout';
import SidebarMenu from '../ui/SidebarMenu';
import GroupCollapse from '../ui/collapse/GroupCollapse';

const SideBarPC = () => {
    const Logo = import.meta.env.VITE_APP_URL_LOGO;

    return (
        <div className="box-border flex h-full flex-col gap-2 overflow-x-hidden bg-white px-3 py-5 drop-shadow-lg">
            {/* Logo */}
            <div className="flex h-20 flex-row items-center overflow-hidden">
                <img src={Logo} alt="Logo Katsuya" className="max-h-full max-w-full object-contain" />

                <h1 className="font-sawarabi-mincho text-xl font-bold text-gray-800">Katsuya Ganurashi</h1>
            </div>

            <ScrollArea style={{ height: '80vh' }}>
                <div className="flex flex-col gap-1 font-sawarabi-mincho">
                    <SidebarMenu Icon={LayoutDashboard} href="/dashboard">
                        Dashboard
                    </SidebarMenu>

                    <GroupCollapse title="Details" Icon={NotebookTabs}>
                        <SidebarMenu Icon={ShoppingCart} href="/penjualan">
                            Penjualan
                        </SidebarMenu>
                        <SidebarMenu Icon={ShoppingBasket} href="/dashboard">
                            Pembelian
                        </SidebarMenu>
                        <SidebarMenu Icon={DollarSign} href="/dashboard">
                            Modal
                        </SidebarMenu>
                        <SidebarMenu Icon={TrendingUp} href="/dashboard">
                            Keuntungan
                        </SidebarMenu>
                        <SidebarMenu Icon={TrendingDown} href="/dashboard">
                            Pengeluaran
                        </SidebarMenu>
                    </GroupCollapse>
                </div>
            </ScrollArea>
            <div className="flex flex-col border-t border-gray-400 py-2">
                <ButtonLogout />
            </div>
        </div>
    );
};

export default SideBarPC;
