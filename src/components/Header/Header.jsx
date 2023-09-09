import React, { useState } from 'react'
import TopHeader from './TopHeader'
import { Box,  useTheme } from '@mui/material'
import MiddleHeader from './MiddleHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  const theme = useTheme()
  const [isOpen , setIsOpen] = useState(false)
  return (
    <Box sx={{ backgroundColor: theme.palette.primaryColor.main, height: "250px", width: "100%" }} >

      <TopHeader  setIsOpen = {setIsOpen}  />
      <MiddleHeader />
      <BottomHeader setIsOpen = {setIsOpen} isOpen = {isOpen} />
    </Box>
  )
}

export default Header