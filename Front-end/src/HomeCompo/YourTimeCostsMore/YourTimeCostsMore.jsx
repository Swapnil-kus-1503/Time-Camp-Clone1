import { Box, Button, Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
const activebtnstyle = {
    backgroundColor: "#25CF60",
    color: "white"
}
const nonactive = {
    backgroundColor: "white",
    color: "black"
}
function YourTimeCostsMore() {
    const [bool, setbool] = useState(true)
    const handleBool1 = () => {
        setbool(!bool)
    }
    const handleBool2 = () => {
        setbool(!bool)
    }
    return (
        <>
            <Flex align={"center"} direction="column" gap={"4"}>
                <Center>
                    <Flex align={"center"} direction="column" gap={"10"}>

                        <Text color={"#25CF60"}>PRICING</Text>
                        <Heading>Your time costs more</Heading>
                        <Text>Use free forever plan or subscribe to a paid plan to get more feactures!</Text>
                       
                        <Flex >

                            <Button onClick={handleBool1} style={bool ? activebtnstyle : nonactive} borderRadius={"full"}> Annually 10% discount</Button>
                            <Button onClick={handleBool2} style={bool ? activebtnstyle : nonactive} borderRadius={"full"}>Monthly</Button>
                        </Flex>
                    </Flex>
                </Center>

                <SimpleGrid columns={["1", "2", "3", "4"]} gap="10" pl={"28"} pr="28">
                    <Box  >

                        <Flex p={"4"} direction={"column"} borderRadius={"2xl"} border="2px" align={"center"} minW={["330px", "255px"]} minH={["330px", "440px", "550px"]} gap={"7"}  >
                            <Heading color={"#25CF60"}>Free</Heading>
                            <Text>Free forever plan</Text>
                            <hr style={{ height: "2px", width: "100%", color: "#25CF60", backgroundColor: "#25CF60" }} />
                            <Text>Measure on which activities you spend time while working</Text>
                            <Button size={"lg"} minW={"90%"} borderRadius={"full"} bg="#25CF60" color={"white"}>Join for free</Button>
                            <ul>
                                <li>Unlimited users</li>
                                <li>Unlimited Projects & tasks</li>
                                <li>Desktop & Mobile app </li>
                            </ul>
                        </Flex>
                    </Box>
                    <Box >

                        <Flex p={"4"} direction={"column"} borderRadius={"2xl"} border="2px" align={"center"} minW={["330px", "255px"]} minH={["330px", "440px", "550px"]} gap={"7"}  >
                            <Heading >{bool ? "$ 6.3" : "$ 7"}</Heading>
                            <Text>user/mo</Text>
                            <hr style={{ height: "2px", width: "100%", color: "#25CF60", backgroundColor: "#25CF60" }} />
                            <Text>Be more transparent and gain customers trust</Text>
                            <Button size={"lg"} minW={"90%"} borderRadius={"full"} bg="#25CF60" color={"white"}>Start your free trial</Button>
                            <ul>
                                <li>Time rounding</li>
                                <li>Custom report</li>
                                <li>Hide time from users </li>
                                <li>Management roles</li>
                                <li>Team productivity tracking</li>
                                <li>XLS reports export</li>
                                <li>Unlimited integrations</li>
                                <li>Billable time & budgeting</li>
                            </ul>
                        </Flex>
                    </Box>
                    <Box>

                        <Flex color={"white"} bg="#25CF60" p={"4"} direction={"column"} borderRadius={"2xl"} border="2px" align={"center"} minW={["330px", "255px"]} minH={["330px", "440px", "550px"]} gap={"8"}  >
                            <Heading>{bool ? "$ 9" : "$ 10"}</Heading>
                            <Text>user/mo</Text>
                            <hr style={{ height: "2px", width: "100%", color: "#FFFFFF", backgroundColor: "#FFFFFF" }} />
                            <Text>Get full control over your buiseness</Text>
                            <Button size={"lg"} minW={"90%"} borderRadius={"full"} bg="white" color={"#25CF60"}>Start your free trial</Button>
                            <ul>
                                <li>Custom user roles</li>
                                <li>Billing rates</li>
                                <li>Invoicing</li>
                                <li>Timesheet approvals</li>
                                <li>Screenshots</li>
                                <li>SSO login</li>
                                <li>2-factor authentication</li>

                            </ul>
                        </Flex>
                    </Box>
                    <Box >
                        <Flex p={"4"} direction={"column"} borderRadius={"2xl"} border="2px" align={"center"} minW={["330px", "255px"]} minH={["330px", "440px", "550px"]} gap={"7"}  >
                            <Text color={"#25CF60"}>ENTERPRISE</Text>

                            <Heading >Lets discuss</Heading>
                            <Text>Free forever plan</Text>
                            <hr style={{ height: "2px", width: "100%", color: "#25CF60", backgroundColor: "#25CF60" }} />
                            <Text>Customize TimeCamp to your custom needs</Text>
                            <Button size={"lg"} minW={"90%"} borderRadius={"full"} bg="#25CF60" color={"white"}>Contact us</Button>

                            <Text fontWeight={"500"}>Everything in Pro Plus</Text>
                            <ul>
                                <li>Personalized training</li>
                                <li>Private cloud inplementation</li>
                                <li>Self hosted server</li>
                            </ul>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>

        </>
    )
}

export default YourTimeCostsMore