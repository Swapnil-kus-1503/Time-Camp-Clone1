import { Box, Center } from "@chakra-ui/react";
import React from "react";
import SignUpCompo from "./SignupForm";
import SignUpNavbar from "./SignupNav";

const Singup = () => {
  return (
    <Box minW={"100%"}>
      <SignUpNavbar />
      <Center p={"14"}>
        <SignUpCompo />
      </Center>
    </Box>
  );
};

export default Singup;
