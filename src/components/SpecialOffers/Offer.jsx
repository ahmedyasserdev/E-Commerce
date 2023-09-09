/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import RatingBox from "../Rating/RatingBox";
import { Link } from "react-router-dom";

const Offer = ({ offer }) => {
  const theme = useTheme();
  const {
    title,
    price,
    rating,
    reviews,
    firstImage,
    secondImage,
    discount,
    id,
  } = offer;
  const [imgsSrc, setImgSrc] = useState(firstImage);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "48%", md: "23%" },
        position: "relative",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
      elevation={6}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={imgsSrc}
          alt={title}
          onMouseEnter={() => setImgSrc(secondImage)}
          onMouseLeave={() => setImgSrc(firstImage)}
          sx={{ objectFit: "contain", mt: { xs: "10px", sm: "15px" } }}
        />
        <CardContent sx={{ color: theme.palette.primaryColor.main }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <RatingBox reviews={reviews} rating={rating} />
          <PriceBox price={price} theme={theme} />
          <DiscountBox discount={discount} theme={theme} />
          <FinalPriceBox price={price} discount={discount} theme={theme} />
          <MoreInfo theme={theme} id={id} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const PriceBox = ({ price, theme }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pt: "10px",
    }}
  >
    <Typography
      variant="span"
      sx={{ fontSize: { xs: "15px", sm: "19px" }, fontWeight: "600" }}
    >
      السعر
    </Typography>
    <Typography
      variant="b"
      sx={{
        textDecoration: "line-through",
        textDecorationColor: theme.palette.errorColor.dark,
        textDecorationThickness: "2px",
      }}
    >
      ${price}
    </Typography>
  </Box>
);

const DiscountBox = ({ discount, theme }) => (
  <Box
    sx={{
      position: "absolute",
      left: "5px",
      top: "5px",
      backgroundColor: theme.palette.infoColor.main,
      color: "white",
      borderRadius: "50px",
      p: "0 12px",
    }}
  >
    <Typography variant="b" sx={{ fontSize: { xs: "16px", sm: "19px" } }}>
      خصم {discount}%
    </Typography>
  </Box>
);

const FinalPriceBox = ({ price, discount, theme }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "10px",
    }}
  >
    <Typography
      variant="span"
      sx={{
        fontSize: { xs: "15px", sm: "17px", md: "19px" },
        fontWeight: "600",
      }}
    >
      بعد الخصم
    </Typography>
    <Typography
      variant="b"
      sx={{
        color: theme.palette.successColor.main,
        fontSize: { xs: "18px", sm: "20px" },
      }}
    >
      ${price - (discount * price) / 100}
    </Typography>
  </Box>
);

const MoreInfo = ({ theme, id }) => (
  <Link to={`/special-offer/${id}`}>
    <Typography
      variant="h5"
      sx={{
        fontSize: { xs: "18px", sm: "25px" },
        fontWeight: "500",
        cursor: "pointer",
        backgroundColor: theme.palette.primaryColor.main,
        color: "white",
        textAlign: "center",
        my: "5px",
        p: "8px 15px",
        borderRadius: "3px 15px",
        transition: "150ms ease-in-out",
        "&:hover": { borderRadius: "15px 3px" },
      }}
    >
      شاهد المزيد...
    </Typography>
  </Link>
);

export default Offer;
