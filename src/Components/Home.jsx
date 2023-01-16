import { Box, Img, Stack, VStack, Text, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export const Home = () => {
    return (
        <Box
            // flexWrap={"wrap"}

            // flexDir={["row-reverse" , "row"]}
            id='home'
            width={"100%"}
            border="5px solid green"
            height={"100vh"}
            backgroundImage="./asset/bg_img.jpg">

            <SimpleGrid


                width={["100%", "80%", "90%"]}
                gap={50}
                columns={[1, 1, 2]}
                border={"1px solid white"}
                justifyContent={"space-around"}
                alignItems="center"
                padding={"20px"}
                margin={"auto"}
                marginTop="160px">
                <VStack

                    border="1px solid white"
                    width={["100%", "100%", "100%"]}
                    justifyContent="center"
                    alignItems="flex-start"
                    padding="10px"
                    textColor="white">
                    <Text fontSize={['20px', '25px', '25px', '35px']} fontWeight={600}>Hi, I am</Text>
                    <Text fontSize={['30px', '35px', '36px', '50px']} fontWeight={600} >SHUBHAM ANAND</Text>
                    <Box color="#d70000" fontSize={['20px', '25px', '35px']} fontWeight="500">
                        <TypewriterComponent
                            options={{
                                strings: ['A Full Stack Web Developer.', 'A Mern Stack Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Box>
                    <br />
                    <Button
                        paddingX="22px"
                        bg='#d70000'>
                        RESUME
                    </Button>
                </VStack>
                <Stack width={["80%", "50%", "50%"]} margin={'auto'}>
                    <Img
                        border="5px solid red"
                        width={'400px'}
                        borderRadius="100%"
                        padding={"5px"}
                        background="rgba(80, 92, 80, 0.3)"
                        src="./asset/portfolio_profile.png"
                        alt="profile" />
                </Stack>
            </SimpleGrid>

        </Box >
        // <Flex border={"1px solid red"} flexWrap={"wrap"} justifyContent={"space-between"} flexDir={["column-reverse", "row"]}>
        //     <Box height={"250px"} width={"350px"} border={"1px solid black"}></Box>
        //     <Box height={"250px"} width={"350px"} border={"1px solid black"} borderRadius={"50%"}></Box>
        // </Flex>
    )
}
