import React from 'react'


interface SidebarMenuProps {
    'children'?: React.ReactNode;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const SidebarMenu:React.FC<SidebarMenuProps> = ({children, Icon}) => {
  return (
    <div className='cursor-pointer hover:bg-hover w-full flex flex-row justify-between items-center p-2 hover:rounded-md overflow-hidden'>
         <div className='flex flex-row gap-3'>
                  {Icon && <Icon className="w-6 h-6 text-gray-700" />}
                <h1 className='font-semibold text-[1rem]'>{children}</h1>
            </div>
    </div>
  )
}

export default SidebarMenu
