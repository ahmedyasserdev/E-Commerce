import { useParams } from "react-router-dom";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { products } from "../../data/products";
import RatingBox from "../../components/Rating/RatingBox";
import AddToCartBox from "./../../components/addToCartBox/AddToCartBox";
const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === +id);
  const { image, title, rating, reviews, price } = product;
  const theme = useTheme();
  return (
    <Box>
      <Container
        sx={{
          py: { xs: "20px", sm: "30px" },
          display: "flex",
          alignItems: "center",
          gap: { xs: "25px", sm: "20px" },
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection : {xs : "column" , sm  : "row" }

        }}
      >
        <Box
          sx={{
            maxWidth: "fit-content",
            width : "50%" ,
            backgroundColor: "white",
            height: "auto",
            borderRadius: "10px",
            textAlign: "center",
            p : '5px'
          }}
        >
          <img
            src={image}

            style={{
              maxWidth: "100%",
              height: "auto", objectFit: "contain"
            }}
          />
        </Box>

        <Box sx={{  display : "flex" , flexDirection : "column" , alignItems : "center"  , width: "max-content", textAlign: "center" , mx : "auto"  }}>
          <Typography
            mb={{ xs: "7px", sm: "10px" }}
            variant="h4"
            fontWeight={600}
            color={theme.palette.primaryColor.main}
            fontSize={{ xs: "25px", sm: "30px" , md : "35px" }}
          >
            {title}
          </Typography>
          <RatingBox rating={rating} reviews={reviews} />
          <Typography py={{ xs: "4px", sm: "8px" }} variant="h5"
            color={theme.palette.errorColor.main}
          >
            ${price}
          </Typography>

          <AddToCartBox />
        </Box>
      </Container>
    </Box>
  );
};

export default SingleProduct;
