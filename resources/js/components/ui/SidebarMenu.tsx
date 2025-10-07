import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

interface SidebarMenuProps {
  children?: React.ReactNode;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children, Icon, href }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link
      href={href}
      className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-hover transition-colors duration-200 focus:outline-none"
    >
      {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      
      
      <span
        className={`font-semibold ${isMobile ? 'text-[.8rem]' : 'text-[.95rem]'}`}
      >
        {children}
      </span>
    </Link>
  );
};

export default SidebarMenu;
