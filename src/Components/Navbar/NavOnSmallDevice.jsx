import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import "./Navbar.css"
//import { Resume } from "../about/Resume";

export const NavOnSmallDevice = ({ activeNav, setActiveNav }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clickHandler = (active) => {
    setActiveNav(active);
    onClose();
  };
  return (
    <Show below="md">
      <Icon boxSize="2rem" color="#ffffff" as={FiMenu} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#d70000" border="3px solid #d70000" />
          <DrawerBody
            fontWeight="medium"
            fontSize={20}
            color="#ffffff"
            backgroundImage="https://wallpaperboat.com/wp-content/uploads/2019/12/dark-color-11.jpg">
            <Link
              style={activeNav === "#home" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"home"}
              spy={true} smooth={true}
              className={activeNav === "#home" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#home")}
            >
              Home
            </Link>
            <Link
              style={activeNav === "#about" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"about"}
              spy={true} smooth={true}
              className={activeNav === "#about" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#about")}
            >
              About
            </Link>
            <Link
              style={activeNav === "#project" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"project"}
              spy={true} smooth={true}
              className={activeNav === "#project" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#project")}
            >
              Projects
            </Link>
            <Link
              style={activeNav === "#tech" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"tech"}
              spy={true} smooth={true}
              className={activeNav === "#tech" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#tech")}>
              Tech Stacks
            </Link>
            <Link
              style={activeNav === "#skill" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"skill"}
              spy={true} smooth={true}
              className={activeNav === "#skill" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#skill")}
            >
              Skills
            </Link>
            <Link
              style={activeNav === "#contact" ? { color: "#d70000" } : { color: "#ffffff" }}
              activeClass={'active'}
              to={"contact"}
              spy={true} smooth={true}
              className={activeNav === "#contact" ? "active scrollLinkMobile" : "scrollLinkMobile"}
              onClick={() => clickHandler("#contact")}
            >
              Contact
            </Link>
            <Box
              className='scrollLink'
            >
              <a href="./asset/Shubham-Anand-Resume.pdf" download target={'_blank'}>
                <Button colorScheme={'red'}>Resume</Button>
              </a>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show >
  );
};
