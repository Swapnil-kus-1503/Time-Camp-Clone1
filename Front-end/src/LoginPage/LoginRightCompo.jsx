import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Authcontext'
function LoginRightCompo() {
    const navigate = useNavigate()
    const { googleSignin, user } = UserAuth()
    console.log(user);
    const handleGoogleSignin = async () => {
        try {
            await googleSignin()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
       if (user !== null) {
            navigate("/")
        }
     }, [user])

    return (
        <Box
            w={["300", "420px", "490px", "520px"]}

            // w={["380px","450px","520px"]} minH={"509px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} borderRadius={"3xl"}
        >
            <Flex direction={"column"} align="center" p={["4", "7", "10", "14"]} gap={"6"} >
                <Heading size={"md"}>Log in to TimeCamp</Heading>
                <Button onClick={handleGoogleSignin} bg={"white"} border={"1px solid grey"} w={"100%"}><Image mr={"2.5"} h={"6"} src=
                    'https://i.ibb.co/yPYCXhz/googel.png'></Image> Log in with Google</Button>
                <Text>Or</Text>
                
                <Input placeholder='Email'></Input>
                <Input placeholder='Password'></Input>
                <Text color={"#25CF60"}>Forgotten Password?</Text>
                <Button color={"white"} size={"lg"} borderRadius={"3xl"} bg={"#25CF60"}>Login</Button>
                <Text color={"#25CF60"}>No account? Sign up or Log in with SSO</Text>
            </Flex>
        </Box>
    )
}

export default LoginRightCompo