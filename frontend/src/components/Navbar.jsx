import { Button, Container, Flex, HStack, Text} from '@chakra-ui/react'
import { BiPlusCircle } from "react-icons/bi"
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useColorMode } from './ui/color-mode'
import { LuSun } from 'react-icons/lu'
import { IoMoon } from 'react-icons/io5'
const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
      h={16} 
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={
        {
          base: 'column',
          sm: 'row'
        }}
      > 
      <ChakraLink as={ReactRouterLink} to={"/"} _hover={{ textDecoration: "none" }}
  _focus={{ boxShadow: "none", outline: "none" }}>
          <Text
            fontSize = {{base: "22", sm: "28"}}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip='text'
            fontWeight='bold'
          >
            Product Store 🛒
          </Text>
        </ChakraLink>
        <HStack spacing = {2} alignItems={"center"}>
          <ChakraLink as={ReactRouterLink} to={"/create"} _hover={{ textDecoration: "none" }}
  _focus={{ boxShadow: "none", outline: "none" }}>
            <Button fontSize={20}>
              <BiPlusCircle />
            </Button>
          </ChakraLink>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoMoon/> : <LuSun size={20}/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar