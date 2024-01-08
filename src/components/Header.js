import React from 'react';

import {  Box,  Button,   Toolbar,   Typography } from "@mui/material"

import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

const Header = () => {
  return (
    <>
   
    <Box >
    <Toolbar>
   
      <Box 
      sx={{flexGrow:"1", display:"flex",justifyContent:"center",alignItems:"center"}}

     >
   <NetworkCheckIcon sx={{fontSize:"80px",color:"#008080",marginLeft:"62px"}}/>
   </Box>
   
     
      
    
<Box sx={{justifyContent:"flex-end"}}>
    <Button size="small" sx={{height:"10px",width:"30px" ,color:"#221F1F",fontSize:"9px"}}>
      Privacy</Button>
      </Box>
      </Toolbar>
     
    </Box>
    
    
 
 <Box sx={{display:"flex",justifyContent:"center"}}>
 <Typography variant='h3' 
   sx={{color:"black",paddingTop:"0px",fontSize:"30px"}}>
    <b >dFast</b>
    </Typography>

   
    </Box>
    </>
  )
}

export default Header
