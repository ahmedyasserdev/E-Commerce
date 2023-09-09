import { Box, Typography, useTheme } from "@mui/material";
import { footerItems } from "./footerData";


const FooterItems = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                py: { xs: "20px", sm: "25px" }
            }}
        >
            {footerItems.map((item) => (
                <Box key={item.title} sx={{ width: { xs: "50%",  sm : "20%" , md: "19%" }, textAlign: { xs: "center", md: "start" } }} >
                    <Typography variant="h4" color={theme.palette.primaryColor.main}
                        fontSize={"20px"} fontWeight={"600"} pb={"7px"}

                    >{item.title}</Typography>
                    <Box  >
                        {item.links.map((link, index) => (
                            <Typography key={index} variant="subtitle1" 
                                fontSize = {"17px"}
                            color = {theme.palette.greyColor.main}  mb = {"5px"} 
                                sx = {{cursor : "pointer"}}
                            >
                                {link}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default FooterItems;