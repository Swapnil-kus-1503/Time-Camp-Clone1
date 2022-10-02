import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function TimeTrackingTextCompo({
  forwhome,
  firstHeading,
  secondHeading,
  thirdHeading,
  littledes,
  fourthHeading,
  largestdes,
  btnText,
}) {
  return (
    <Flex direction={"column"} gap="6" w={"90%"}>
      <Text fontWeight={"medium"} color={"#25CF60"}>
        {forwhome}
      </Text>
      <Box>
        <Heading size={"2xl"}>{firstHeading} </Heading>
        <Heading size={"2xl"}>{secondHeading} </Heading>
        <Heading size={"2xl"}>{thirdHeading} </Heading>
      </Box>
      <Text>{littledes}</Text>
      <Heading fontSize={"lg"}>{fourthHeading}</Heading>
      <hr style={{ height: "1px", color: "green" }} />
      <Text>{largestdes}</Text>
      <Button
        _hover={{ bgColor: "#1da44c" }}
        color={"white"}
        borderRadius={"full"}
        w={"70%"}
        bg={"#25CF60"}
      >
        {btnText}
      </Button>
    </Flex>
  );
}

export default TimeTrackingTextCompo;
