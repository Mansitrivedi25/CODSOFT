import {
  AppBar,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "green" }}
        component={"Nav"}
        position="fixed"
      >
        <Toolbar sx={{ fontSize: "20px", padding: "5px" }}>
          <Typography variant="h5" sx={{ fontSize: "40px" }}>
            <TravelExploreIcon
              sx={{
                fontSize: "70px",
                color: "black",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            />
          </Typography>

          <Box display={"flex"} margin={"auto"}>
            <Tabs>
              <Tab
                sx={{ color: "white", fontSize: "20px" }}
                label="Home"
                LinkComponent={Link}
                to="/home"
              />
              <Tab
                sx={{ color: "white", fontSize: "20px" }}
                label="About"
                LinkComponent={Link}
                to="/about"
              />
              <Tab
                sx={{ color: "white", fontSize: "20px" }}
                label="Package"
                LinkComponent={Link}
                to="/package"
              />
              <Tab
                sx={{ color: "white", fontSize: "20px" }}
                label="Destination"
                LinkComponent={Link}
                to="/destination"
              />
              <Tab
                sx={{ color: "white", fontSize: "20px" }}
                label="Review"
                LinkComponent={Link}
                to="/review"
              />
            </Tabs>
          </Box>
          <Typography
            variant="form"
            sx={{ color: "white", backgroundColor: "pink" }}
          >
            <SearchIcon sx={{ color: "red", fontSize: "30px" }} />
            <TextField
              sx={{
                fontSize: "20px",
              }}
              type="text"
              placeholder="Type Here"
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
