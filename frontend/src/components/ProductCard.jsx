import { useState, useRef } from 'react'
import { Box, Image, Heading, Text, HStack, IconButton } from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product'
import { toaster } from '../components/ui/toaster'
import { Dialog } from "@chakra-ui/react"
import { UpdDialComponent } from './UpdDialComponent'

const ProductCard = ({product}) => {
  const textColor = useColorModeValue('gray.600', 'gray.200')
  const bg = useColorModeValue('white', 'gray.800')

  const {deleteProduct} = useProductStore()

  const [isOpen, setIsOpen] = useState(false)

  

  const handleDeleteProduct = async(p_id) => {
    const {success, message} = await deleteProduct(p_id)
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
  }

  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition="all 0.3s"
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} w={"full"} height={48} fit={"cover"}/>
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>{product.name}</Heading>
            <Text fontSize='xl' fontWeight='bold' color={textColor}>${product.price}</Text>
            <HStack gap={2}>
              <Dialog.Root
                  key={ "center"}
                  placement={ "center"}
                  motionPreset="slide-in-bottom"
              >
                <Dialog.Trigger asChild>
                  <IconButton colorPalette={'blue'} onClick={() => setIsOpen(true)}> <FaEdit style={{ marginLeft: '4px', marginBottom: '4px'}} /></IconButton>
                </Dialog.Trigger>
                <UpdDialComponent product={product}/>
              </Dialog.Root>
                <IconButton colorPalette={'red'} onClick={()=>handleDeleteProduct(product._id)}> <MdDeleteForever/> </IconButton>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard