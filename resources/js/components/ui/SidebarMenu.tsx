import { Link } from '@inertiajs/react';
import React from 'react';

interface SidebarMenuProps {
  children?: React.ReactNode;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children, Icon, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-hover transition-colors duration-200"
    >
      {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      <span className="font-semibold text-[.95rem]">{children}</span>
    </Link>
  );
};

export default SidebarMenu;
