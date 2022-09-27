import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import SignupLeftCompo from './SignupLeftCompo'
import SignupNavbar from './SignupNavbar'
import SignupRightCompo from './SignupRightCompo'

function SignUpPage() {
    return (
        <Box>


            <SignupNavbar />
            <Center>
                <SimpleGrid columns={[1, 1, 2, 2]} gap={"28"}>
                    <SignupLeftCompo />
                    <SignupRightCompo />
                </SimpleGrid>
            </Center>


        </Box>
    )
}

export default SignUpPage