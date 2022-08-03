import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const Navbar = () => {
  
  
  return (
    <>
      <Box border="1px solid black" w="100%" h='50px' backgroundColor="teal" justifyContent="space-between">
            <Flex>
            <Flex marginLeft="10px">
              <Link to={"/"}>
                <Text fontWeight={"bold"} marginTop="11px">
                  Dashboard
                </Text>
              </Link>
            </Flex>
            <Flex marginLeft="60%">
              <Link to={"/login"}>
                <Text fontWeight={"bold"} marginTop="11px">
                  Login
                </Text>
              </Link>
            </Flex>
            <Flex marginLeft="20px">
              <Link to={"/register"}>
                <Text fontWeight={"bold"} marginTop="11px">
                  Register
                </Text>
              </Link>
            </Flex>
            </Flex>
      </Box>
    </>
  );
};