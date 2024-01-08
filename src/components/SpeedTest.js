import React from 'react'
import { Box,  Grid, Toolbar, Typography } from "@mui/material"
import AutorenewIcon from '@mui/icons-material/Autorenew';

const SpeedTest = () => {
  return (
    <>
    
        <Box sx={{display:"flex",justifyContent:"center",paddingTop:{xs:"80px",sm:"70px",md:"50px",lg:"30px",xl:"20px"}}}>
            <Typography variant='h5' >
            <b>Your Internet Speed is </b>
            </Typography>
            </Box>
            <Box  sx={{display:"flex",justifyContent:"center"}}>
           

               <Toolbar variant='dense'  sx={{justifyContent:"center"}}>
                
                <Box >
                    <Typography variant='h2' sx={{fontSize:{xs:"70px",sm:"100px",md:"120px",lg:"150px"}}}>
                       100
                    </Typography>

                </Box>
                
                <Grid container direction={'column'} spacing={2}>
                    <Grid item>
                <Box >
                
                    <Typography variant='h4' sx={{fontSize:"50px",fontWeight:"30px"}}>
                        <b>Mbps</b>

                    </Typography>

                </Box>
                </Grid>
               <Grid item sx={{marginLeft:"55px"}}>
                <Box>
                    <Typography >
                        <AutorenewIcon sx={{fontSize:"30px"}} />
                    </Typography>
                </Box>
                </Grid>
                

                </Grid>
                </Toolbar>
                      </Box>
        
            
           
    </>
  )
}

export default SpeedTest



          
                
               
