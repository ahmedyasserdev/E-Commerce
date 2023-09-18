/* eslint-disable react/prop-types */
import { Stack, Pagination , useTheme } from '@mui/material';
import { useState } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';

const ProductList = ({ products }) => {
    const theme = useTheme()
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage =8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Stack direction = {"column"} alignItems = {"center"} gap = {"20px"}  >
      <Stack direction="row" flexWrap="wrap" justifyContent={{ xs: "center", sm: "space-around" }} alignItems="center" gap={{ xs: "15px", sm: "10px" }}>
        <ProductItem products={currentProducts} />
      </Stack>
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color = {"grey"}
           sx = {{
            backgroundColor : theme.palette.primaryColor.main ,
            p : "8px 15px",
            borderRadius : "8px"
           }}
        />
    </Stack>
  );
};

export default ProductList;
