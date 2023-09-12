import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, useTheme } from "@mui/material";
import RatingBox from "../../components/Rating/RatingBox";
import AddToCartBox from "./../../components/addToCartBox/AddToCartBox";

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams();
  const theme = useTheme();

  const getProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${productId}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  const containerStyles = {
    py: { xs: "20px", sm: "30px" },
    display: "flex",
    alignItems: "center",
    gap: { xs: "25px", sm: "20px" },
    justifyContent: { xs: "center", sm: "space-between" },
    flexDirection: { xs: "column", sm: "row" }
  };

  const imageBoxStyles = {
    maxWidth: "fit-content",
    width: "50%",
    backgroundColor: "white",
    height: "auto",
    borderRadius: "10px",
    textAlign: "center",
    p: '5px'
  };

  const infoBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "max-content",
    textAlign: "center",
    mx: "auto"
  };

  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain"
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, title, rating, reviews, price } = product;
  
  



  return (
    <Box>
      <Container sx={containerStyles}>
        <Box sx={imageBoxStyles}>
          <img src={product?.image} style={imageStyles} alt={product?.title} />
        </Box>

        <Box sx={infoBoxStyles}>
          <Typography
            mb={{ xs: "7px", sm: "10px" }}
            variant="h4"
            fontWeight={600}
            color={theme.palette.primaryColor.main}
            fontSize={{ xs: "25px", sm: "30px", md: "35px" }}
          >
            {product?.title}
          </Typography>

          <RatingBox rating={product?.rating} reviews={product?.reviews} />

          <Typography py={{ xs: "4px", sm: "8px" }} variant="h5" color={theme.palette.errorColor.main}>
            ${product?.price}
          </Typography>

          <AddToCartBox />
        </Box>
      </Container>
    </Box>
  );
};

export default SingleProduct;
