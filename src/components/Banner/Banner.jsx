import { Box, Container } from "@mui/material"
import house from "/images/banners/house.png"
import shoes from "/images/banners/shoes.png"

const imgs = [
    {id : 1 , src : house , } ,
    {id : 2 , src : shoes , } ,
]


const Banner = () => {
    return (
        <Box>
            <Container
                sx={{
                    width: "100%", display: {xs : "block" , sm  : "flex"}, justifyContent: "space-between", alignItems: "flex-start", py: { xs: "8px", sm: "15px" }
                }}
            >
                {
                    imgs.map(({src , id}) => {
                        return (
                                <img key = {id} src={src} alt={"banner"} className = "banner-img" />
                        )
                    })
                }
           
           
                </Container>

        </Box>
    )
}

export default Banner