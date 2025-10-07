import { useState } from 'react'
import { Button, Box, Container, Heading, VStack, Input, Dialog} from '@chakra-ui/react'
import {useColorModeValue} from '../components/ui/color-mode'
import { toaster } from '../components/ui/toaster'
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
    const {success, message} = await createProduct(newProduct)
    if(!success){
      toaster.create({
        title: "Error",
        type: "error",
        description: message,
        duration: 1500
        })
      }
    else{
      toaster.create({
        title: "Success",
        type: "success",
        description: message,
        duration: 1500
        })
    }
    console.log("Success:", success, "Message:", message)
    setnewProduct(
      { name: "",
        price: "",
        image: ""
      }
    )
  }
  return (
    <Container maxW ={"800px"}>
      <VStack gap = {8}>
        <Heading as={"h1"} size={"5xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.801")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack gap={4}>
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