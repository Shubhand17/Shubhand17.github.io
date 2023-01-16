import { Link, Text } from "@chakra-ui/react";
import React from "react";

export const Logo = ({ activeNav, setActiveNav }) => {
  return (
    <Link
      href="#"
      // border={'1px solid red'}
      className={activeNav === "#home" ? "active" : ""}
      onClick={() => setActiveNav("#home")}
      _hover={{ textDecoration: "none" }}
    >
      <Text
        fontSize="30px"
        color={"white"}
        fontWeight="600"
      >
        <span style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>S</span>HUBHAM <span style={{ color: "red", fontSize: "30px" }}>A</span>NAND
      </Text>
    </Link>
  );
};
