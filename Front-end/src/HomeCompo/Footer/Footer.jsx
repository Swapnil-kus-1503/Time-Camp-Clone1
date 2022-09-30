import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

// 

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg='gray.50'
            color="gray.700" >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={[1, , 2, 4, 6]} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Link href={'#'}>Features</Link>
                        <Link href={'#'}>Integrations</Link>

                        <Link href={'#'}>Applications</Link>
                        <Link href={'#'}>Product updates</Link>
                        <Link href={'#'}>Customer Stories</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Support</Link>
                        <Link href={'#'}>Knowledge base</Link>
                        <Link href={'#'}>Developers API</Link>
                        <Link href={'#'}>Server Status</Link>
                      
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Integrations</ListHeader>
                        <Link href={'#'}>Trello</Link>
                        <Link href={'#'}>Monday.com</Link>
                        <Link href={'#'}>Google Calender</Link>
                        <Link href={'#'}>Asana</Link>
                        <Link href={'#'}>Jira</Link>
                        <Link href={'#'}>All integrations</Link>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>

                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 Chakra Templates. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}