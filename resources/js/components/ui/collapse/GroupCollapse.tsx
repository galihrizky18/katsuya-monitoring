import React from 'react'
import { Button, Group, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


interface GroupCollapseProps {
    'children'?: React.ReactNode
    'title': string
}

const GroupCollapse:React.FC<GroupCollapseProps> = ({children, title}) => {

    const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>{title}</Button>
      </Group>

      <Collapse in={opened}>
        {children}
      </Collapse>
    </Box>
  )
}

export default GroupCollapse
