import {
  AppBar,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <>
      <AppBar
        sx={{ color: "white", backgroundColor: "rebeccapurple" }}
        position="fixed"
        component={"Nav"}
      >
        <Toolbar sx={{ fontSize: "10px", padding: "5px" }}>
          <Typography variant="h3" color={"greenyellow"}>
            M@nsi
          </Typography>

          <Box display={"flex"} margin={"auto"}>
            <Tabs>
              <Tab
                sx={{ fontSize: "20px", color: "white" }}
                label="Home"
                to="/home"
                LinkComponent={Link}
              />
              <Tab
                sx={{ fontSize: "20px", color: "white" }}
                label="About"
                to="/about"
                LinkComponent={Link}
              />
              <Tab
                sx={{ fontSize: "20px", color: "white" }}
                label="Skill"
                to="/skill"
                LinkComponent={Link}
              />
              <Tab
                sx={{ fontSize: "20px", color: "white" }}
                label="Project"
                to="/project"
                LinkComponent={Link}
              />

              <Tab
                sx={{ fontSize: "20px", color: "white" }}
                label="Contact"
                to="/contact"
                LinkComponent={Link}
              />
            </Tabs>
          </Box>
          <Typography
            variant="form"
            sx={{ color: "white", backgroundColor: "rebeccapurple" }}
          >
            <SearchIcon sx={{ color: "red", fontSize: "30px" }} />

            <TextField
              sx={{
                fontSize: "20px",
                backgroundColor: "white",
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
