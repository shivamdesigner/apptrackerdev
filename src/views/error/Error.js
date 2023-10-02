import { Box, Typography } from '@mui/material'
import React from 'react'
import errorimg from '../../imgs/how-to-find-and-fix-404-errors-in-wordpress.png.webp'
const Error = () => {
  return (
    <Typography sx={{minHeight:"100vh" , display:"flex", justifyContent:"center" ,flexWrap:"wrap"}} component="div">

    <Typography component="div"      sx={{
        // backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        background: `url(${errorimg})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        backgroundPosition:'center',
        width:"min(100% - 0px, 70% )"
        
      }}>
    <Box sx={{fontSize:"50px" , float:"left",display:"flex", justifyContent:"center", mt:5}} component="div">
         {/* 404 */}
    </Box>
    </Typography>
    </Typography>
  )
}

export default Error
