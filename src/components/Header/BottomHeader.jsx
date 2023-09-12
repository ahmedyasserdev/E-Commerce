import { Box, Container, Typography, useTheme, useMediaQuery, Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Link } from "react-router-dom"
const links = [
    { id: 1, path: "/", link: "الصفحه الرئيسيه", },
    { id: 2, path: "/products", link: "الالكترونيات و الموبايلات", },
    { id: 3, link: "المنزل و المطبخ", },
    { id: 4, link: "رجالي", },
    { id: 5, link: "نسائي", },
];

// eslint-disable-next-line react/prop-types
const BottomHeader = ({ setIsOpen, isOpen }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const drawerContent = (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "20px", md: "30px" },
                width: 250,
            }}
        >

            {links.length > 1 ? (
                links.map(({ id, link, path }) => (

                    <Box
                        onClick={() => setIsOpen(false)}
                        key={id}

                        sx={{
                            color: "white",
                            px: { xs: "0px", sm: "15px" },
                            py: { xs: "8px", sm: 0 },
                            cursor: "pointer",
                        }}
                    >
                        <Link
                            to={path}
                        >
                            <Typography
                                variant={"h5"}
                                fontSize={{ xs: "17px", sm: "22px" }}
                                fontWeight={"500"}
                                sx={{
                                    transition: "100ms color ease",
                                    minWidth: "100px",
                                    color: "white",
                                    "&:hover": {
                                        color: theme.palette.warningColor.main,

                                    },
                                }}

                            >
                                {link}
                            </Typography>
                        </Link>
                    </Box>
                ))
            ) : null}
        </Box>
    );
    return (
        <Container>
            <Box component={"nav"} sx={{ height: "30%", }}>
                {isMobile ? (
                    <Drawer anchor="right" open={isOpen}
                        PaperProps={{
                            style: {
                                backgroundColor: theme.palette.primaryColor.main,
                            },
                        }}
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        <IconButton
                            onClick={() => setIsOpen(false)}
                            sx={{
                                mt: "50px",
                                mb: "30px",
                                p: 0,
                                color: theme.palette.warningColor.main
                            }}
                        >
                            <Close />
                        </IconButton>
                        {drawerContent}
                    </Drawer>
                ) : (
                    <Box>{drawerContent}</Box>
                )}
            </Box>
        </Container>
    );
};

export default BottomHeader;