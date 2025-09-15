import SideBarPC from '@/components/dashboard/SideBarPC';
import React, { useEffect, useState } from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-screen w-full flex-row bg-blue-50">
            {/* Sidebar PC */}
            {!isMobile && <SideBarPC />}

            {isMobile && <div className="w-64 border border-black">Sidebar Mobile</div>}

            <div className="mx-3 h-screen w-full bg-transparent px-1 py-5">{children}</div>
        </div>
    );
};

export default DashboardLayout;
