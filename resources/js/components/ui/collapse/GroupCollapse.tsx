import { Box, Collapse, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

import downArrow from '../../../../../public/assets/down-arrow.png';

interface GroupCollapseProps {
    children?: React.ReactNode;
    title: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const GroupCollapse:React.FC<GroupCollapseProps> = ({children, title, Icon}) => {

  const [opened, { toggle }] = useDisclosure(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      setIsMobile(window.innerWidth < 768);
  
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

  return (
    <Box maw={400} mx="auto" className='w-full'>
      <Group justify="center" mb={5} >
        <div onClick={toggle} className='cursor-pointer hover:bg-hover w-full flex flex-row justify-between items-center p-2 hover:rounded-md overflow-hidden'>
            {/* Icon */}
            <div className='flex flex-row gap-3'>
                  {Icon && <Icon className="w-6 h-6 text-gray-700" />}
                <h1 className={`font-semibold  ${isMobile ? `text-[.8rem]` : `text-[.95rem]`} `}>{title}</h1>
            </div>
            <img src={downArrow} alt="arrow" className={`h-5 ${opened ? 'rotate-360' : 'rotate-270'} transition-transform duration-500` }/>
        </div>
      </Group>

      <Collapse in={opened} className='pl-7'>
        {children}
      </Collapse>
    </Box>
  )
}

export default GroupCollapse
