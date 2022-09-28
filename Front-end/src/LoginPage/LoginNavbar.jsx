import { Box, Image } from "@chakra-ui/react";
import React from "react";

function LoginNavbar() {
  return (
    <Box minH={"80px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}>
      <Image
        ml={["1", "1", "20", "40"]}
        maxH={"20"}
        p="6"
        src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
      ></Image>
    </Box>
  );
}

export default LoginNavbar;
