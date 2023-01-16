import { Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

// https://github-readme-streak-stats.herokuapp.com/?user=Shubhand17&theme=tokyonight
export const About = () => {
    return (
        <Box
            id='about'
            paddingY="90px"
            h="fit-content"
            // border="3px solid yellow"
            bg="#f8f8f8">
            <Text
                fontSize={['25px', '35px', '45px']}
                style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "red",
                    margin: "auto",
                    fontWeight: "700",
                    justifyContent: "center"
                }}
            > <span style={{ color: "red" }}>Who</span> I am
            </Text>

            <SimpleGrid

                width={["100%", "90%", "80%"]}
                columns={[1, 1, 2, 2]}
                // border={"3px solid brown"}
                justifyContent={"center"}
                alignItems="center"
                gap={'20px'}
                padding='20px'
                margin={"auto"}
                paddingY="70px"
            >

                <Stack
                    width={["100%"]}
                    margin={"auto"}
                // border={"3px solid brown"}
                >
                    <img
                        width={"80%"}
                        src="./asset/computer.png"
                        alt="about" />

                </Stack>
                <Stack
                    margin={"auto"}
                    // border={"3px solid brown"}
                    width={["90%", "80%", "80%"]}
                    // border="1px solid red"
                    fontSize={['14px', '16px', '18px']}
                    fontWeight="400"
                    fontStyle="oblique"
                    color="#000000"
                    textAlign="start">

                    <Text>My name is Shubham Anand.</Text>
                    <Text >
                        I am an Enthusiastic Full Stack Web Developer with a strong interest in creating web application.
                        Enjoys designing applications by keeping end users in mind.
                    </Text>
                    <Text>Hands on experience of about 1800+ hours of coding at Masai School.
                    </Text>
                    <Text>
                        This area complements my studies, I am keen to gain more experience.
                        Therefore I'm looking for a company willing to offer me a placement among their developers.
                    </Text>
                </Stack>
            </SimpleGrid>
        </Box >
    )
}
