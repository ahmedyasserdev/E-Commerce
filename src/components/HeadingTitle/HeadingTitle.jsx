import { Container, Typography , useTheme } from '@mui/material'

const HeadingTitle = ({title}) => {
    const theme = useTheme()
  return (
    <Container sx = {{py : {xs : "20px" , sm : "25px"}}} >
        <Typography variant = "h2"
        sx  = {{
            color  : theme.palette.primaryColor.main ,
            fontWeight : 600 ,
            fontSize : {xs : "30px"  , sm   : "40px"} ,
            textAlign : {xs : "center" , sm : "start"}
        }}
        >
        {title}
        </Typography>

    </Container>
  )
}

export default HeadingTitle