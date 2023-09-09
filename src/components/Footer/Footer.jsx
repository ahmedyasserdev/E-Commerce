import  {Box , Typography ,  Container , useTheme} from "@mui/material"
import TopFooter from "./TopFooter"
import FooterItems from "./FooterItems"
import Copyright from './Copyright';
const Footer = () => {
    const theme = useTheme()
    return (

    <Box
    sx = {{mt : {xs : "15px" , sm : "20px" }}}
    >
    <Container >
    <TopFooter/>
    <FooterItems />
    
    
    </Container>
    <Copyright />
    
    
    </Box>
  )
}

export default Footer