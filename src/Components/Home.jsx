import { Box, HStack, Img, Stack, VStack, Text, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export const Home = () => {
    return (
        <Box width={"100%"}
            border="2px solid brown"
            height={"100vh"}
            backgroundImage="https://wallpaperboat.com/wp-content/uploads/2019/12/dark-color-11.jpg">

            <SimpleGrid
                flexDirection="column-reverse"
                width={["100%", "80%", "90%"]}
                gap={50}
                columns={[1, 1, 2]}
                border={"1px solid white"}
                justifyContent={"space-around"}
                alignItems="center"
                padding={"20px"}
                margin={"auto"}
                marginTop="150px">
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
    )
}
