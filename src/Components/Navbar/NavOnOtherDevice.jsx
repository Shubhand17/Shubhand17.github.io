import { Box, Button, Flex, Hide } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
//import { Resume } from "../about/Resume";

export const NavOnOtherDevice = ({ activeNav, setActiveNav }) => {
  return (
    <Flex
      gap="30px"
      fontWeight="medium"
      fontSize={20}
      alignItems='center'
      color="#ffffff"
    >
      <Hide below="md">
        <Link
          style={activeNav === "#home" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"home"}
          spy={true} smooth={true}
          className={activeNav === "#home" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#home")}
        >
          Home
        </Link>
        <Link
          style={activeNav === "#about" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"about"}
          spy={true} smooth={true}
          className={activeNav === "#about" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#about")}
        >
          About
        </Link>
        <Link
          style={activeNav === "#project" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"project"}
          spy={true} smooth={true}
          className={activeNav === "#project" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#project")}
        >
          Projects
        </Link>
        <Link
          style={activeNav === "#tech" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"tech"}
          spy={true} smooth={true}
          className={activeNav === "#tech" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#tech")}
        >
          Tech Stacks
        </Link>
        <Link
          style={activeNav === "#skill" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"skill"}
          spy={true} smooth={true}
          className={activeNav === "#skill" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#skill")}
        >
          Skills
        </Link>
        <Link
          style={activeNav === "#contact" ? { color: "#d70000" } : { color: "#ffffff" }}
          activeClass={'active'}
          to={"contact"}
          spy={true} smooth={true}
          className={activeNav === "#contact" ? "active scrollLinkMobile" : "scrollLinkMobile"}
          onClick={() => setActiveNav("#contact")}
        >
          Contact
        </Link>
        <Box
          className='scrollLinkMobile'
        >
          <a href="./asset/Shubham-Anand-Resume.pdf" download target={'_blank'}>
            <Button colorScheme={'red'}>Resume</Button>
          </a>
        </Box>

      </Hide>
    </Flex>
  );
};
