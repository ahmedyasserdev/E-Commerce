/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/slices/cartSlice";

const CartItems = ({ item }) => {
    const { firstImage, image, quantity, price, title, discount } = item;
    const theme = useTheme();
    const dispatch = useDispatch();
    const calculatedPrice = price - (discount * price) / 100;

    return (
        <Box
            sx={{
                position: "relative",
                width: "max-content",
                textAlign: "center",
                mx: { xs: "auto", sm: "0px" }
            }}
        >
            <Box
                sx={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "white"
                }}
            >
                <img
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                    src={firstImage || image}
                    alt={title}
                />
            </Box>

            <Box p={"5px"} my={{ xs: "15px", sm: "10px" }}>
                <Typography
                    variant="h4"
                    color={theme.palette.secondaryColor.main}
                    fontSize={"20px"}
                >
                    {title}
                </Typography>

                <Box my={"10px"} color={"#000"}>
                    <Typography fontSize={"20px"} variant="h6" color="">
                        {" "}
                        الكميه :
                        <Typography
                            variant="span"
                            color={theme.palette.greyColor.main}
                            fontSize={"15px"}
                            fontWeight={600}
                        >
                            {" "}
                            {quantity}
                        </Typography>
                    </Typography>

                    <Typography fontSize={"20px"} variant="h6" color="">
                        {" "}
                        السعر :
                        <Typography
                            variant="span"
                            color={theme.palette.greyColor.main}
                            fontSize={"15px"}
                            fontWeight={600}
                        >
                            {" "}
                            {discount ? calculatedPrice : price}{" "}
                        </Typography>
                    </Typography>
                </Box>

                <Delete
                    onClick={() => dispatch(deleteFromCart(item))}
                    sx={{
                        fontSize: "27px",
                        cursor: "pointer",
                        position: { xs: "unset", sm: "absolute" },
                        bottom: "5px",
                        left: "20px",
                        fill: theme.palette.errorColor.main,
                        color: theme.palette.errorColor.main,
                        transition : "100ms transform ease",
                        "&:hover" : {
                            transform : "translateY(-3px) rotate(20deg) "
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default CartItems;
