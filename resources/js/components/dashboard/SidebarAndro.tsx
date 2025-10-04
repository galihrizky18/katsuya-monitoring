import { Drawer, ScrollArea } from '@mantine/core';
import { LayoutDashboard } from 'lucide-react';
import React from 'react';
import ButtonLogout from '../login/ButtonLogout';
import SidebarMenu from '../ui/SidebarMenu';

interface SidebarAndroProps {
    opened: boolean;
    close: () => void;
}

const SidebarAndro: React.FC<SidebarAndroProps> = ({ opened, close }) => {
    const Logo = import.meta.env.VITE_APP_URL_LOGO;

    return (
        <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            size="70%"
            position="left"
            withCloseButton={false} // optional
        >
            {/* Logo */}
            <div className="flex h-20 flex-row items-center overflow-hidden">
                <img src={Logo} alt="Logo Katsuya" className="max-h-full max-w-full object-contain" />

                <h1 className="text-md font-sawarabi-mincho font-bold text-gray-800">Katsuya Ganurashi</h1>
            </div>

            <ScrollArea style={{ height: '75vh' }}>
                <div className="flex flex-col gap-1 font-sawarabi-mincho">
                    <SidebarMenu Icon={LayoutDashboard} href="/dashboard">
                        Dashboard
                    </SidebarMenu>
                    {/* <GroupCollapse title="Testing" Icon={LayoutDashboard}>
                        <h1>Testing Collapse</h1>
                    </GroupCollapse> */}
                </div>
            </ScrollArea>

            <div className="flex flex-col border-t border-gray-400 py-1 font-sawarabi-mincho">
                <ButtonLogout />
            </div>
        </Drawer>
    );
};

export default SidebarAndro;
