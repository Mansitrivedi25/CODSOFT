import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",

        height: "150px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "0px ",
            textAlign: "center",
            justifyContent: "center",

            padding: "10px",
            "& svg": {
              color: "red",
              fontSize: "50px",
            },
            "& svg :hover": {
              fontSize: "60px",
              color: "white",
            },
          }}
        >
          <TwitterIcon
            sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
          />
          <FacebookIcon
            sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
          />
          <InstagramIcon
            sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
          />
          <GitHubIcon
            sx={{ cursor: "pointer", margin: "10px", fontSize: "40px" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              padding: "10px",
              textAlign: "center",
              color: "green",
            }}
            variant="h5"
          >
            Developed with love by Mansi Trivedi &copy; 2023
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
