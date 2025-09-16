import SidebarAndro from '@/components/dashboard/SidebarAndro';
import SideBarPC from '@/components/dashboard/SideBarPC';
import { useDisclosure } from '@mantine/hooks';
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-screen w-full flex-row bg-blue-50">
            {/* Sidebar PC */}
            {!isMobile && (
                <>
                    <SideBarPC />
                    <div className="mx-3 h-screen w-full bg-transparent px-1 py-5">{children}</div>
                </>
            )}

            {isMobile && (
                <div className="flex flex-col">
                    {/* Tombol Open/Close */}
                    <div className="px-2 py-1">
                        <div className="inline-flex items-center justify-center rounded-md bg-white p-1 shadow" onClick={opened ? close : open}>
                            <Menu className="h-6 w-6" />
                        </div>
                    </div>

                    {/* Konten Utama */}
                    <div className="mx-3 h-screen w-full bg-transparent px-1 py-1">{children}</div>

                    <SidebarAndro opened={opened} close={close} />
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;
