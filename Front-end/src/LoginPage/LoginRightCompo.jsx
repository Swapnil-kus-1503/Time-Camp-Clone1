import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SlideFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/Authcontext";
import { auth } from "./Firebase";
function LoginRightCompo() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (user !== null) {
  //     navigate("/dashboard")
  //   }
  // }, [user])
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMsg("All the fields are necessary ");
      onToggle();
      setType("warning");
    } else if (values.password.length < 6) {
      setErrorMsg("Password should me atleast 6 letters");
      onToggle();
      setType("warning");
    }

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {

        setErrorMsg("Login successful")
        onToggle()
        setType("success")

        navigate("/dashboard");
      })
      .catch((er) => {
        onToggle();
        setType("error");
        setErrorMsg(er.message);
      });
  };
  const handleForgot = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {


        onToggle()
        setErrorMsg("Email sent")
        setType("success")

      })
      .catch((er) => {
        setErrorMsg(er.message);
        onToggle();
        setType("error");
      });
  };
  return (
    <Flex direction={"column"} align={"center"}>
      <Box>
        <SlideFade in={isOpen} offsetY="20px">
          <Center>
            <Box
              color="black"



              rounded="md"
              shadow="md"
            >
              {type === "success" ? (
                <Alert
                  status={"success"}
                  variant="left-accent"
                  borderRadius={"md"}
                  h={"100%"}
                  display="block"
                >
                  <Flex align={"center"}>


                    <AlertIcon />
                    <AlertTitle>{errorMsg}</AlertTitle>

                    <CloseButton
                      onClick={onClose}
                    ></CloseButton>
                  </Flex>

                </Alert>
              ) : type === "warning" ? (
                <Alert
                  status={"warning"}
                  variant="left-accent"
                  borderRadius={"md"}
                  h={"100%"}
                  display="block"
                >

                  <Flex align={"center"}>

                    <AlertIcon />
                    <AlertTitle>{errorMsg}</AlertTitle>
                    <CloseButton
                      onClick={onClose}

                    ></CloseButton>
                  </Flex>

                </Alert>
              ) : (
                <Alert
                  status={"error"}
                  variant="left-accent"
                  borderRadius={"md"}
                  h={"100%"}
                  display="block"
                >

                  <Flex align={"center"}>

                    <AlertIcon />
                    <AlertTitle>{errorMsg}</AlertTitle>
                    <CloseButton
                      onClick={onClose}
                    ></CloseButton>
                  </Flex>

                </Alert>
              )}
            </Box>
          </Center>
        </SlideFade>
      </Box>
      <Box
        w={["300", "420px", "490px", "520px"]}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
        borderRadius={"3xl"}
      >
        <Flex
          direction={"column"}
          align="center"
          p={["4", "7", "10", "14"]}
          gap={"5"}
        >
          <Heading size={"md"}>Log in to TimeCamp</Heading>
          <Button
            onClick={handleGoogleSignIn}
            bg={"white"}
            border={"1px solid grey"}
            w={"100%"}
            color={"#767676"}
            fontWeight={"bold"}
          >
            <Image
              mr={"2.5"}
              h={"6"}
              src="https://i.ibb.co/yPYCXhz/googel.png"
            ></Image>{" "}
            Sign in with Google
          </Button>
          <Text>Or</Text>

          <Input
            placeholder="Email"
            type="email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          ></Input>

          <InputGroup>
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <InputRightElement h={"full"}>
              <Button
                size={"lg"}
                variant={"icono"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon bgSize={"2px"} /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text
            cursor={"pointer"}
            onClick={() => handleForgot(values.email)}
            color={"#25CF60"}
          >
            Forgot Password?
          </Text>

          <Button
            onClick={handleSubmit}
            color={"white"}
            size={"lg"}
            borderRadius={"3xl"}
            bg={"#25CF60"}
          >
            Login
          </Button>

          <Text
            cursor={"pointer"}
            onClick={() => navigate("/signup")}
            color={"#25CF60"}
          >
            No account? Sign up or Log in with SSO
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default LoginRightCompo;
