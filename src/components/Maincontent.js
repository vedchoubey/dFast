import React from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Maincontent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: {
            xs: "90px",
            sm: "80px",
            md: "60px",
            lg: "30px",
            xl: "20px",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: {
              xs: "normal",
              sm: "bold",
              md: "bold",
              lg: "bold",
              xl: "bold",
            },
            fontStretch: {
              xs: "condensed",
              sm: "semi-condensed",
              md: "normal",
              lg: "normal",
              xl: "normal",
            },
            fontSize: { xs: "20px", sm: "25px", lg: "30px" },
          }}
        >
          Your Internet speed is
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "110px",
                  sm: "120px",
                  md: "130px",
                  lg: "150px",
                  xl: "160px",
                },
              }}
            >
              100
            </Typography>
          </Box>

          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "35px", lg: "50px" } }}
                >
                  <b>Mbps</b>
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ marginLeft: "55px" }}>
              <Box>
                <Typography>
                  <AutorenewIcon sx={{ fontSize: "30px" }} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </>
  );
};
export default Maincontent;
