import { Container, Box } from "@mui/material"
import { brands } from "../../data/brands.js"


const Brands = () => {
    return (
        <Box>
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    py: { xs: "20px", sm: "30px" } ,
                    gap : {xs : "10px" , sm : "0px" }
                }}
            >
                {
                    brands.map(({ id, image }) => (
                        <Box key={id}
                            sx={{
                                cursor: "pointer", 
                                width: {xs : "48%"  , sm :  "24%"} ,
                                backgroundColor: "white",
                                height : "110px" ,
                                borderRadius : "30px"

                            }}
                        >
                            <img src={image} alt={"brand"} width = "100%" height = "100%" style = {{objectFit : "contain"}} />
                        </Box>
                    ))


                }

            </Container>
        </Box>
    )
}

export default Brands