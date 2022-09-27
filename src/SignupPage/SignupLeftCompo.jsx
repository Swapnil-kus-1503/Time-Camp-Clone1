import { Box, Button, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function SignupLeftCompo() {
    return (
        <Flex gap={"10"} direction="column" justify={"center"}>
            <Text color={"#25CF60"} >PRODUCT UPDATE</Text>
            <Box>
                <Heading fontSize={"5xl"}>
                    TimeCamp Plugin
                </Heading>
                <Heading fontSize={"5xl"}>
                    for Google
                </Heading>
                <Heading fontSize={"5xl"}>
                    Chrome
                </Heading>
            </Box>
            <Box>
                <Heading fontSize={"x-large"} color={"#767676"}>
                    Track time without leaving

                </Heading>
                <Heading fontSize={"x-large"} color={"#767676"}>
                    Chrome in 70+ online apps
                </Heading>
            </Box>
            <Button w={"96"} fontSize={"md"} color={"white"} size={"lg"} bg={"#25CF60"} borderRadius={"3xl"} >
                <Image maxH={"7"} mr="5" src="https://cdn.timecamp.com/res/css/images/chrome-icon-button.1664279108.png"></Image> Add TimeCamp for Chrome
            </Button>
            <Center>
                <Stack spacing={["3", "5", "7", "10"]} direction={["column", "row", "row", "row"]}>
                    <Image maxH={["24", "14"]} maxW={["40", "28"]} src='https://cdn.timecamp.com/res/css/images/crozdesk-icon.1664279108.png'></Image>
                    <Image maxH={["24", "14"]} maxW={["40", "28"]} src='https://cdn.timecamp.com/res/css/images/capterra-icon.1664279108.png'></Image>
                    <Image maxH={["24", "14"]} maxW={["40", "28"]} src='https://cdn.timecamp.com/res/css/images/crowd-icon.1664279108.png'></Image>
                    <Image maxH={["24", "14"]} maxW={["40", "28"]} src='https://cdn.timecamp.com/res/css/images/get-app-icon.1664279108.png'></Image>
                </Stack>
            </Center>

        </Flex>
    )
}

export default SignupLeftCompo