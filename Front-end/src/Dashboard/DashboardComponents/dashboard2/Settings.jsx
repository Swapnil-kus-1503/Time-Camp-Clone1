import React from 'react'
import {Menu,MenuItem,MenuButton,IconButton,MenuList, Flex,useColorModeValue,useDisclosure} from "@chakra-ui/react";
import {IoSettingsOutline,IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaRegCreditCard  } from "react-icons/fa";


export const Settings = () => {
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
                <IoSettingsOutline size={"1.8rem"}/>
            </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem><Flex gap="0.5rem"><IoSettingsOutline size={"1.5rem"}/>Settings</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><IoExtensionPuzzleOutline size={"1.5rem"} />Integration</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><FaRegCreditCard size={"1.5rem"} />Subscription</Flex></MenuItem>
          </MenuList>
          </Menu>
    </div>
  )
}

