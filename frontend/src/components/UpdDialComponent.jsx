import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  VStack,
} from "@chakra-ui/react"
import { useState } from 'react'
import { useProductStore } from '../store/product'
export const UpdDialComponent = ({product}) => {
const {updateProduct} = useProductStore()
  const handleUpdateProduct = async(p_id) => {
    await updateProduct(p_id, updatedProduct)
  }
  const [updatedProduct, setUpdatedProduct] = useState(product)
  return (
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Update product data</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4}>
                <Input type="text" placeholder="Product Name" value = {updatedProduct.name} 
                onChange={(e)=>{setUpdatedProduct({ ...updatedProduct, name: e.target.value })}}/>
                <Input type="number" placeholder="Price" value = {updatedProduct.price}
                onChange={(e)=>{setUpdatedProduct({ ...updatedProduct, price: e.target.value })}}/>
                <Input type="text" placeholder="Image URL" value = {updatedProduct.image} 
                onChange={(e)=>{setUpdatedProduct({ ...updatedProduct, image: e.target.value })}}/>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button onClick={() => handleUpdateProduct(product._id)}>Save</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
  )
}