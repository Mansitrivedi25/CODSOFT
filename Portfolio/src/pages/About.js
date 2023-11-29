import { Box, Button, Typography } from "@mui/material";
import React from "react";
import resume from "../images/proresume.png";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import pic from "../images/tt.jpg";
const About = () => {
  return (
    <div
      style={{ backgroundColor: "pink", height: "600px", overflow: "hidden" }}
    >
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          padding: "10px",
          fontFamily: "sans-serif",
        }}
      >
        About me
      </h1>
      <div
        className="container"
        style={{ marginTop: "2%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="left"
          style={{
            backgroundColor: "black",
            border: "2px solid black",
            height: "400px",
            width: "400px",
            marginInline: "20px",
          }}
        >
          <img
            style={{ height: "240px", width: "250px", margin: "70px 70px" }}
            src={pic}
            alt=""
          />
        </div>

        <div
          className="right"
          style={{
            backgroundColor: "black",
            border: "2px solid black",
            height: "400px",
            width: "700px",
            marginInline: "20px",
          }}
        >
          <h1
            style={{
              marginTop: "30px",
              fontFamily: "cursive",
              fontSize: "45px",
              textAlign: "center",
              color: "white",
            }}
          >
            Hi all I'm Mansi
          </h1>
          <p
            style={{
              marginTop: "40px",
              fontSize: "25px",
              textAlign: "center",
              color: "blue",
            }}
          >
            I am a front-end react developer with a passion of <br /> developing
            different, complex web applications. My <br />
            top three favourite resources for learning are <br />{" "}
            FreeCodeCamp,Udemy,W3Schools.
          </p>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              justifyContent: "center",
              marginTop: "30px",
              marginLeft: "100px",
            }}
          >
            HIRE ME
          </Button>
          <a href={resume} download="Resume">
            <Button
              variant="contained"
              color="success"
              sx={{
                justifyContent: "center",
                marginTop: "30px",
                marginLeft: "10px",
              }}
            >
              <DownloadIcon /> Resume
            </Button>
          </a>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <GitHubIcon
                sx={{ cursor: "pointer", margin: "10px", fontSize: "35px" }}
              />
              <LinkedInIcon
                sx={{ cursor: "pointer", margin: "10px", fontSize: "35px" }}
              />
              <FacebookIcon
                sx={{ cursor: "pointer", margin: "10px", fontSize: "35px" }}
              />
              <TwitterIcon
                sx={{ cursor: "pointer", margin: "10px", fontSize: "35px" }}
              />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default About;
