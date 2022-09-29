import { Box, Button, Center, Flex, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function SSLUseTimeCamp() {
    return (
        <>
            <Center>
                <SimpleGrid columns={["1", "1", "2"]} borderRadius={"2xl"} w={["100%", "90%", "85%"]} minH={["360px", "400px", "438px"]} bg={"#F7B801"}>
                    <Flex direction={"column"} gap="5" p={["4", "7", "12", "14"]} >
                        <Box fontFamily={"lato,sans-serif"} color={"black"} fontWeight="700" >

                            <Heading fontSize={["3xl", "3xl", "4xl", "5xl"]} >Use TimeCamp to your advantage</Heading>


                        </Box>
                        <Text fontSize={"lg"}>If you’re struggling to keep track of your work across different projects, you need a radical change. You need TimeCamp. </Text>
                        <Flex bg={"white"} borderRadius={"full"} justify="space-between">

                            <Input border={"none"} placeholder="Add your email" bg="white" w={["90%", "70%", "60%"]} borderRadius={"full"} size={"lg"}>

                            </Input>
                            <Button size={"lg"} color="white" bg={"#25CF60"} borderRadius={"full"}>Start tracking time</Button>
                        </Flex>
                        <Text>By signing up to our Terms and Conditions and privacy policy</Text>
                    </Flex>
                    <Box borderRadius={"full"} bgImage={"https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/group-9.png"}>

                        {/* <Image w={["90%", "100%"]} h={["220px", "330px", "430px"]} src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/group-9.png'></Image> */}
                    </Box>
                </SimpleGrid>
            </Center>

        </>
    )
}

export default SSLUseTimeCamp