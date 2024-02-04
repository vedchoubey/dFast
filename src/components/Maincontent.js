import React, { useState } from "react";
import { Box, Grid, Toolbar, Typography, Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { ReactInternetSpeedMeter } from "react-internet-meter";
// import 'react-internet-speed-meter/dist/index.css'

const Maincontent = () => {
  const [wifiSpeed, setWifiSpeed] = useState(0);

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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "70px",
                  sm: "120px",
                  md: "130px",
                  lg: "150px",
                  xl: "160px",
                },
                fontWeight: "600",
              }}
            >
              {wifiSpeed}
            </Typography>
          </Box>
          <ReactInternetSpeedMeter
            txtSubHeading=""
            outputType="alert"
            customClassName={null}
            txtMainHeading=""
            pingInterval={4000} // milliseconds
            thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
            threshold={100}
            imageUrl="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
            downloadSize="1781287" //bytes
            callbackFunctionOnNetworkDown={(speed) =>
              console.log(`Internet speed is down ${speed}`)
            }
            callbackFunctionOnNetworkTest={(speed) => setWifiSpeed(speed * 8)}
          />
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "25px", lg: "50px" } }}
                >
                  <b>Mbps</b>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: {
                  xs: "20px",
                  sm: "22px",
                  md: "25px",
                  xl: "50px",
                  lg: "55px",
                },
              }}
            >
              <Box>
                <Typography>
                  <AutorenewIcon
                    sx={{
                      fontSize: "30px",
                      color: "#01BF71",
                      cursor: "pointer",
                    }}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              paddingTop: "15px",
              paddingBottom: "15px",
              width: "165px",
              height: "30px",
              color: "#797777",
              borderRadius: "8px",
              border: "1px solid #01BF71",
            }}
          >
            Show more info
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Maincontent;
