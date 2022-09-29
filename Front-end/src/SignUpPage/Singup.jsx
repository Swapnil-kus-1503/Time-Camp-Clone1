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
  const [type, setType] = useState("")

  return (
    <Box minW={"100%"}>
      <SlideFade in={isOpen} offsetY="20px">
        <Center>
          <Box
            color="black"
            minW={"55%"}
            minH={"60px"}
            rounded="md"
            shadow="md"
          >
            {type === "success" ? (
              <Alert
                status={"success"}
                variant="left-accent"
                borderRadius={"md"}
                display="block"
              >
                <AlertIcon />
                <AlertTitle>Email sent!</AlertTitle>
                <AlertDescription>
                  Please check your mail and click on the verification link.
                </AlertDescription>
                <CloseButton
                  position={"absolute"}
                  right={"8px"}
                  top={"8px"}
                ></CloseButton>
              </Alert>
            ) : type === "warning" ? (
              <Alert
                status={"warning"}
                variant="left-accent"
                borderRadius={"md"}
              >
                <AlertIcon />
                <AlertTitle> Enter all the credentials!</AlertTitle>
                <AlertDescription>
                  Please Enter all the credentials to proceed further
                </AlertDescription>
                <CloseButton
                  position={"absolute"}
                  right={"8px"}
                  top={"8px"}
                ></CloseButton>
              </Alert>
            ) : (
              <Alert status={"error"} variant="left-accent" borderRadius={"md"}>
                <AlertIcon />
                <AlertTitle>Password!</AlertTitle>
                <AlertDescription>
                  Please check your passwords are not matching
                </AlertDescription>
                <CloseButton
                  position={"absolute"}
                  right={"8px"}
                  top={"8px"}
                ></CloseButton>
              </Alert>
            )}
          </Box>
        </Center>
      </SlideFade>

      <SignUpNavbar />

      <Center p={"14"}>
        <SignUpForm />
      </Center>
    </Box>
  );
};

export default Singup;
