import { Box, Typography } from "@mui/material"
import FilterBox from "./FilterBox"

const ProductSidebar = () => {
  return (
    <Box>
    <Box>
      <Typography variant="h4" color="">فلتره حسب السعر</Typography>
      <FilterBox />
    </Box>
    
    </Box>
  )
}

export default ProductSidebar