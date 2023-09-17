import { Box, Container } from "@mui/material"
import ProductSidebar from "./ProductSidebar";
import ProdcutList from "./ProdcutList";
import { useEffect } from 'react'
import { selectProducts, fetchProducts , isLoading } from '../../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../../components/Loader/Loader";
const Products = () => {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch  ()
  const loading = useSelector(isLoading)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (loading) {
    return (
       <Loader />
       
       )
  }
  

  return (
    <Box>
      <Container sx = {{py  : { xs : "20px" , sm :   "30px"} ,display : "flex"  , justifyContent  :"flex-start"   }}  >
        <Box sx=  {{width : "25%"}}  >
          <ProductSidebar />
        </Box>

        <Box sx=  {{width : "75%"}} >
          <ProdcutList  products ={products} />
        </Box>

      </Container>

    </Box>
  )
}

export default Products