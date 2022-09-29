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
            <MenuItem>
                <a href='https://timecamp.s3.amazonaws.com/downloadsoft/1.7.2.0/TimeCampSetup_Win.exe' target="blank">
                    <Flex gap="0.5rem"><FaDownload size={"1.3rem"}/>Download app</Flex>
                </a>
            </MenuItem>
            <MenuItem>
                <a href='https://chrome.google.com/webstore/detail/time-tracker-by-timecamp/ohbkdjmhoegleofcohdjagmcnkimfdaa' target="blank">
                    <Flex gap="0.5rem"><VscGlobe size={"1.3rem"}/>Browser plugin</Flex>
                </a>
            </MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><ImSwitch size={"1.3rem"}/>Logout</Flex></MenuItem>
          </MenuList>
          </Menu>
    </div>
  )
}
