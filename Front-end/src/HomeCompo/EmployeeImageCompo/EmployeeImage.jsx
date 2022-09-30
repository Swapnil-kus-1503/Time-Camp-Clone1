import React from "react";

import { Box, Image, Flex, Heading, Center, SimpleGrid, Button } from "@chakra-ui/react";
function EmployeeImage() {
    return (
        <div>
            <Box
                overflowX={"hidden"}
                bgSize={"cover"}
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                p={"6rem"}

                height={"1100px"} border="2px" bgImg={"https://cdn-m.timecamp.com/img/backgroundTop.webp"}>
                <Center>
                    {/* write everything here  */}
                    <Flex bgColor={"black"} w={"60%"} h={"300px"} border={"2px"}>
                    </Flex>
                    {/* write everything here */}
                </Center>

            </Box>


            <Center>
                <SimpleGrid columns={["1", "1", "2"]} borderRadius={"2xl"} w={["100%", "90%", "80%"]} minH="438px" bg={"#1B1B20"}>
                    <Flex direction={"column"} gap="10" p={["4", "7", "12", "16"]}>
                        <Box fontFamily={"lato,sans-serif"} color={"white"} fontWeight="700" >

                            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} >Stay on top of your</Heading>
                            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} >teams' productivity</Heading>
                            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} >and profitability!</Heading>
                        </Box>
                        <Button w={["90%", "70%", "60%"]} bg={"#F7B801"} color="white" borderRadius={"full"} size={"lg"}>Book a Demo</Button>
                    </Flex>
                    <Image w={["90%", "100%"]} h={["220px", "330px", "430px"]} src='https://cdn-m.timecamp.com/img/landing-page/banner-icon.svg'></Image>
                </SimpleGrid>
            </Center>
        </div>
    );
}

export default EmployeeImage;