import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { cartItems, cartItemsNumber } from "../../redux/slices/cartSlice";
import EmptyCartBtn from "./EmptyCartBtn";

const Cart = () => {
  const theme = useTheme();
  const cartitems = useSelector(cartItems);
  const cartItemsLength = useSelector(cartItemsNumber);
  const total = cartitems.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  const cartHeadingStyles = {
    fontSize: { xs: "40px", sm: "60px" },
    mb: { xs: "12px", sm: "20px" },
    fontWeight: 700,
    color: theme.palette.primaryColor.main,
  };

  const cartContainerStyles = {
    p: "15px 5px",
    gap: { xs: "20px", sm: "30px", md: "40px" },
    display: "flex",
    alignItems: "flex-start",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    justifyContent: { xs: "center", md: "start" },
  };

  return (
    <Box>
      <Container
        sx={{
          py: { xs: "20px", sm: "30px" },
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "column" },
        }}
      >


        {
          cartItemsLength === 0 ? null :
            (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  mb: "10px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    p: "20px",
                    width: { xs: "100%", sm: "35%" },
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={theme.palette.successColor.main}
                    fontSize={{ xs: "20px", sm: "24px" }}
                    fontWeight={600}
                  >
                    طلبك جاهز للشحن الآن
                  </Typography>

                  <Box>
                    <Typography
                      variant="b"
                      color="#000"
                      fontSize={{ xs: "20px", sm: "24px" }}
                      fontWeight={600}
                    >
                      المجموع :
                    </Typography>
                    <Typography
                      variant="span"
                      color={theme.palette.greyColor.main}
                      fontSize={{ xs: "17px", sm: "21px" }}
                    >
                      {total}$
                    </Typography>

                    <Button
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        transition: "100ms all linear",
                        display: "block",
                        "&:hover": {
                          backgroundColor: theme.palette.infoColor.main,
                          color: "white",
                        },
                        fontSize: { xs: "18px", sm: "22px" },
                        color: theme.palette.infoColor.main,
                        fontWeight: 600,
                        mt: "12px",
                        width: "100%",
                        mx: "auto",
                      }}
                      variant="contained"
                    >
                      تابع عملية الشراء

                    </Button>
                  </Box>
                </Box>
              </Box>
            )
        }

        <Box>
          <Typography
            variant="h2"
            sx={cartHeadingStyles}
          >
            {cartItemsLength === 0 ? "سله التسوق فارغه الأن" : "منتجاتك"}
          </Typography>

          <Box sx={cartContainerStyles}>

            {
              cartitems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
          </Box>
        </Box>
        {
          cartItemsLength === 0 ? null : (<EmptyCartBtn />)

        }
      </Container>
    </Box>
  );
};

export default Cart;
