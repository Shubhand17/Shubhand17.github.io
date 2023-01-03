import { Box, HStack, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
    return (
        <Box h="90vh"
            border="3px solid yellow"

        >

            <Text 
             style={{ textDecoration:"underline",textUnderlineOffset:"10px",textDecorationColor:"red" ,margin:"auto", fontSize: "45px", fontWeight: "700", justifyContent: "center" }}> <span style={{ color: "red" }}>Who</span> I am</Text>

            <Stack
                h="70vh"
                // border="2px solid"
                justifyContent="center"
            >
                <HStack justifyContent="space-evenly">
                    <div w="50%">
                        <img

                            src="./asset/about_portfolio.gif"
                            alt="about_gif" />

                    </div>
                    <Stack
                        w="50%"
                        border="1px solid red"
                        fontSize="20px"
                        fontWeight="600"
                        // alignItems="flex-start"
                        // justifyContent="flex-start"
                        textAlign="start"

                    >    <Text >Enthusiastic Full Stack Web Developer with a strong interest in creating web application.
                        Enjoys designing applications by keeping end users in mind.
                        Hands on experience of about 1800+ hours of coding at Masai School.
                        this area complements my studies, I am keen to gain more experience.
                        Therefore I'm looking for a company willing to offer me a placement among their developers.</Text>
                    </Stack>
                </HStack>

            </Stack>

        </Box>
    )
}
