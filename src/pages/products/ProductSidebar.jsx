import { Box, Typography , useTheme} from "@mui/material"
import FilterBox from "./FilterBox"
import SortBox from "./SortBox"

const ProductSidebar = () => {
  const theme = useTheme()
  const CustomTypography = ({ text }) => {

    return (
      <Typography variant="h4" fontSize ={{xs :"22px" , sm :"30px" }} fontWeight = {800}   color={theme.palette.primaryColor.main}>
        {text}
      </Typography>
    );
  };
  


  return (
    <Box sx ={{border: `2px solid rgba(0 , 0 , 0 , .1)` , p : "12px"  , borderRadius : "8px"  , display : {xs :"flex" , md : "block"} , 
  
    justifyContent : "space-around" ,
    alignItems : "center",
  }} >
    <Box>
      <CustomTypography text = {"فلتره حسب السلعه"} />
      <FilterBox />
    </Box>
    
    <Box mt = {{xs: "0" , md : "25px" }} >
    <CustomTypography text = {"ترتيب حسب السعر"} />

    <SortBox/>
  </Box>
  


    </Box>
  )
}

export default ProductSidebar

  


