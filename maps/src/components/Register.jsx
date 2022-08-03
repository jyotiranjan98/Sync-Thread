import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { name, email, mobile, password } = user;
    if (name && email && mobile && password) {
      axios.post("http://localhost:5000/register", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/login")
      });
    } else {
      alert("Fill form correctly");
    }
  };

  return (
    <Box>
      <Box textAlign="left" marginLeft={"100px"}>
        
        <Box>
          <Text
            fontSize="40px">
            REGISTER
          </Text>
        </Box>
      </Box>
      <Box marginLeft="250px" w="500px">
        <Input
          type="text"
          borderBottom="1px solid gray"
          marginBottom="20px"
          placeholder="Name"
          marginTop="20px"
          name="name"
          value={user.name}
          onChange={handlechange}
        />
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
          placeholder="Phone Number"
          name="mobile"
          value={user.mobile}
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
            onClick={register}
          >
            Register
          </Button>
        </Flex>
        <Box marginTop="20px" marginBottom="100px">
          <Text fontSize="20px" marginTop="20px">
            Already a member ?
          </Text>
          <Button
            marginTop="20px"
            borderRadius={"20px"}
            w="200px"
            backgroundColor="red"
            color="white"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};