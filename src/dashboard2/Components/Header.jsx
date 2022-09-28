import React from 'react';
import {Box, Divider, Heading,Menu,MenuItem,MenuButton,IconButton,MenuList, Flex,MenuDivider,useColorModeValue} from "@chakra-ui/react";
import styles from "../Styles/Header.module.css";
import {IoSettingsOutline,IoExtensionPuzzleOutline,IoInformationCircleOutline,IoBookOutline} from "react-icons/io5";
import {BiHelpCircle,BiMessage} from "react-icons/bi";
import {FiUserPlus,FiHeart} from "react-icons/fi";
import {FaUserCircle,FaRegCreditCard,FaBullhorn,FaRegUser,FaDownload} from "react-icons/fa";
import {CgGift} from "react-icons/cg";
import {VscGlobe} from "react-icons/vsc";
import {ImSwitch} from "react-icons/im";

export const Header = () => {
  
  return (
    <Box>
      <Divider mt="0.5rem"/>
      <Box className={styles.header_bar}>
        <Box>
          <Heading size={"md"} fontWeight="600" mt="0.5rem">Timesheet</Heading>
        </Box>
        <Box className={styles.menubox}>
          <Menu>
            <MenuButton as={IconButton} variant="ghost"   _hover={{ color: useColorModeValue("green.300", "green.700") }}><IoSettingsOutline size={"1.8rem"}/></MenuButton>
          <MenuList>
            <MenuItem><Flex gap="0.5rem"><IoSettingsOutline size={"1.5rem"}/>Settings</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><IoExtensionPuzzleOutline size={"1.5rem"} />Integration</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><FaRegCreditCard size={"1.5rem"} />Subscription</Flex></MenuItem>
          </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={IconButton}  variant="ghost"   _hover={{ color: useColorModeValue("green.300", "green.700") }}><BiHelpCircle size={"2rem"}/></MenuButton>
          <MenuList>
            <MenuItem><Flex gap="0.5rem"><IoInformationCircleOutline size={"1.5rem"}/>Help</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><IoBookOutline size={"1.5rem"}/>Knowledge base</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><BiMessage size={"1.5rem"} />Send feedback</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><FiHeart size={"1.5rem"} />Become a partner</Flex></MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><CgGift size={"1.5rem"}/>What's new</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><FaBullhorn size={"1.5rem"}/>Suggest a feature</Flex></MenuItem>
          </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={IconButton} variant="ghost" color={"green.300"}><FiUserPlus size={"1.8rem"}/></MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={IconButton} variant="ghost"   _hover={{ color: useColorModeValue("green.300", "green.700") }}><FaUserCircle size={"2.2rem"}/></MenuButton>
          <MenuList>
          <MenuItem><Flex gap="0.5rem"><FaRegUser size={"1.3rem"} />User</Flex></MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><FaDownload size={"1.3rem"}/>Download app</Flex></MenuItem>
            <MenuItem><Flex gap="0.5rem"><VscGlobe size={"1.3rem"}/>Browser plugin</Flex></MenuItem>
            <MenuDivider/>
            <MenuItem><Flex gap="0.5rem"><ImSwitch size={"1.3rem"}/>Browser plugin</Flex></MenuItem>
          </MenuList>
          </Menu>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}
