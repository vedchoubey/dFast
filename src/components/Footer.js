import React from 'react'
import { Box, Button,  Toolbar, Typography } from "@mui/material"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import myImage from "../Images/logo2.png";

const Footer = () => {
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",textAlign:"center",paddingTop:"50px"}}>
      <Button variant ="outlined" size='medium' 
      sx={{ paddingTop:"15px",paddingBottom:"15px",width:"165px",height:"30px",color:"#797777",borderRadius:"5px"}}>
        Show more info
      </Button>
      </Box>

      <Toolbar  sx={{justifyContent: 'center', paddingTop:"50px"}} >
        <QuestionMarkIcon  fontSize='medium' />
        <FacebookIcon  fontSize='medium' sx={{paddingLeft:"10px"}} />
        <TwitterIcon  fontSize='medium' sx={{paddingLeft:"10px"}}/>
      </Toolbar>



      <Box
  sx={{
    display: "flex",
    justifyContent: "flex-end",
    padding:{lg:"20px"},
   marginTop:"-20px"
   
  }}
>
  <Toolbar>
    <Box>
      <Typography variant='subtitle2' sx={{fontStyle:"italic",fontSize:"10px"}}>
        Powered by
      </Typography>
    </Box>
  <Box
    component="img"
    sx={{
      height: "20px",
      width: '180px',
      padding:"2px"
    }}
    src={myImage}
    alt="downloaded image"
  />
  </Toolbar>
</Box>
</>

       
    
  )
}

export default Footer
