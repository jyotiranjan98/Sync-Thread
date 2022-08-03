import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {

    const navigate = useNavigate()

    const handleBbsr = () => {
        navigate('/bhubaneswar')
    }
    const handlePune = () => {
        navigate('/pune')
    }
    const handleKolkata = () => {
        navigate('/kolkata')
    }
    const handleMumbai = () => {
        navigate('/mumbai')
    }
    const handleDelhi = () => {
        navigate('/delhi')
    }
    const handleBangalore = () => {
        navigate('/bangalore')
    }




  return (
    <>
   <Box>
    <Center flexWrap="wrap" justifyContent={"space-between"}>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handleBbsr}>Bhubaneswar</Box>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handlePune}>Pune</Box>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handleKolkata}>Kolkata</Box>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handleMumbai}>Mumbai</Box>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handleDelhi}>Delhi</Box>
    <Box width={"200px"} marginTop="20px" h="100px" border="1px solid white" onClick={handleBangalore}>Bangalore</Box>
    </Center>
   </Box>
   </>
  )
}
