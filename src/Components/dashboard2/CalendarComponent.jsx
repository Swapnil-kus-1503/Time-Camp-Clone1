import { Button,Box,Heading, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React,{ useState } from 'react';
import styles from "./Styles/ScheduleComponent.module.css"
import { Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import {GrPrevious,GrNext} from "react-icons/gr";



export const CalendarComponent = () => {
    const [value,setValue] = useState(new Date());
  return (
    <Box className={styles.calendar_props}>
        <Button borderRightRadius="0" border='0.5px solid #C0C0C0'><GrPrevious /></Button>
        <Menu>
            <MenuButton as={Button} 
            borderLeftRadius="0" 
            _active={{border:"1px solid green",color:"green"}}   
            borderRightRadius="0"  border='0.5px solid #C0C0C0'
            leftIcon={<FaRegCalendarAlt />}>
                {<RiArrowDropDownLine size={"1.8rem"} />}
            </MenuButton> 
        <MenuList>
            <Calendar value={value} onChange={setValue} />
        </MenuList>
        </Menu>
        <Button borderLeftRadius="0" border='0.5px solid #C0C0C0'><GrNext /></Button> 
        <Heading ml="2.5rem" fontWeight={400} lineHeight={"2.5rem"} size="md">{value.toDateString()}</Heading>
    </Box>
       
  )
}

