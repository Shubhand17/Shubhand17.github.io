import { Box, color, HStack, Img, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "../styles/Contact.module.css"

export const Contacts = () => {
    return (
        <Box
        paddingY="70px"
        height="fit-content"
            border="3px solid yellow"
            bg="#f8f8f8"
            id='contact'
            backgroundSize="cover"
        >

            <Text
                fontSize={['25px', '35px', '45px']}
                style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "10px",
                    textDecorationColor: "red",
                    margin: "auto",
                    fontWeight: "700",
                    justifyContent: "center",
                    color: "#ffff"
                }}
            > <span style={{ color: "black" }}>Take a</span>
                <span style={{ color: "red" }}> Coffee</span>
                <span style={{ color: "black" }}> And</span>
                <span style={{ color: "red" }}> chat</span>
                <span style={{ color: "black" }}> with me</span>
            </Text>

            <SimpleGrid

                width={["100%", "80%", "90%"]}

                border={"3px solid brown"}
                justifyContent={"space-around"}
                alignItems="center"
                padding={"20px"}
                margin={"auto"}
                marginTop="50px"
            >
                <HStack
                    justifyContent="space-evenly">
                    <Stack
                        width={["10%", "50%", "50%"]}
                        justifyContent="space-evenly"
                        margin="auto"
                        textAlign="center"
                        // justifyContent="space-around"
                        marginTop={["20px", "30px", "50px"]}

                    >
                        <HStack   >
                            <Link width="8%" href='iesshubham2020@gmail.com' isExternal>
                                <Img

                                    className={style.hvr}
                                    src='./asset/gmail.png'
                                    alt='gmail'
                                />
                            </Link>
                            <Text fontWeight="600">Gmail</Text>
                        </HStack>
                        <br />
                        <HStack>
                            <Link width="8%" href='https://www.linkedin.com/in/shubhanand007/' isExternal>
                                <Img
                                    className={style.hvr}

                                    src='./asset/linkedin-logo.png'
                                    alt='linkiden'
                                />
                            </Link>
                            <Text fontWeight="600">LinkedIn</Text>

                        </HStack>
                        <br />

                        <HStack>
                            <Link width="8%" href='https://github.com/Shubhand17' isExternal>
                                <Img
                                    className={style.hvr}

                                    src='./asset/github_black.png'
                                    alt='github'
                                />
                            </Link>
                            <Text fontWeight="600">GitHub</Text>
                        </HStack>
                        <br />

                        <HStack>
                            <Img
                                className={style.hvr}
                                width="7%"
                                src='./asset/call.png'
                                alt='call'
                            />
                            <Text fontWeight="600">+91 8896431631</Text>
                        </HStack>
                    </Stack>




                    <Stack
                        width={["80%", "50%", "40%"]}
                        border="1px solid red"
                        fontSize={['8px', '12px', '16px']}
                        fontWeight="500"
                        textAlign="start">
                        <Img
                            src='./asset/contacts.png'
                        />
                    </Stack>
                </HStack>
            </SimpleGrid >
            <Text
                marginTop={["20px", "35px", "40px"]}
                color="gray"
                fontSize={["12px", "10px", "14px"]}
            >Designed and Developed by Shubham Anand,© Copyright 2023. All rights reserved</Text>
        </Box >
    )
}
