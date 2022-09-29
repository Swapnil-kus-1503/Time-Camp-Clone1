import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  CloseButton,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SignUpForm from "./SignupForm";
import SignUpNavbar from "./SignupNav";

const Singup = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [type, setType] = useState("");

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
