import { Box, Menu, MenuButton, MenuGroup, MenuItem, MenuList,Flex, InputGroup, Input, InputRightElement, Button} from '@chakra-ui/react'
import React from 'react';
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import {BsPencilSquare } from "react-icons/bs";

export const BulkEdit = () => {
  return (
    <Box>
   <Menu>
       <MenuButton as={Button} border='0.5px solid #C0C0C0' leftIcon={<BsPencilSquare />}>Bulk edit</MenuButton>
    <MenuList>
      
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        w='22rem'
        mr='1rem'
        ml='1rem'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='md' variant="ghost">
            <FiSearch />
        </Button>
      </InputRightElement>
    </InputGroup>
      
      <MenuGroup title='People'>
      <MenuItem><Flex gap="0.5rem"><FaRegUser size={"1.3rem"} />User</Flex></MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
    </Box>
 
  )
}
