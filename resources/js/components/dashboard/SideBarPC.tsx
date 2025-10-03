import { ScrollArea } from '@mantine/core';
import { LayoutDashboard } from 'lucide-react';
import ButtonLogout from '../login/ButtonLogout';
import SidebarMenu from '../ui/SidebarMenu';

const SideBarPC = () => {
    const Logo = import.meta.env.VITE_APP_URL_LOGO;

    return (
        <div className="box-border flex h-full flex-col gap-2 overflow-x-hidden border border-black bg-white px-3 py-5 drop-shadow-lg">
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

                    {/* <GroupCollapse title="Testing" Icon={LayoutDashboard}>
                        <h1>Testing Collapse</h1>
                    </GroupCollapse> */}
                </div>
            </ScrollArea>
            <div className="flex flex-col border-t border-gray-400 py-2">
                <ButtonLogout />
            </div>
        </div>
    );
};

export default SideBarPC;
