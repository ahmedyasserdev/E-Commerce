/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom"
import RatingBox from '../Rating/RatingBox'
const ProductItem = ({ products, }) => {
    const theme = useTheme()
    return (
        <>
            {
                products.map(({ id, image, title, rating, reviews, price }) => (
                    <Link key={id} to={`/product/${id}`} >
                        <Box sx = {{ backgroundColor: "white", width: "270px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "5px", margin: "0 5px", borderRadius: "12px" }}>
                            <img src={image} height="auto" width="70%" style={{ objectFit: "contain", }} alt={title} />
                            <Box textAlign={"center"}  >
                                <Typography variant="h5" mt={"20px"} fontSize={{ xs: "19px", sm: "22px" }} fontWeight={600} color={theme.palette.primaryColor.main}>{title}</Typography>
                                <RatingBox rating={rating} reviews={reviews} />
                                <Typography variant="h6" gutterBottom fontWeight={600} color={theme.palette.primaryColor.main} fontSize={{ xs: "15px", sm: "19px" }} sx={{ textAlign: "center" }}>${price}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))

            }

        </>

    )
}

export default ProductItem 