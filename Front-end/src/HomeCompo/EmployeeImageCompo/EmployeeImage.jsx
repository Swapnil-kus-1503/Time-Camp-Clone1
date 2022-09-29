import React from "react";

import { Box, Image, Flex, Heading, Center, SimpleGrid, Button } from "@chakra-ui/react";
function EmployeeImage() {
    return (
        <div>
            
            <Box bg={"#25cf60"} pt={"20px"}>
                <Box w={"100%"} minH={"1px"}>
                    <Heading color={"white"} fontWeight={"700"} textAlign={"center"}>
                        Trusted by 18,000 teams from all over the world (and still growing!)
                    </Heading>
                </Box>

                <Flex
                    pb={"0.5rem"}
                    justify={"space-between"}
                    direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
                >
                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
                            alt=""
                        />
                    </Box>

                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
                            alt=""
                        />
                    </Box>

                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
                        />
                    </Box>
                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
                            alt=""
                        />
                    </Box>
                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
                            alt=""
                        />
                    </Box>
                    <Box
                        textAlign={"center"}
                        display="flex"
                        justifyContent={"center"}
                        position={"relative"}
                        minH="1px"
                    >
                        <Image
                            borderStyle={"none"}
                            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
                            alt=""
                        />
                    </Box>
                </Flex>
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
