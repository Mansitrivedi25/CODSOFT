import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

const Skill = () => {
  return (
    <div
      style={{ backgroundColor: "black", height: "600px", overflow: "hidden" }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
      >
        My Skills
      </Typography>
      <Box
        component={"div"}
        sx={{
          height: "500px",
          padding: "10px",
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "grey",
            marginInline: "10px",
            height: "450px",
            width: "500px",
          }}
        >
          <Typography
            // variant="h5"
            // sx={{ fontWeight: "bold", marginTop: "17%", alignItems:'center',marginLeft: "35px" }}
            sx={{ color: "white", marginTop: "20px", textAlign: "center" }}
            variant="h4"
          >
            Professional Skills
          </Typography>
          <Box
            sx={{
              border:'2px solid black',
              color: "white",
              width: "95%",
              marginLeft: "7px",
              padding: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginTop: "30px",
              
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                  fontSize: "30px",
                  marginLeft: "35px",
                }}
              >
                <CircularProgress
                  sx={{ fontSize: "500px" }}
                  variant="determinate"
                  value={90}
                />
                Creativity
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                  fontSize: "30px",
                  marginLeft: "35px",
                }}
              >
                <CircularProgress variant="determinate" value={65} />
                Communication
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                  fontSize: "30px",
                  marginLeft: "35px",
                }}
              >
                <CircularProgress variant="determinate" value={75} />
                Leadership
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                  fontSize: "30px",
                  marginLeft: "35px",
                }}
              > 
                <CircularProgress variant="determinate" value={85} />
                TeamWork
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "grey",
            marginInline: "10px",
            height: "450px",
            width: "500px",
          }}
        >
          <Typography
            sx={{ color: "white", marginTop: "20px", textAlign: "center" }}
            variant="h4"
          >
            Technical Skills
          </Typography>
          <Box
            sx={{
              width: "95%",

              marginLeft: "12px",
              padding: "12px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              HTML <span style={{ marginLeft: "90%" }}>90%</span>
              <LinearProgress color="secondary" variant="buffer" value={90} />
            </Typography>
            <Typography sx={{ marginTop: "5px", color: "white" }}>
              CSS <span style={{ marginLeft: "90%" }}>60%</span>
              <LinearProgress color="secondary" variant="buffer" value={60} />
            </Typography>
            <Typography sx={{ marginTop: "5px", color: "white" }}>
              JavaScript <span style={{ marginLeft: "90%" }}>80%</span>
              <LinearProgress color="secondary" variant="buffer" value={80} />
            </Typography>
            <Typography sx={{ marginTop: "5px", color: "white" }}>
              React <span style={{ marginLeft: "90%" }}>80%</span>
              <LinearProgress color="secondary" variant="buffer" value={80} />
            </Typography>
            <Typography sx={{ marginTop: "5px", color: "white" }}>
              NodeJs <span style={{ marginLeft: "90%" }}>50%</span>
              <LinearProgress color="secondary" variant="buffer" value={50} />
            </Typography>
            <Typography sx={{ marginTop: "5px", color: "white" }}>
              MySQL <span style={{ marginLeft: "90%" }}>70%</span>
              <LinearProgress color="secondary" variant="buffer" value={70} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Skill;
