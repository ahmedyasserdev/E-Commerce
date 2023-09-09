/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import RatingBox from "../Rating/RatingBox";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
    const theme = useTheme();
    const [slide, setSlide] = useState(0);

    const handleClick = (dir) => setSlide((prevSlide) => prevSlide + (dir === "left" ? -1 : 1));
    const isSlideDisabled = (dir) => slide === (dir === "right" ? 1 : -data.length);

    const IconButtonStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "absolute",
        margin: "auto",
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: theme.palette.infoColor.main,
        "&:hover": {
            backgroundColor: theme.palette.infoColor.main,
        },
    };

    return (
        <Box sx={{ position: "relative", height: "380px", display: "flex", padding: "20px 5px", borderRadius: "15px", margin: "10px 20px", overflow: "hidden" }}>
            <IconButton disabled={isSlideDisabled("left")} sx={{ ...IconButtonStyle, right: "10px" }} onClick={() => handleClick("left")}>
                <ChevronLeft sx={{ fontSize: { xs: "20px", sm: "30px !important" } }} />
            </IconButton>

            <Box sx={{ display: "flex", height: "100%", transition: "all 300ms ease", transform: `translateX(${slide * -250}px)` }}>
                {data.map(({ id, title, image, rating, reviews, price }) => (
                    <Link key={id} to={`/product/${id}`} >
                        <Box sx={{ backgroundColor: "white", width: "270px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "5px", margin: "0 5px", borderRadius: "12px" }}>
                            <img src={image} height="auto" width="70%" style={{ objectFit: "contain" }} alt={title} />
                            <Box>
                                <Typography variant="h5" fontSize={{ xs: "19px", sm: "22px" }} fontWeight={600} color={theme.palette.primaryColor.main}>{title}</Typography>
                                <RatingBox rating={rating} reviews={reviews} />
                                <Typography variant="h6" gutterBottom fontWeight={600} color={theme.palette.primaryColor.main} fontSize={{ xs: "15px", sm: "19px" }} sx={{ textAlign: "center" }}>${price}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>

            <IconButton disabled={isSlideDisabled("right")} sx={{ ...IconButtonStyle, left: "10px" }} onClick={() => handleClick("right")}>
                <ChevronRight sx={{ fontSize: { xs: "20px", sm: "30px !important" } }} />
            </IconButton>
        </Box>
    );
};

export default Slider;
