import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpNavbar() {
  const navigate = useNavigate();

  return (
    <Flex
      minH={"80px"}
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      justify={"space-between"}
      align={"center"}
    >
      <Box>
        <Image
          ml={["1", "1", "20", "40"]}
          maxH={"20"}
          p="6"
          src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
        ></Image>
      </Box>
      <Heading
        onClick={() => navigate("/login")}
        mr={["5", "10", "20", "40"]}
        size={"md"}
        cursor={"pointer"}
        _hover={{ color: "#25CF60" }}
      >
        Log in
      </Heading>
    </Flex>
  );
}

export default SignUpNavbar;
