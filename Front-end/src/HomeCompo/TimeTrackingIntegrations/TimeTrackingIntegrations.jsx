
import React from 'react'
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
function TimeTrackingIntegrations() {

    return (
        <Box bg={"#F3F3F3"} >
            <SimpleGrid columns={["1", "1", "2"]} p={["4", "10", "16", "28"]} gap="16">
                <Flex direction={"column"} gap="6" w={"90%"} >

                    <Text fontWeight={"medium"} color={"#25CF60"}>  TIME TRACKING INTEGRATIONS</Text>
                    <Box>

                        <Heading size={"xl"}>Easy and quick integration </Heading>
                        <Heading size={"xl"}>with more than 100 apps</Heading>
                        <Heading size={"xl"}>and work tools</Heading>
                    </Box>
                    <Text fontSize={"lg"} >TimeCamp works great alongside with all of the most popular work management tools.</Text>
                    <Text fontSize={"lg"}  >Now, you can also track time directly from your go-to apps such as Trello or Asana thanks to our Chrome extension.</Text>

                    <Button size={"lg"} color={"white"} borderRadius={"full"} w={["90%", "80%", "70%"]} bg={"#25CF60"}>Track time in Chrome</Button>
                    <Text fontSize={"lg"} >Maintain your current workflow and connect TimeCamp, the best time tracking software, with your currently used apps.</Text>

                </Flex>
                <SimpleGrid gap={"10"} columns={["2", "2", "2", "3"]}>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png'></Image>
                    </Box>

                </SimpleGrid>
            </SimpleGrid>
        </Box>
    )
}

export default TimeTrackingIntegrations