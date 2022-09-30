import React from 'react'
import {
  Accordion, Center,
  AccordionButton, AccordionIcon, Heading, AccordionItem, AccordionPanel, Box, Text, Flex, Image

} from '@chakra-ui/react'

function FAQCompo() {
  return (
    <>
      <Box>
   
        <Center pt={"20"}>
          <Heading fontSize={"4xl"}>FAQ</Heading>
        </Center>
        <Accordion allowToggle pl={["1", "1", "10", "28"]} pr={["1", "1", "10", "28"]}>
          <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"60px"} dis>

                    <Heading fontSize={"xl"} >
                      What is time tracker
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text> A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It</Text>
                <Text>is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.</Text>
                <Text>You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.</Text>


              </AccordionPanel>
            </AccordionItem>
          </Box>
          <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"60px"} dis>

                    <Heading fontSize={"xl"} >

                      Why use time tracker
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text>There are many reasons to use time tracking software. Here are the main use cases for a time tracker:</Text>
                <Text>1.<b>Tracking billable hours:</b> helps freelancers and employees who are paid on an hourly basis measure time spent on work with accuracy up to every second.</Text>
                <Text>2.<b>Improving productivity:</b> employees who struggle with poor time management and distractions can work on their efficiency, understand how they work, and what takes most of their time.</Text>
                <Text>3.<b>Timesheet management:</b>one of the most common features of time tracker is a timesheet – a digital version of a paper timesheet. With a time tracker, your team can have it filled out automatically.</Text>
                <Text>4.<b>Work automation:</b>time tracker helps to save time on administrative and repetitive tasks, better allocate resources, cut costs, and smoothen teams’ workflow.</Text>
              </AccordionPanel>
            </AccordionItem>
          </Box>
          <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"60px"} dis>

                    <Heading fontSize={"xl"} >

                      What are the benefits of time tracking
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text>Here are all the benefits of using time tracking software in a nutshell.:</Text>
                <ul>
                  <li>Increased productivity</li>
                  <li>Accurate timesheets</li>
                  <li>Real-time updates on project status</li>
                  <li>Easy attendence management</li>
                  <li>Workflow automation</li>
                </ul>

              </AccordionPanel>
            </AccordionItem>
          </Box>
          <Box >

            <AccordionItem minH={"100%"}>

              <AccordionButton >
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"60px"} dis>

                    <Heading fontSize={"xl"} >

                      How to bill clients on hourly work?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text>With TimeCamp, you can set up billing rates for your team members, projects, and clients.</Text>
                <Text>Have the time tracker record billable time and easily turn timesheet data into invoices, adjust the tax rates for your country and profession. And then, simply export the document or send it straight to your clients.</Text>

              </AccordionPanel>
            </AccordionItem>
          </Box>
          <Box >
           <AccordionItem minH={"100%"}>
              <AccordionButton>
                <Flex justifyContent={"space-between"} align="center" w={"100%"} >
                  <Box minH={"60px"} dis>

                    <Heading fontSize={"xl"} >

                      How to save time on timesheets?
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </Flex>

              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text>There is nothing better than having your timesheet filled out automatically!</Text>
                <Text>TimeCamp’s non-intrusive desktop app works in the background so you and your team can focus on what really matters, while the time tracker collects all the data for timesheets.
                  Edit your time logs any time or add time manually for even more accuracy. Approve your team’s daily or weekly timesheets with one click without effort.
                  Quick, easy, and painless timesheet management!</Text>

              </AccordionPanel>
            </AccordionItem>
          </Box>
        </Accordion>
      </Box>

    </>
  )
}

export default FAQCompo