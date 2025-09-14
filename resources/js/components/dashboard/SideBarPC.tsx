import React from 'react'
import GroupCollapse from '../ui/collapse/GroupCollapse'

const SideBarPC = () => {
  return (
    <div className='w-[20%] flex flex-col gap-2 border border-black px-3 py-5'>

        {/* Logo */}
        <div className='overflow-hidden h-20  flex flex-row items-center '>
            <img
                src="http://101.128.76.179:4071/storage/images/Logo_Katsuya_Ganurashi.png"
                alt="Logo Katsuya"
                className="max-h-full max-w-full object-contain"
            />

            <h1 className='text-lg text-gray-800 font-bold font-sawarabi-mincho'>Katsuya Ganurashi</h1>
        </div>

        <div className='border border-black'>
            <GroupCollapse title='Testing'><h1>Testing Collapse</h1></GroupCollapse>
        </div>
    </div>
  )
}

export default SideBarPC
