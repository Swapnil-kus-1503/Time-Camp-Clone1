import { Box, Center, Container, SimpleGrid } from '@chakra-ui/react'

import SignupLeftCompo from './SignupLeftCompo'
import SignupNavbar from './SignupNavbar'
import SignupRightCompo from './SignupRightCompo'

function SignUpPage() {
    return (
    
            <Container style={{ transition: "1s all ease" }} border={"2px"} minW={"100%"}>


                   <SignupNavbar />
              
                    <SimpleGrid columns={[1, 1, 1, 2]} gap={"28"} p={["1","10","14","20"]}>
                        <SignupLeftCompo />
                        <SignupRightCompo />
                    </SimpleGrid>
             


            </Container>

  

    )
}

export default SignUpPage