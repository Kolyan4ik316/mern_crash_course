import React, { useEffect } from 'react'
import { Button, Container, Heading, VStack, Text, SimpleGrid} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore()
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  console.log("products" , products)
  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8} align="stretch">
        <Text
            fontSize = {{base: "22", sm: "28"}}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip='text'
            fontWeight='bold'
          >
            Current Products
          </Text>
          <SimpleGrid columns={{
            base:1,
            md: 2,
            lg: 3}}
            gap={10}
            width={"full"}
            >
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
          </SimpleGrid>
          {products.length === 0 && (<Text
            fontSize = 'xl'
            textAlign={"center"}
            color={"gray.500"}
            fontWeight='bold'
          >
            No products found. {" "}
            <ChakraLink as={ReactRouterLink} to={"/create"} _hover={{ textDecoration: "underline" }}
  _focus={{ boxShadow: "none", outline: "none" }}>
              <Text as={"span"}
            fontSize = 'xl'
            textAlign={"center"}
            color={"blue.500"}
            fontWeight='bold'
            >
                Add a new product?
              </Text>
            </ChakraLink>
          </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage