import React, { useState } from 'react'
import { Box, Container, Heading, VStack} from '@chakra-ui/react'
import {useColorModeValue } from '../components/ui/color-mode'
// const [newProduct, setnewProduct]= useState({
//     name: "",
//     price: "",
//     image: ""
// })
const CreatePage = () => {
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing = {8} size={"2xl"} textAlign={"center"} mb={8}>
        <Heading as={"h1"}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
        >
        
        <VStack spacing={4}>
          <Input placeholder=""/>
          
        </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage