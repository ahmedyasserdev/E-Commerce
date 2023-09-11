import {
    Stack,
    Typography,
    Button,
    TextField,
    useTheme,
} from "@mui/material";

const AddToCartBox = () => {
    const theme = useTheme();
    return (
        <Stack
            direction={"column"}
            gap={{ xs: "15px", sm: "20px" }}
            alignItems={"flex-end"}
            sx={{
                fontSize: "21px",
                fontWeight: 700,
                mt: { xs: "10px", sm: "15px" },
                color: theme.palette.primaryColor.main,
            }}
        >
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Typography variant="label" color="">
                    الكميه
                </Typography>
                <TextField
                sx={{
                    border: `1px solid ${theme.palette.primaryColor.main}`,

                    ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                        color: theme.palette.primaryColor.main,
                        p : "10px 15px"
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent',
                        },
                    },
                  
                }}
                type="number"
                min="1"
                max="10"
                variant="outlined"
            />
            
            </Stack>

            <Button
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
        </Stack>
    );
};

export default AddToCartBox;
