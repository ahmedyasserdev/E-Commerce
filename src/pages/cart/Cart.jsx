import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import CartItems from "./CartItems";

const cartItems = [
  {
    id: 1,
    quantity: 2,
    price: 10,
    title: "samsung",
    image: "/images/products/mobiles/m1.jpg",
  },
  {
    id: 2,
    quantity: 2,
    price: 10,
    title: "samsung",
    image: "/images/products/mobiles/m1.jpg",
  },
  {
    id: 3,
    quantity: 2,
    price: 12,
    title: "samsung",
    image: "/images/products/mobiles/m1.jpg",
  },
  {
    id: 4,
    quantity: 2,
    price: 10,
    title: "samsung",
    image: "/images/products/mobiles/m1.jpg",
  },
  {
    id: 5,
    quantity: 2,
    price: 10,
    title: "samsung",
    image: "/images/products/mobiles/m1.jpg",
  },
  {
    id: 6,
    quantity: 5,
    price: 20,
    title: "samsung",
    image: "/images/products/mobiles/m2.jpg",
  },
];

const Cart = () => {
  const theme = useTheme();

  const total = cartItems.reduce((acc, current) => acc + current.price * current.quantity, 0);


  return (
    <Box>
      <Container sx={{ py: { xs: "20px", sm: "30px" }, display: "flex", flexDirection: { xs: "column-reverse", sm: "column" } }}>
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", mb: "10px" }} >


          <Box sx={{ backgroundColor: "white", p: "20px", width: { xs: "100%", sm: "35%" }, borderRadius: "4px", textAlign: "center" }} >
            <Typography variant="h6" color={theme.palette.successColor.main} fontSize={{ xs: "20px", sm: "24px" }} fontWeight={600}  >
              طلبك جاهز للشحن الأن
            </Typography>

            <Box>
              <Typography variant="b" color="#00" fontSize={{ xs: "20px", sm: "24px" }} fontWeight={600}  >المجموع : </Typography>
              <Typography variant="span" color={theme.palette.greyColor.main} fontSize={{ xs: "17px", sm: "21px" }} >{total}$</Typography>

              <Button
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  transition: "100ms all linear",
                  display: "block",
                  "&:hover": { backgroundColor: theme.palette.infoColor.main, color: "white" },
                  fontSize: { xs: "18px", sm: "22px" },
                  color: theme.palette.infoColor.main,
                  fontWeight: 600,
                  mt: "12px",
                  width: "100%",
                  mx: "auto"
                }}
                variant="contained"
              >
                تابع عمليه الشراء
              </Button>
            </Box>
          </Box>
        </Box>







        <Box>
          <Typography
            variant="h2"
            fontSize={{ xs: "40px", sm: "60px" }}
            mb={{ xs: "12px", sm: "20px" }}
            fontWeight={700}
            color={theme.palette.primaryColor.main}
          >
            سله التسوق
          </Typography>

          <Box
            sx={{
              p: "15px 5px",
              gap: { xs: "20px", sm: "30px", md: "40px" },
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "start" }
            }}


          >
            {cartItems.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;

