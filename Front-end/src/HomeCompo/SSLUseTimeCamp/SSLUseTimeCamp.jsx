import { Box, Button, Center, Flex, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function SSLUseTimeCamp() {
    return (
        <>
            <Center>
                <SimpleGrid columns={["1", "1", "1"]} borderRadius={"2xl"} w={["100%", "90%", "85%"]} minH={["360px", "400px", "438px"]} bg={"#F7B801"}>
                   <Center borderRadius={"full"} ml={["1px","1px","10px","40px"]} bgRepeat="no-repeat" bgImage={"https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/group-9.png"}>

                        <Flex w={["100%", "90%", "80%", "60%"]} direction={"column"} gap="5" p={["4", "7", "12", "14"]} >
                            <Box fontFamily={"lato,sans-serif"} color={"black"} fontWeight="700" >

                                <Heading fontSize={["3xl", "4xl", "4xl", "5xl"]} >Use TimeCamp to your advantage</Heading>


                            </Box>
                            <Text fontSize={"lg"} fontWeight="500">If you’re struggling to keep track of your work across different projects, you need a radical change. You need TimeCamp. </Text>
                            <Flex bg={"white"} borderRadius={"full"} justify="space-between" w={["100%", "100%", "90%", "70%"]}>

                                <Input border={"none"} placeholder="Add your email" bg="white" borderRadius={"full"} size={"lg"}>

                                </Input>
                                <Button size={"lg"} w={["90%", "80%", "70%"]} color="white" bg={"#25CF60"} borderRadius={"full"}>Start tracking time</Button>
                            </Flex>
                            <Text fontSize={"lg"} fontWeight="500">By signing up to our Terms and Conditions and privacy policy</Text>
                        </Flex>
                    </Center>


                </SimpleGrid>
            </Center>

        </>
    )
}

export default SSLUseTimeCamp