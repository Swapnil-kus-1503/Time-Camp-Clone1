import React from 'react';
import {Menu,MenuItem,MenuButton,IconButton,MenuList, Flex,MenuDivider,useColorModeValue,useDisclosure} from "@chakra-ui/react";
import {FaUserCircle,FaRegUser,FaDownload} from "react-icons/fa";
import {VscGlobe} from "react-icons/vsc";
import {ImSwitch} from "react-icons/im";

export const User = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
         <Menu isOpen={isOpen}>
            <MenuButton as={IconButton}
            variant="ghost"
            _hover={{ color: useColorModeValue("green.300", "green.700") }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            >
                <FaUserCircle size={"2.2rem"}/>
            </MenuButton>
          <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem><Flex gap="0.5rem"><FaRegUser size={"1.3rem"} />User</Flex></MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><FaDownload size={"1.3rem"}/>Download app</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><VscGlobe size={"1.3rem"}/>Browser plugin</Flex></MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><ImSwitch size={"1.3rem"}/>Browser plugin</Flex></MenuItem>
          </MenuList>
          </Menu>
    </div>
  )
}
