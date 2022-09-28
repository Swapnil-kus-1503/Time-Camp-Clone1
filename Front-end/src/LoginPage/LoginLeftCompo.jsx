import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

function LoginLeftCompo() {
  return (
    <Flex rowGap={["5", "7", "10"]} direction="column" justify={"center"}>
      <Text color={"#25CF60"}>PRODUCT UPDATE</Text>
      <Box>
        <Heading fontSize={["3xl", "4xl", "5xl"]}>TimeCamp Plugin</Heading>
        <Heading fontSize={["3xl", "4xl", "5xl"]}>for Google</Heading>
        <Heading fontSize={["3xl", "4xl", "5xl"]}>Chrome</Heading>
      </Box>
      <Box>
        <Heading fontSize={["xl", "2xl"]} color={"#767676"}>
          Track time without leaving
        </Heading>
        <Heading fontSize={["xl", "2xl"]} color={"#767676"}>
          Chrome in 70+ online apps
        </Heading>
      </Box>
      {/* PROBLEM */}
      <Button
        w={["70", "96"]}
        fontSize={"md"}
        color={"white"}
        size={"lg"}
        bg={"#25CF60"}
        borderRadius={"3xl"}
      >
        <Image
          maxH={"7"}
          src="https://cdn.timecamp.com/res/css/images/chrome-icon-button.1664279108.png"
        ></Image>{" "}
        Add TimeCamp for Chrome
      </Button>
      {/* PROBLEM */}
      <Center>
        <Stack
          spacing={["3", "5", "7", "10"]}
          direction={["column", "column", "row", "row"]}
        >
          <Image
            h={["24", "16", "14"]}
            w={["40", "45", "36", "36"]}
            src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1664279108.png"
          ></Image>
          <Image
            h={["24", "16", "14"]}
            w={["40", "45", "36", "36"]}
            src="https://cdn.timecamp.com/res/css/images/capterra-icon.1664279108.png"
          ></Image>
          <Image
            h={["24", "16", "14"]}
            w={["40", "45", "36", "36"]}
            src="https://cdn.timecamp.com/res/css/images/crowd-icon.1664279108.png"
          ></Image>
          <Image
            h={["24", "16", "14"]}
            w={["40", "45", "36", "36"]}
            src="https://cdn.timecamp.com/res/css/images/get-app-icon.1664279108.png"
          ></Image>
        </Stack>
      </Center>
    </Flex>
  );
}

export default LoginLeftCompo;
