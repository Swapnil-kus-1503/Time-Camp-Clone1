import React from 'react';
import {Box, Divider, Heading,Menu,MenuButton,IconButton} from "@chakra-ui/react";
import styles from "../Styles/Header.module.css";
import {FiUserPlus,} from "react-icons/fi";
import { Settings } from './Settings';
import { Help } from './Help';
import { User } from './User';

export const Header = () => {
  
  return (
    <Box>
      <Divider mt="0.5rem"/>
      <Box className={styles.header_bar}>
        <Box>
          <Heading size={"md"} fontWeight="600" mt="0.5rem">Timesheet</Heading>
        </Box>
        <Box className={styles.menubox}>
          <Settings />
          <Help />
          <Menu>
            <MenuButton as={IconButton} variant="ghost" color={"green.300"}><FiUserPlus size={"1.8rem"}/></MenuButton>
          </Menu>
          <User />
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}
