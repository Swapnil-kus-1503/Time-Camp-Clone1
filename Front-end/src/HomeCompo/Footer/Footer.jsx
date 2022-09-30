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
            color="black" >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={[2, 2, 4, 6]} spacing={8}>
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
                        <ListHeader>Resources</ListHeader>
                        <Link href={'#'}>Contact</Link>
                        <Link href={'#'}>HeySpace</Link>
                        <Link href={'#'}>About us</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Become a Partner</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Calculators</ListHeader>
                        <Link href={'#'}>Profit Margin Calculator</Link>
                        <Link href={'#'}>Online Timer</Link>
                        <Link href={'#'}>Overtime</Link>
                        <Link href={'#'}>Overtime Calculator</Link>
                        <Link href={'#'}>ROI Caluculator</Link>
                        <Link href={'#'}>Time Card Calculator</Link>


                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={'#'}>Terms</Link>
                        <Link href={'#'}>Privacy</Link>
                        <Link href={'#'}>Security</Link>

                    </Stack>
                </SimpleGrid>
            </Container>
            <Flex py={10} direction="column" align={"center"} >

                <Text pt={6} fontSize={'sm'} >
                    Copyright © 2022 TimeCamp.Inc
                </Text>
                <Text fontSize={'sm'}>we use cookies click here to learn more</Text>
            </Flex>
        </Box>
    );
}