import { Email } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";

const TopFooter = () => {
    const theme = useTheme();

    const titleStyles = {
        color: theme.palette.primaryColor.main,
        fontSize: { xs: "22px", sm: "39px" },
        fontWeight: "400",
    };

    const contactStyles = {
        textAlign: "center",
        fontSize: { xs: "19px", sm: "28px" },
    };

    const emailStyles = {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: { xs: "5px", sm: "10px" },
        color: theme.palette.primaryColor.main,
        fontWeight: "600",
        fontSize: { xs: "16px", sm: "22px", md: "25px" },
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: `1px solid rgb(202, 196, 196)`,
                borderBottom: `1px solid rgb(202, 196, 196)`,
                py : {xs : "8px" , sm : "11px" , md : "15px" }
            }}
        >
            <Typography variant="h3" sx={titleStyles}>
                نحن هنا دائما لمساعدنك
            </Typography>

            <Box sx={contactStyles}>
                <Typography variant="span" color={theme.palette.greyColor.main}>
                    تواصل معنا
                </Typography>

                <Box sx={emailStyles}>
                    <Email />
                    <Typography variant="span">shop@fakeMail.com</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopFooter;