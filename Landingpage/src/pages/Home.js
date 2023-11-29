import React from "react";
import "../styles/hom.css";
import { Box, Button, Typography } from "@mui/material";
const Home = () => {
  return (
    <div className="home">
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "70px",
            color: "black",

            marginTop: "10%",
            marginLeft: "20px",
            padding: "19px",
          }}
          variant="h1"
        >
          ADVENTURE IS WORTHWHILE
        </Typography>
        <Typography
          component={"p"}
          sx={{
            color: "white",
            marginTop: "50px",
            fontSize: "30px",

            marginLeft: "20px",
            padding: "20px",
            textAlign: "center",
            color: "black",
          }}
        >
          Discover New Places With Us , Adventure Awaits...
        </Typography>
      </Box>
      <Box sx={{ marginTop: "50px", padding: "10px" }}>
        <Button
          sx={{
            fontSize: "30px",
            marginLeft: "40%",
            textAlign: "center",
            justifyContent: "center",
            color: "black",
            border: "2px solid white",
            borderRadius: "40px",
            backgroundColor: "pink",
          }}
        >
          Learn More
        </Button>
      </Box>
    </div>
  );
};

export default Home;
