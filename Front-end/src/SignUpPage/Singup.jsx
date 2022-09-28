import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  CloseButton,
  SlideFade,
} from "@chakra-ui/react";
import React from "react";
import SignUpCompo from "./SignupForm";
import SignUpNavbar from "./SignupNav";

const Singup = () => {
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
        <SignUpCompo />
      </Center>
    </Box>
  );
};

export default Singup;
