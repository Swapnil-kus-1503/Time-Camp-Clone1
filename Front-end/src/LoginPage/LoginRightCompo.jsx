import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
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
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //    if (user !== null) {
  //         navigate("/")
  //     }
  //  }, [user])
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all the fields ");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        navigate("/");
      })
      .catch((er) => setErrorMsg(er.message));
  };
  const handleForgot = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => alert("emailsetn"))
      .catch((er) => setErrorMsg(er.message));
  };
  return (
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
          Log in with Google
        </Button>
        <Text>Or</Text>

        <Input
          placeholder="Email"
          type="email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        ></Input>
        <Text
          cursor={"pointer"}
          onClick={() => handleForgot(values.email)}
          color={"#25CF60"}
        >
          Forgotten Password?
        </Text>
        <Text>{errorMsg}</Text>
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
  );
}

export default LoginRightCompo;
