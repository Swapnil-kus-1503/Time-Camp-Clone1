import { Button, Flex, FormControl, FormLabel, Menu, MenuButton,MenuDivider,MenuItem,MenuList, Stack, Switch, Text } from '@chakra-ui/react'
import React from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";

export const MenuListComponent = () => {
  return (
    <div>
        <Menu>
            <MenuButton as={Button} 
            border='0.5px solid #C0C0C0'
            _active={{border:"1px solid green",color:"green"}}  
            >
                <BsThreeDotsVertical />
            </MenuButton>
                <MenuList>
                    <MenuItem>
                    <Flex gap={'2rem'}>
                        <Text>Round up to nearest 15 minute segment:</Text>
                        <Stack direction='row'>
                            <Switch colorScheme='green' />
                        </Stack>
                    </Flex>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                    <Flex gap={'2rem'}>
                        <Text>Synchronise timeframe with duration when editing time entry:</Text>
                        <Stack direction='row'>
                            <Switch colorScheme='green' />
                        </Stack>
                    </Flex>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                        <Flex direction={"column"} >
                        <Text>When Timer is started for existing time entry:</Text>
                        <FormControl>
                        <FormLabel htmlFor='isChecked'>Create new time entry and start timer</FormLabel>
                        <Switch id='isChecked' defaultChecked colorScheme='green' />
                        <FormLabel htmlFor='isDisabled'>Modify totl time in existing entry</FormLabel>
                        <Switch id='isDisabled' colorScheme='green' />
                        </FormControl>
                        </Flex>
                    </MenuItem>
                </MenuList>
        </Menu>
    </div>
  )
}
