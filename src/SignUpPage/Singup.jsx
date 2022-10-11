import { Box, Center } from "@chakra-ui/react";
import React from "react";
import SignUpForm from "./SignupForm";
import SignUpNavbar from "./SignupNav";

const Singup = () => {
  document.title = "Sign Up - TimeCamp";
  return (
    <Box minW={"100%"}>
      <SignUpNavbar />

      <Center p={"10"}>
        <SignUpForm />
      </Center>
    </Box>
  );
};

export default Singup;
