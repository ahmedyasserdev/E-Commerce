import {
    Box, Typography,
    useTheme,
} from "@mui/material"

import { Star } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
const RatingBox = ({ rating, reviews }) => {
    const theme = useTheme()
    return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "space-evenly", alignItems: "center", py: { xs: "8px", sm: "10px" } }} >
            <Box
                sx={{
                    display: "flex", gap: "5px", alignItems: "center",

                }}
            >
                <Typography color = {theme.palette.primaryColor.main} variant="span" fontSize={{ xs: "12px", sm: "15px" }} fontWeight={600}>
                    {rating}
                </Typography>
                <Star sx={{ color: theme.palette.warningColor.main }} />
            </Box>


            <Typography variant="span" fontWeight={400} fontSize={{ xs: "14px", sm: "17px" }} color={theme.palette.infoColor.main}  >
                التقييمات {reviews}
            </Typography>


        </Box>
    )
}
export default RatingBox