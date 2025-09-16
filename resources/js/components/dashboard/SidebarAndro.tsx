import { Drawer, ScrollArea } from '@mantine/core';
import { LayoutDashboard } from 'lucide-react';
import React from 'react';
import SidebarMenu from '../ui/SidebarMenu';
import GroupCollapse from '../ui/collapse/GroupCollapse';

interface SidebarAndroProps {
    opened: boolean;
    close: () => void;
}

const SidebarAndro: React.FC<SidebarAndroProps> = ({ opened, close }) => {
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
                <img
                    src="http://101.128.76.179:4071/storage/images/Logo_Katsuya_Ganurashi.png"
                    alt="Logo Katsuya"
                    className="max-h-full max-w-full object-contain"
                />

                <h1 className="font-sawarabi-mincho text-xl font-bold text-gray-800">Katsuya Ganurashi</h1>
            </div>

            <ScrollArea style={{ height: '80vh' }} className="flex flex-col gap-1 font-sawarabi-mincho">
                <SidebarMenu Icon={LayoutDashboard} href="/dashboard">
                    Dashboard
                </SidebarMenu>
                <GroupCollapse title="Testing" Icon={LayoutDashboard}>
                    <h1>Testing Collapse</h1>
                </GroupCollapse>
            </ScrollArea>
        </Drawer>
    );
};

export default SidebarAndro;
