import { Button  , useTheme , Box} from '@mui/material'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/slices/cartSlice'

const EmptyCartBtn = () => {
    const  theme = useTheme()
    const dispatch = useDispatch()
  return (
   <Box display = "flex"  justifyContent={{xs: "end" , sm : "start" }} pt = {"20px"} >
     <Button
             onClick = {() => dispatch(clearCart()) }
                 sx={{
                     backgroundColor: "#fff",
                     borderRadius: "8px",
                     transition: "100ms all linear",
                     "&:hover": { backgroundColor:theme.palette.infoColor.main , color : "white"},
                     fontSize : {xs :"20px" , sm : "25px" },
                     color: theme.palette.infoColor.main,
                     fontWeight : 500 ,
    
    
                 }}
    
                 variant="contained"
             >
        افرغ سله التسوق
             </Button>
   </Box>
  )
}

export default EmptyCartBtn