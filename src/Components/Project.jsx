import { Box, HStack, Img, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../styles/Project.module.css"
export const Project = () => {
    return (
        <Box
            id='project'
            paddingY="70px"
            h='fit-content'
            border="3px solid yellow"
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
            > Some <span style={{ color: "red" }}>things</span> I've Built
            </Text>

            <SimpleGrid
                columns={[1, 3, 3]}
                rowGap={["2px", "5px", "10px"]}
                border="2px solid red"
                justifyContent="center"
                alignContent="center"
                spacing={["60px", "100px"]}
                paddingX={["40px", "80px", "160px"]}
                marginTop={["16px", "22px", "28px"]}
            >
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/boat1.png'
                        alt="boat_pic"
                        // border='2px solid brown'
                        width="80%"
                        h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                        objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >Clone of boat-lifestyle.com</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>BoAt is the world's 5th largest wearable brand along with India's No. 1 Earwear brand.</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>: HTML5 | CSS3 | Javascript</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>A collaborative project, built in 5 days by a team of 6 members.</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/hariohmtripathi/Boat-Lifestyle' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://friendly-cajeta-33faab.netlify.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/netmeds1.png'
                        alt="boat_pic"
                        // border='2px solid brown'
                        width="80%"
                        // h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                    // objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >Clone of netmeds.com</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>Netmeds.com is one of India's most trusted 24X7 pharmacies app.</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>: HTML | CSS | React | Chakra-Ui | React Slick</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>It is an Individual Project executed in 5 days</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/Shubhand17/awesome-cannon-1526' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://awesome-cannon-1526.vercel.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/beauty.png'
                        alt="beauty"
                        // border='2px solid brown'
                        width="80%"
                        h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                        objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >Beauty Bebo clone</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>Beauty Bebo is India’s fastest growing online retail store for the day to day.</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>:HTML | CSS | React | Chakra-Ui | React Slick</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>A collaborative project, built in 5 days by a team of 6 members.</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/lokesh-dc/Beauty-Bebo-Clone' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://bright-puppy-c195ee.netlify.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/new_olx.png'
                        alt="boat_pic"
                        // border='2px solid brown'
                        width="80%"
                        h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                    // objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >Clone of olx.com</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>OLX marketplace is a platform for buying and selling services and goods </Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>: HTML5 | CSS3 | Javascript</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>A collaborative project, built in 5 days by a team of 6 members.</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/arnab9593/likeable-air-3346/tree/master/final_release' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://charming-concha-ababfd.netlify.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/new_beautystore1.png'
                        alt="boat_pic"
                        // border='2px solid brown'
                        width="80%"
                        h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                        objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >beautyStore.com</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>Beauty Store is India’s fastest-growing online retail store of beauty products.</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>: HTML5 | React | React-Slick | Chakra-Ui</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>It is an Individual Project executed in 5 days.</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/Shubhand17/average-boat-8567' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://beautystore.vercel.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>
                <Box
                    className={style.hvr}
                    h="35 vh"
                    // border="2px solid yellow"
                    marginTop="50px"
                    borderRadius="8px"
                    paddingY="20px"
                    paddingX="10px"
                    bg="#f8f8f8"
                >

                    <Img
                        src='./asset/starwars.png'
                        alt="boat_pic"
                        // border='2px solid brown'
                        width="80%"
                        h={['200px', '230px', '250px']}
                        borderRadius="8px"
                        margin="auto"
                        marginBottom="8px"
                        objectFit="cover"
                    />


                    <Text marginBottom={['10px', '12px', '14px']} fontWeight={['500', '600', '700']} fontSize={['12px', '14px', '18px']} >StarWar Characters</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['300', '400', '500']}>In this app, you can Search Star War Character and read the description of the character.</Text>

                    <Text marginBottom={['10px', '12px', '14px']} width="80%" margin="auto" textAlign="start" fontSize={['12px', '14px', '16px']} fontWeight={['400', '500', '600']} > <span style={{ color: "red", fontWeight: "bold" }}>Tech Stack </span>: HTML5 | CSS3 | Javascript</Text>

                    <Text marginBottom={['10px', '12px', '16px']} width="80%" margin="auto" textAlign="start" fontSize={['10px', '10px', '14px']}>Mini Project made during the assignment of Debouncing.</Text>

                    <HStack
                        width="80%"

                        justifyContent="space-between"
                        // border="2px solid red"
                        margin="auto"
                        marginTop="10px"

                    >
                        <Link width="8%" href='https://github.com/masai-course/Shubham_fw19_1103/commit/d128e78cbfef2f401aca54fde66ba9d5bb5ceaf2#diff-bb32cfc96331bada10498b3194b064b33c1f8b0dcdb40085c55afb54156cd414' isExternal>
                            <Img
                                className={style.logo}

                                src="./asset/github_black.png"
                                // onMouseOut={e => (e.currentTarget.src = "./asset/github_red.png")}
                                alt="github" />
                        </Link>

                        <Link width="8%" href='https://starwars-tawny.vercel.app/' isExternal>
                            <Img
                                className={style.logo}
                                src="./asset/link_black.png"
                                alt="logo" />
                        </Link>
                    </HStack>
                </Box>


            </SimpleGrid >

        </Box >
    )
}
