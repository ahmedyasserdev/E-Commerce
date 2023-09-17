/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { specialOffers } from "../../data/special-offers";
import { useState } from "react";
import AddToCartBox from "../../components/addToCartBox/addToCartBox";
import RatingBox from "../../components/Rating/RatingBox";


const ImageBox = ({ img, index, setImgIndex }) => (
  <img
    key={index}
    onClick={() => setImgIndex(index)}
    src={img}
    style={{
      objectFit: "contain",
      cursor: "pointer",
      maxWidth: "100%",
      height: "100%",
      border: `2px solid #efefef`,
    }}
  />
);

const SpecialOfferPage = () => {
  const { id } = useParams();
  const product = specialOffers.find((p) => p.id === +id);
  const { images, title, rating, reviews, price, discount  } = product;
  const [imgIndex, setImgIndex] = useState(0);
  const calculatedPrice = price - (discount * price) / 100;
  const theme = useTheme();


  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
          pb: { xs: "15px", sm: "20px" },
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            pt: { xs: "15px", sm: "30px" },
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              minHeight: "220px",
              maxHeight: "400px",
              marginInline: "auto",
              objectFit: "contain",
            }}
            src={images[imgIndex] }
            alt={title}
          />

          <Box
            sx={{
              width: "25%",
              display: "flex",
              gap: { xs: "10px", sm: "15px" },
              pb: { xs: "15px", sm: "20px" },
              mr: images.length > 2 ? "" : { xs: "40px", lg: "130px" },
            }}
          >
            {images.map((img, index) => (
              <ImageBox key={index} img={img} index={index} setImgIndex={setImgIndex} />
            ))}
          </Box>
        </Box>

        <Box sx={{ m: "50px", textAlign: "center" }}>
          <Typography
            variant="h3"
            color={theme.palette.primaryColor.main}
            mb={{ xs: "10px", sm: "15px" }}
            fontSize={{ xs: "33px", sm: "40px" }}
            fontWeight={600}
          >
            {title}
          </Typography>
          <RatingBox rating={rating} reviews={reviews} />

          <Box
            sx={{
              my: { xs: "10px", sm: "15px" },
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", sm: "15px" },
              justifyContent: "center",
            }}
          >
            <Typography fontSize={{ xs: "21px", sm: "25px" }} variant="b">
              ${calculatedPrice}
            </Typography>
            <Typography
              fontSize={{ xs: "18px", sm: "21px" }}
              sx={{ textDecoration: "line-through" }}
              variant="b"
              color={theme.palette.errorColor.main}
            >
              ${price}
            </Typography>
          </Box>

          <AddToCartBox product = {product}  />
        </Box>
      </Container>
    </Box>
  );
};

export default SpecialOfferPage;
