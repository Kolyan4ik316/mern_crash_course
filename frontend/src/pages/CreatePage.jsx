import { useState } from 'react'
import { Button, Box, Container, Heading, VStack, Input} from '@chakra-ui/react'
import {useColorModeValue } from '../components/ui/color-mode'
import { useProductStore } from '../store/product'

const CreatePage = () => {
  const [newProduct, setnewProduct]= useState({
    name: "",
    price: "",
    image: ""
  })
  const {createProduct} = useProductStore()
  const handleAddProduct = async()=>
  {
    const {succsess, message} = await createProduct(newProduct)
    console.log("Succsess:", succsess, "Message:", message)
  }
  return (
    <Container maxW ={"800px"}>
      <VStack spacing = {8}>
        <Heading as={"h1"} size={"5xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.801")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input placeholder="Product Name"
              name="name"
              value ={ newProduct.name }
              onChange={(e)=>setnewProduct({... newProduct, name: e.target.value})}
            />
            <Input placeholder="Price"
              type='number'
              name="price"
              value ={ newProduct.price }
              onChange={(e)=>setnewProduct({... newProduct, price: e.target.value})}
            />
            <Input placeholder="Image URL"
              name="image"
              value ={ newProduct.image }
              onChange={(e)=>setnewProduct({... newProduct, image: e.target.value})}
            />
            <Button colorPalette='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
        </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage