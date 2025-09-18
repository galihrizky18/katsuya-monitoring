import SidebarAndro from '@/components/dashboard/SidebarAndro';
import SideBarPC from '@/components/dashboard/SideBarPC';
import Footer from '@/components/Footer';
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
        <div className="flex w-full flex-row bg-blue-50">
            {/* Sidebar PC */}
            {!isMobile && (
                <>
                    {/* Sidebar sticky */}
                    <div className="sticky top-0 h-screen">
                        <SideBarPC />
                    </div>

                    {/* Konten utama */}
                    <div className="mx-3 flex w-full flex-col gap-3 overflow-y-auto bg-transparent py-5 pr-3 pl-1">{children}</div>

                    {/* Footer */}
                    <div>
                        <Footer />
                    </div>
                </>
            )}

            {isMobile && (
                <div className="flex w-full flex-col">
                    {/* Tombol Open/Close Sidebar */}
                    <div className="px-2 py-1">
                        <div
                            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white p-1 shadow"
                            onClick={opened ? close : open}
                        >
                            <Menu className="h-6 w-6" />
                        </div>
                    </div>

                    {/* Konten utama di mobile */}
                    <div className="mx-3 flex w-full flex-col overflow-y-auto bg-transparent py-1 pr-3 pl-1">{children}</div>

                    {/* Footer */}
                    <div>
                        <Footer />
                    </div>

                    {/* Sidebar Mobile Drawer */}
                    <SidebarAndro opened={opened} close={close} />
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;
