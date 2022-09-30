import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
function TimeTrackingIntegrations() {
  return (
    <Box bg={"#F3F3F3"}>
      <SimpleGrid
        columns={["1", "1", "2"]}
        p={["4", "10", "16", "28"]}
        gap="16"
      >
        <Flex direction={"column"} gap="6" w={"90%"}>
          <Text fontWeight={"medium"} color={"#25CF60"}>
            {" "}
            TIME TRACKING INTEGRATIONS
          </Text>
          <Box>
            <Heading size={"xl"}>Easy and quick integration </Heading>
            <Heading size={"xl"}>with more than 100 apps</Heading>
            <Heading size={"xl"}>and work tools</Heading>
          </Box>
          <Text fontSize={"lg"}>
            TimeCamp works great alongside with all of the most popular work
            management tools.
          </Text>
          <Text fontSize={"lg"}>
            Now, you can also track time directly from your go-to apps such as
            Trello or Asana thanks to our Chrome extension.
          </Text>

          <Button
            size={"lg"}
            color={"white"}
            borderRadius={"full"}
            w={["90%", "80%", "70%"]}
            bg={"#25CF60"}
            _hover={{ bgColor: "#1da44c" }}
          >
            Track time in Chrome
          </Button>
          <Text fontSize={"lg"}>
            Maintain your current workflow and connect TimeCamp, the best time
            tracking software, with your currently used apps.
          </Text>
        </Flex>
        <SimpleGrid gap={"10"} columns={["2", "2", "2", "3"]}>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/one.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/two.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/three.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/four.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/five.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/sisx.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/seven.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/eight.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/nine.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/ten.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/eleven.png"></Image>
          </Box>
          <Box
            bg={"white"}
            boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            boxSize={"115px"}
            borderRadius={"3xl"}
          >
            <Image p={"7"} src="./TimeTracking/twelve.jpg"></Image>
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}

export default TimeTrackingIntegrations;
