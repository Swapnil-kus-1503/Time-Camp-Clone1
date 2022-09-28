import { Box, SimpleGrid } from '@chakra-ui/react'

import LoginLeftCompo from './LoginLeftCompo'
import LoginNavbar from './LoginNavbar'
import LoginRightCompo from './LoginRightCompo'
const stile = {
    transition: "all 0.8s ease-in-out"
}
function LoginInPage() {
    return (

        <Box style={stile} w={"100%"}>
            <LoginNavbar />
            <SimpleGrid columns={[1, 1, 1, 2]} gap={"28"} p={["1", "10", "12", "16"]}>
                <LoginLeftCompo />
                <LoginRightCompo />
            </SimpleGrid>
        </Box>



    )
}

export default LoginInPage