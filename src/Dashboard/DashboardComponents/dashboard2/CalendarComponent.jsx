import { Button, Box, Heading, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "./Styles/ScheduleComponent.module.css"
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";



export const CalendarComponent = () => {
    const [value, setValue] = useState(new Date());
    return (
        <Box className={styles.calendar_props}>
            <button style={{ width: "36px", height: "40px", border: "0.5px solid #C0C0C0", borderRadius: "10px 0px 0px 10px"  ,padding:"6px"}}><GrPrevious /></button>
            <Menu>
                <MenuButton
                    borderLeftRadius="0"
                    style={{padding:"10px"}}
                    _active={{ border: "1px solid green", color: "green" }}
                    borderRightRadius="0" border='0.5px solid #C0C0C0'

                    >
                   
                    <FaRegCalendarAlt />
                </MenuButton>
                <MenuList>
                    <Calendar value={value} onChange={setValue} />
                </MenuList>
            </Menu>
            <button style={{ width: "36px", height: "40px", border: "0.5px solid #C0C0C0", borderRadius: "0px 10px 10px 0px",padding:"6px" }}><GrNext /></button>
            <Heading ml="2.5rem" fontWeight={400} lineHeight={"2.5rem"} size="md">{value.toDateString()}</Heading>
        </Box>

    )
}

