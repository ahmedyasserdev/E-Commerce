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
      <Container sx = {{py  : { xs : "20px" , sm :   "30px"} ,display : "flex"  ,  flexDirection : {xs: "column" , md :"row"} ,justifyContent  :{xs: "center" , sm : "flex-start"  } , gap : {xs :"20px", md : "5px"  },    }}  >
        <Box sx=  {{width : {xs : "100%" , md  : "25%"  }}}  >
          <ProductSidebar />
        </Box>

        <Box sx=  {{width :  {xs : "100%" , md  : "75%"  }}} >
          <ProdcutList  products ={products} />
        </Box>

      </Container>

    </Box>
  )
}

export default Products