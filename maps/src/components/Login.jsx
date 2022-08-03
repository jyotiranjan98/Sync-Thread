import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async () => {
    axios.post("http://localhost:5000/login", user)
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.user)
      setLoginUser(res.data.user);
      let msg = res.data.message
      if(msg === "Login Successfull"){
        navigate("/");
      }else{
        navigate("/login");
      }
      
    });
  };

  return (
    <Box>
      <Box textAlign="left" marginLeft={"100px"}>
        
        <Box>
          <Text
            fontSize="30px">
            LOGIN
          </Text>
        </Box>
      </Box>
      <Box marginLeft="250px" w="500px">
        <Input
          type="text"
          borderBottom="1px solid gray"
          marginBottom="20px"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handlechange}
        />

        <Input
          type="Number"
          borderBottom="1px solid gray"
          marginBottom="20px"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handlechange}
        />
        <Flex gap="20px" justify="center" marginTop="20px">
          <Button
            borderRadius={"20px"}
            w="200px"
            backgroundColor="green"
            color="white"
            onClick={login}
          >
            Login
          </Button>
        </Flex>
        <Box marginTop="20px" marginBottom="100px">
          <Text fontSize="20px" marginTop="20px">
            New here ?
          </Text>
          <Button
            onClick={() => navigate("/register")}
            marginTop="20px"
            borderRadius={"20px"}
            w="200px"
            backgroundColor="red"
            color="white"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};