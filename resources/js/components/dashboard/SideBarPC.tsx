import { ScrollArea } from '@mantine/core';
import { LayoutDashboard } from 'lucide-react';
import GroupCollapse from '../ui/collapse/GroupCollapse';
import SidebarMenu from '../ui/SidebarMenu';

const SideBarPC = () => {
    return (
        <div className="box-border flex w-[20%] flex-col gap-2 overflow-x-hidden bg-white px-3 py-5 drop-shadow-lg">
            {/* Logo */}
            <div className="flex h-20 flex-row items-center overflow-hidden">
                <img
                    src="http://101.128.76.179:4071/storage/images/Logo_Katsuya_Ganurashi.png"
                    alt="Logo Katsuya"
                    className="max-h-full max-w-full object-contain"
                />

                <h1 className="font-sawarabi-mincho text-xl font-bold text-gray-800">Katsuya Ganurashi</h1>
            </div>

            <ScrollArea style={{ height: '80vh' }}>
                <div className="flex flex-col gap-1 font-sawarabi-mincho">
                    <SidebarMenu Icon={LayoutDashboard} href="/dashboard">
                        Dashboard
                    </SidebarMenu>

                    <GroupCollapse title="Testing" Icon={LayoutDashboard}>
                        <h1>Testing Collapse</h1>
                    </GroupCollapse>
                </div>
            </ScrollArea>
        </div>
    );
};

export default SideBarPC;
