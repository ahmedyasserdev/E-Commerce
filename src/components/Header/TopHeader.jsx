import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Call, Menu, ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TopHeader = ({ setIsOpen }) => {
    const theme = useTheme()
    return (

        <Box sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between", height: "20%",
            backgroundColor: theme.palette.secondaryColor.main, px: { xs: "20px", md: "45px" }, color: "#efefef", width: "100%"
        }} >
            <Box sx={{ display: { xs: "block", md: "none" } }} >
                <IconButton onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
                    <Menu />
                </IconButton>
            </Box>

            <Link to="/" >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }} >
                    <Typography fontSize={{
                        xs: "15px", md: "24px", transition: "100ms color ease", "&:hover": {
                            color: theme.palette.warningColor.main
                        }
                    }} variant="h5"
                        color="#efefef"
                    >
                        اشتري الان
                    </Typography>
                    <ShoppingBasket sx={{ color: "white", transition: "opacity 100ms  ease", "&:hover": { opacity: 0.8 } }} />
                </Box>
            </Link>



            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: "8px", }} >
                <Typography fontSize={{ xs: "15px", md: "24px" }} fontWeight={"500"} >
                    123-456-789
                </Typography>
                <Call />
            </Box>


        </Box>


    )
}

export default TopHeader