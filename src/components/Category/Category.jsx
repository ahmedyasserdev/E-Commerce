import { categories } from "../../data/category.js"
import { Box, Typography, Stack, Container, CardMedia, useTheme } from "@mui/material"

const Category = () => {
    const theme = useTheme()
    return (
        <Box>
            <Container sx={{ py: { xs: "20px", sm: "30px" } }} >
                <Stack direction="row" justifyContent = {"center"}  alignItems={"center"} flexWrap={"wrap"}
                    gap={{ xs: "12px", sm: "15px" }}
                >
                    {categories.map(({ title, image, id }) => {
                        return (
                            <Box key={id}
                                sx={{
                                    width: {xs : "85%"  , sm : "15%" },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    backgroundColor : "white",
                                    borderRadius: "10px",
                                    p: {xs :"15px" , sm :"5px" } ,


                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt={title}
                                    sx={{
                                        maxWidth: "100%",
                                        maxHeight: "100px" ,
                                        objectFit  : "contain" ,
                                        mb : {xs : "5px" , sm : "10px" }
                                    }}
                                />
                                <Typography variant="b" 
                                    sx = {{
                                        fontSize :{xs : "15px" , sm : "18px" },
                                        color : theme.palette.primaryColor.main ,
                                        textAlign  :"center"
                                    }}
                                >
                                    {title}
                                </Typography>
                            </Box>
                        )
                    })}
                </Stack>
            </Container>
        </Box>
    )
}

export default Category
