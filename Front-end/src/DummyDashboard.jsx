import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { UserAuth } from './Context/Authcontext'

function DummyDashboard() {
    const { logOut, user } = UserAuth()
    console.log('user:', user)
    const handleSignout = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Box>
              
            <Button onClick={handleSignout}>Logout</Button>
        </Box>
    )
}

export default DummyDashboard