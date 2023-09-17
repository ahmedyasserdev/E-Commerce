import { Box, CircularProgress, Typography, useTheme } from '@mui/material'

const Loader = () => {
    const theme = useTheme()
   
        return (
            <Box sx={{ textAlign: "center", pt: " 50px" }} >
            <Typography variant = {"h1"} >
                    <CircularProgress sx={{ color: theme.palette.infoColor.main, }} />
            </Typography>
            </Box>

        )


}

export default Loader