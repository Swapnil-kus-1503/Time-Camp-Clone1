import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../Context/Authcontext";
import { auth } from "../LoginPage/Firebase";

function SignUpForm() {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    console.log("Hello");
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (user !== null) {
  //     navigate("/login")
  //   }
  // }, [user])
  const [values, setValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMsg("All Fields Are Mandatory to fill");
      return;
    } else if (values.password.length < 6) {
      setErrorMsg("Password should me atleast 6 letters");
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setErrorMsg(err.message.Firebase));
  };
  return (
    <Box
      w={["300", "420px", "390px", "476px"]}
      h={"660px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      borderRadius={"3xl"}
    >
      <Flex
        direction={"column"}
        align="center"
        p={["4", "7", "10", "14"]}
        gap={"4"}
      >
        <Heading size={"lg"}>Start Tracking Time</Heading>
        <Flex direction={"column"} gap={"2"}>
          <Heading size={"md"} color={"#767676"}>
            Create an account and start
          </Heading>
          <Heading size={"md"} color={"#767676"}>
            with a free 14-day trial
          </Heading>
        </Flex>
        <Text color={"#767676"}>All features. No credit card required</Text>
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
          Sign up with Google
        </Button>
        <Text>Or</Text>

        <Input
          placeholder="Email"
          type="email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          placeholder="Password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Input
          placeholder="Phone(Optional)"
          type="number"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        <Text color={"#25CF60"}>Forgot Password?</Text>
        <Text>{errorMsg}</Text>
        <Button
          onClick={handleSubmit}
          color={"white"}
          size={"lg"}
          borderRadius={"3xl"}
          bg={"#25CF60"}
        >
          Sign up for free
        </Button>
        <Text color={"#767676"}>By signing up you agree to our <Text color={"#25CF60"}>Terms of Service and Privacy Policy</Text></Text>
      </Flex>
    </Box>
  );
}

export default SignUpForm;
