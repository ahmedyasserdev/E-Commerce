import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Offer from "./Offer";
import { specialOffers } from "../../data/special-offers";
import { AccessAlarm } from "@mui/icons-material";

const SpecialOffers = () => {
    const theme = useTheme();

    const TypographyStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "start" },
        gap: "5px",
        fontSize: { xs: "18px", sm: "21px" },
        fontWeight: "600",
        color: theme.palette.errorColor.main,
    };

    return (
        <Box>
            <Container sx={{ px: "50px  !important" }}>
                <Box sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center", gap: "10px", textAlign: { xs: "center", sm: "start" }}}>
                    <Typography variant="h3" sx={{ fontSize: { xs: "40px", sm: "50px" }, fontWeight: "400", color: theme.palette.primaryColor.main }}>عروض كبيره اليوم</Typography>
                    <Typography variant="span" sx={TypographyStyle}>
                        <AccessAlarm />
                        لمده 24 ساعه فقط
                    </Typography>
                </Box>

                <Stack direction={{ xs: "column", sm: "row" }} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "space-between", md: "center" }} gap={{ xs: "18px", sm: "20px" }} py={2}>
                    {specialOffers.map((offer) => <Offer key={offer.id} offer={offer} />)}
                </Stack>
            </Container>
        </Box>
    );
};

export default SpecialOffers;
