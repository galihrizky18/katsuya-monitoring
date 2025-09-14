import SideBarPC from '@/components/dashboard/SideBarPC';
import React, { useEffect, useState } from 'react'

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='w-full h-screen flex flex-row  border border-black'>
        {/* Sidebar PC */}
        {!isMobile && (
            <SideBarPC />
        )}

        {isMobile && (
            <div className='w-64 border border-black'>Sidebar Mobile</div>
        )}

        <div className='w-full h-screen'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout
