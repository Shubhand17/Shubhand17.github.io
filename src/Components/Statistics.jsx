import { Box, Center, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

export const Statistics = () => {
  return (
    <Box
      paddingY={'70px'}
      height="fit-content"
      border="3px solid yellow"
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
      > <span style={{ color: "red" }}>Github</span> Activity
      </Text>
      <br />
      <GitHubCalendar style={{ margin: "auto", width: "80%" }} color={"green"} username="Shubhand17"
        hideColorLegend showWeekdayLabels />
      <Box margin={"auto"} width={"90%"} >
        <SimpleGrid columns={[1, 1, 1, 2]} width={["100%", "80%", "60%"]} margin={"auto"} padding={"20px"} justifyContent={"center"} alignItems={"center"} >
          <Img src="https://github-readme-stats.vercel.app/api?username=Shubhand17&show_icons=true&locale=en&theme=tokyonight" alt="Shubhand17" />
          <Img src="https://github-readme-streak-stats.herokuapp.com/?user=Shubhand17&theme=tokyonight" alt="Shubhand17" />
        </SimpleGrid>
        <Flex width={["70%", "70%", "60%", "20%"]} margin={"auto"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} alignSelf={"center"}>
          <Center>
            <Img margin={'auto'} src="https://github-readme-stats.vercel.app/api/top-langs?username=Shubhand17&show_icons=true&locale=en&theme=tokyonight" alt="Shubhand17" />
          </Center>
        </Flex>
      </Box>







    </Box >
  )
}



