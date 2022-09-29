import React from 'react'
import {
  Accordion, Center,
  AccordionButton, AccordionIcon, Heading, AccordionItem, AccordionPanel, Box, Text, Flex

} from '@chakra-ui/react'

function FAQCompo() {
  return (
    <>
      <Box>
        <Center pt={"20"}>
          <Heading fontSize={"4xl"}>FAQ</Heading>
        </Center>
        <Accordion allowToggle pl={["1", "1", "10", "28"]} pr={["1", "1", "10", "28"]}>
          {/* <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"70px"} dis>

                    <Heading fontSize={"xl"} >

                      {Head}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text> {secondHead}</Text>
                <Text>{details}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Box>
          <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"70px"} dis>

                    <Heading fontSize={"xl"} >

                      {Head}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text> {secondHead}</Text>
                <Text>{details}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Box> */}
        </Accordion>
      </Box>

    </>
  )
}

export default FAQCompo