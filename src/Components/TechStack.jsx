import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../styles/TechStack.module.css"

export const TechStack = () => {

    const Images = [
        {
            image: ('./asset/html.png'),
            alt: "HTML"
        },
        {
            image: ('./asset/css3.png'),
            alt: "CSS"
        },
        {
            image: ('./asset/javascript.png'),
            alt: "Javascript"
        },
        {
            image: ('./asset/physics.png'),
            alt: "React"
        },
        {
            image: ('./asset/redux.png'),
            alt: "Redux"
        },
        {
            image: ('./asset/node-js.png'),
            alt: "Nodejs"
        },
        {
            image: ('./asset/express.png'),
            alt: "Expressjs"
        },
        {
            image: ('./asset/mongodb.png'),
            alt: "Mongodb"
        },
        {
            image: ('./asset/typescript.png'),
            alt: "Typescript"
        }
    ]
    return (
        <Box
            id='tech'
            paddingY="70px"
            height="fit-content"
            border="2px solid yellow"
            bg="#f8f8f8"
            zIndex={10}
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
            > <span style={{ color: "#000000" }}>Tech</span>  <span style={{ color: "red" }}> Stack</span>
            </Text>

            <Box
                width="64%"
                margin="auto"
                padding="50px"
                display="flex"
                justifyContent="center"
                gap="50px"
                flexWrap="wrap"
                marginY="30px"
                border="2px solid red"
            >
                {Images.map((e) => {
                    return <Box className={style.hvr}
                        border="2px solid"
                        width="130px"
                        borderRadius="10px"
                        padding="18px"

                        bg="#222121"
                        color="white"

                    >
                        <Img src={e.image} alt={e.alt} borderRadius="8px" />
                        <Text className={style.hvr} marginTop="6px" textAlign={"center"} fontWeight="bold">{e.alt}</Text>
                    </Box>
                })}

            </Box>

        </Box>
    )
}
