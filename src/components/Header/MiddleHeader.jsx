import {
    Box,
    Container,
    InputBase,
    Typography,
    Badge,
    IconButton,
    useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItemsNumber } from "../../redux/slices/cartSlice";

const Searcher = styled("div")(({ theme }) => ({
    position: "relative",
    marginLeft: 0,
    width: "100%",
    hieght: "100%",
    paddingRight: "20px",
    fontSize: "21px",

    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#efefef",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const MiddleHeader = () => {
    const numberOfItems =  useSelector(cartItemsNumber)  ;
    const theme = useTheme();
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50%",
                    py: "30px",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: "30px", md: "10px" }
                }}
            >
                <Box
                    sx={{
                        borderRadius: "8px",
                        hieght: "60px",
                        width: "70%",
                        backgroundColor: "white",
                    }}
                >
                    <Searcher>
                        <SearchIconWrapper>
                            <Search
                                sx={{
                                    cursor: "pointer",
                                    color: theme.palette.successColor.main,
                                    fontSize: { xs: "21px", md: "26px" },
                                }}
                            />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="ماذا تريد"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Searcher>
                </Box>

                <Link to="/cart"   >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Typography color={"white"} variant="h4" fontSize={{ xs: "21px", md: "27" }} fontWeight={"600"}   >سله التسوق</Typography>

                        <Box>
                            <IconButton sx={{ ".css-1e2uyl3": { color: "white" }, }}   aria-label="cart" color={"white"} >
                                <Badge badgeContent={numberOfItems} color="error">
                                    <ShoppingCartOutlined sx={{ fontSize: { xs: "25px", md: "30px"} , fill : "white" }} />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Container>
    );
};

export default MiddleHeader;
