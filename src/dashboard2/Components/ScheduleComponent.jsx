import { Box,Button,Menu,MenuButton,  MenuList,} from '@chakra-ui/react'
import React from 'react';
import styles from "../Styles/ScheduleComponent.module.css";
import { FaRegUser } from "react-icons/fa";
import {RiArrowDropDownLine} from "react-icons/ri";
import { FiRefreshCw } from "react-icons/fi";
import { BsThreeDotsVertical} from "react-icons/bs";
import { BulkEdit } from './BulkEdit';
import { CalendarComponent } from './CalendarComponent';
import { BigCalendar } from './BigCalendar';


export const ScheduleComponent = () => {

  return (
    <Box className={styles.mainScheduleBox}>
        <Box className={styles.dateBox}>
            <CalendarComponent /> 
        </Box>
        <Box className={styles.CalendarBox}>
            <Box>
                <Button borderRightRadius="0" border='0.5px solid #C0C0C0'>Day</Button>
                <Menu>
                <MenuButton _active={{border:"1px solid green"}} as={Button} borderLeftRadius="0" border='0.5px solid #C0C0C0'>Calendar</MenuButton>
                <MenuList  minWidth='82rem'>
                    <BigCalendar />
                </MenuList>
                </Menu>
            </Box>
           <Button  border='0.5px solid #C0C0C0'><FiRefreshCw /></Button>
           <Button  border='0.5px solid #C0C0C0'><FaRegUser /><RiArrowDropDownLine size={"1.8rem"}/></Button>
           <BulkEdit />
           <Button  border='0.5px solid #C0C0C0'><BsThreeDotsVertical /></Button>
        </Box>
    </Box>
  )
}
