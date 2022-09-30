import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Blog() {
    return (


        <Flex gap={"6"} direction={"column"} bg={"#F3F3F3"} p={["1", "1", "10", "24"]}
        >
            <Text fontWeight={"500"} color={"#1DA44C"} >BLOG</Text>
            <Flex justify={"space-between"} direction={["column", "column", "row", "row"]} >
                <Heading size={"2xl"}>Check the latest blog updates</Heading>
                <Button size={"lg"} bg={"#1DA44C"} color={"white"} borderRadius="full">Check all articles</Button>
            </Flex>
            <SimpleGrid columns={["1", "1", "2", "3"]} gap="7">
                <Flex gap={"4"} direction={"column"}>
                    <Image src="./Blogs/B1.jpeg" />
                    <Heading size={"md"}>13 Best Time Tracking Software for Architects</Heading>
                    <Text fontWeight={"500"} color={"#1DA44C"}>Read more</Text>
                </Flex>
                <Flex gap={"4"} direction={"column"}>
                    <Image src="./Blogs/B2.jpeg" />
                    <Heading size={"md"}>13 Best Time Tracking Software for Architects</Heading>
                    <Text fontWeight={"500"} color={"#1DA44C"}>Read more</Text>
                </Flex>
                <Flex gap={"4"} direction={"column"}>
                    <Image src="./Blogs/B3.jpeg" />
                    <Heading size={"md"}>13 Best Time Tracking Software for Architects</Heading>
                    <Text fontWeight={"500"} color={"#1DA44C"}>Read more</Text>
                </Flex>
            </SimpleGrid>
        </Flex>

    )
}

export default Blog