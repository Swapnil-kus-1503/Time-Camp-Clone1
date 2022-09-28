import { Box,  SimpleGrid } from '@chakra-ui/react'

import SignupLeftCompo from './SignupLeftCompo'
import SignupNavbar from './SignupNavbar'
import SignupRightCompo from './SignupRightCompo'
const stile = {
    transition:"all 0.8s ease-in-out"
}
function SignUpPage() {
    return (

        <Box style={stile} w={"100%"}>
            <SignupNavbar />
            <SimpleGrid columns={[1, 1, 1, 2]} gap={"28"} p={["1", "10", "14", "20"]}>
                <SignupLeftCompo />
                <SignupRightCompo />
            </SimpleGrid>
        </Box>



    )
}

export default SignUpPage