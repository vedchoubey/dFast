import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import myImage from "../Images/logo2.png";

const Footer = () => {
  return (
    <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      paddingBottom: '4px',
      marginLeft: '-8px',
      gap: 10,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box
        sx={{
          justifyContent: 'center',
          gap: 2,
          display: 'flex',
        }}
      >"
        <InstagramIcon fontSize="large" style={{ color: "#01BF71", cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.instagram.com/dockdevelopers/'} />
        <FacebookIcon fontSize="large" style={{color: "#01BF71", cursor: 'pointer'}} onClick={() => window.location.href = 'https://www.facebook.com/DockDevelopers/'} />
        <XIcon fontSize="large" style={{color: "#01BF71", cursor: 'pointer'}} onClick={() => window.location.href = 'https://twitter.com/dockdevelopers'} />
        <LinkedInIcon fontSize="large" style={{color: "#01BF71", cursor: 'pointer'}} onClick={() => window.location.href = 'https://twitter.com/dockdevelopers'} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: '8px',
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "10px", letterSpacing: '1px', color: '#a8a8a8' }}
          >
            POWERED BY
          </Typography>
        </Box>

        <Box
          component="img"
          sx={{
            height: "15px",
            width: "120px",
            padding: "2px",
            cursor: 'pointer'
          }}
          src={myImage}
          alt="DockDevelopers"
          onClick={() => window.location.href = 'https://dockdevelopers.com/'}
        />
      </Box>
    </Box>
  );
};

export default Footer;
