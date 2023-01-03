import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box w={"100%"} h="10%" border={"1px solid red"} position="fixed" >
      <HStack
        justifyContent={"space-around"} alignContent="center"
        fontWeight={"bold"}
        paddingY="16px"
        backgroundImage="https://wallpaperboat.com/wp-content/uploads/2019/12/dark-color-11.jpg"
        textColor="white"
      >
        <Text fontSize="30px" color={"white"} fontFamily="sans-serif"> <span style={{ color: "red" }}>S</span>HUBHAM <span style={{ color: "red" }}>A</span>NAND</Text>

        <HStack w="60%" justifyContent="space-evenly" >
          <p>Home</p>
          <p>About</p>
          <p>Tech-Skills</p>
          <p>Projects</p>
          <p>Contacts</p>
          <p>Resume</p>
        </HStack>


      </HStack>
    </Box>
  )
}
