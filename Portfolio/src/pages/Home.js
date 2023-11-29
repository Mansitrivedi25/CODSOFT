import React from "react";
import "../style/Home.css";
import { Box, Button, Typography } from "@mui/material";
const Home = () => {
  return (
    <div className="home" style={{ height: "600px", overflow: "hidden" }}>
      <Box
        sx={{
          margin: "20px auto",
          marginTop: "20px",
          border: "5px solid pink",
          height: "550px",
          width: "1400px",
        }}
        marginInline={"20px"}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginTop: "10%",
            color: "yellow",
            textAlign: "center",
            fontFamily: "cursive",
          }}
        >
          Wecome to my Portfolio Website:)
        </Typography>
        <Box sx={{ marginTop: "30px" }}>
          <Typography>
            <Button
              sx={{
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "blueviolet",
                fontSize: "40px",
                marginLeft: "36%",
                border: "2px solid white",
                borderRadius: "200px",
              }}
            >
              Get Started
            </Button>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
