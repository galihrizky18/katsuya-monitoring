import React from 'react'
import GroupCollapse from '../ui/collapse/GroupCollapse'
import { ScrollArea } from '@mantine/core';
import { LayoutDashboard } from 'lucide-react';
import SidebarMenu from '../ui/SidebarMenu';

const SideBarPC = () => {
  return (
    <div className='w-[20%] flex flex-col gap-2 border border-black px-3 py-5 box-border overflow-x-hidden'>

        {/* Logo */}
        <div className='overflow-hidden h-20  flex flex-row items-center '>
            <img
                src="http://101.128.76.179:4071/storage/images/Logo_Katsuya_Ganurashi.png"
                alt="Logo Katsuya"
                className="max-h-full max-w-full object-contain"
            />

            <h1 className='text-xl text-gray-800 font-bold font-sawarabi-mincho'>Katsuya Ganurashi</h1>
        </div>

   <ScrollArea  style={{ height: '80vh' }}  className='font-roboto flex flex-col gap-1'>
        <SidebarMenu Icon={LayoutDashboard} href='/dashboard'>Dashboard</SidebarMenu>
        <GroupCollapse title='Testing' Icon={LayoutDashboard} ><h1>Testing Collapse</h1></GroupCollapse>
   </ScrollArea>
    </div>
  )
}

export default SideBarPC
