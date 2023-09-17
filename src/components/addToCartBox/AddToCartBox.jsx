import {
    Button,
    useTheme,
    Box
} from "@mui/material";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const AddToCartBox = ({product}) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                fontSize: "21px",
                fontWeight: 700,
                mt: { xs: "10px", sm: "15px" },
                color: theme.palette.primaryColor.main,
            }}
        >
        
            <Button
            onClick = {() => dispatch(addToCart(product)) }
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    transition: "100ms all linear",
                    "&:hover": { backgroundColor:theme.palette.infoColor.main , color : "white"},
                    fontSize : {xs :"16px" , sm : "19px" },
                    color: theme.palette.infoColor.main,
                    fontWeight : 500 ,


                }}

                variant="contained"
            >
                اضف الي سله التسوق
            </Button>
        </Box>
    );
};

export default AddToCartBox;
