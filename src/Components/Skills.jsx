import { Box, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../styles/Skills.module.css"

export const Skills = () => {

    const Images = [
        {
            image: ('./asset/collabrative.png'),
            alt: "Collabrative"
        },
        {
            image: ('./asset/creativity.png'),
            alt: "Creativity"
        },
        {
            image: ('./asset/problemsolving.png'),
            alt: "Problem Solving"
        },
        {
            image: ('./asset/time.png'),
            alt: "Time Management"
        },

    ]
    const Image = [
        {
            image: ('./asset/frontend.jpg'),
            alt: "Frontend"
        },
        {
            image: ('./asset/backend.png'),
            alt: "Backend"
        },
        {
            image: ('./asset/DSA.png'),
            alt: "DSA"
        },
        {
            image: ('./asset/projectManage.png'),
            alt: "Project Management"
        },


    ]
    return (
        <Box
            id='skill'
            paddingY="70px"
            height="fit-content"
            // border="5px solid yellow"
            bg="#000000"
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
            > <span style={{ color: " #FFFFFF" }}>My</span>  <span style={{ color: "red" }}> Skills</span>
            </Text>

            <Stack

                width="64%"
                margin="auto"
                marginTop="30px"
                border="2px solid green"
            >
                <Text
                    fontSize={['20px', '30px', '35px']}
                    style={{
                        textDecoration: "underline",
                        textUnderlineOffset: "10px",
                        textDecorationColor: "red",

                        fontWeight: "600",
                        justifyContent: "center",
                        color: "#FFFFFF",
                    }}

                    alignSelf="start"
                >
                    Soft Skills
                </Text>

            </Stack>
            <Box
                width="64%"
                margin="auto"

                display="flex"
                justifyContent="space-between"
                gap="50px"
                flexWrap="wrap"

                marginTop="16px"
                border="4px solid red"
            >

                {Images.map((e) => {
                    return <Box className={style.hvr}
                        // border="2px solid"
                        width="200px"
                        borderRadius="10px"
                        padding="16px"

                        bg="#f8f8f8"
                    // color="white"

                    >
                        <Img padding={"5"} src={e.image} alt={e.alt} />
                        <Text className={style.hvr} marginTop="2px" textAlign={"center"} fontWeight="bold">{e.alt}</Text>
                    </Box>
                })}

            </Box>

            <Stack

                width="64%"
                margin="auto"
                marginTop="30px"
            // border="2px solid green"
            >
                <Text
                    fontSize={['20px', '30px', '35px']}
                    style={{
                        textDecoration: "underline",
                        textUnderlineOffset: "10px",
                        textDecorationColor: "red",
                        color: "#FFFFFF",
                        fontWeight: "600",
                        justifyContent: "center",

                    }}

                    alignSelf="start"
                >
                    Tech Skills
                </Text>

            </Stack>
            <Box
                width="64%"
                margin="auto"

                display="flex"
                justifyContent="space-between"
                gap="50px"
                flexWrap="wrap"

                marginTop="16px"

            >
                {Image.map((e) => {
                    return <Box className={style.hvr}

                        width="200px"
                        borderRadius="10px"
                        padding="16px"
                        bg="#f8f8f8"
                    >
                        <Img padding={"5"} src={e.image} alt={e.alt} borderRadius="8px" />
                        <Text className={style.hvr} marginTop="2px" textAlign={"center"} fontWeight="bold">{e.alt}</Text>
                    </Box>
                })}

            </Box>

        </Box>
    )
}
