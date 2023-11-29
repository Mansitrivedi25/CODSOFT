import React from "react";
import { ProductList } from "../data/data";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Project = () => {
  return (
    <div
      style={{ backgroundColor: "white", height: "600px", overflow: "hidden" }}
    >
      <Box>
        <Typography
          sx={{ color: "Red", fontFamily: "cursive", fontWeight: "bold" }}
          variant="h4"
          padding="20px"
          marginTop={3}
          textAlign={"center"}
        >
          Some of my Recent Projects{" "}
        </Typography>
      </Box>
      <Box
        marginTop={"10px"}
        sx={{ height: "450px" }}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {ProductList.map((product) => (
          <Card
            sx={{
              backgroundColor: "black",
              height: "390px",
              width: "300px",
              marginInline: "10px",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "200px",
                }}
                component={"img"}
                src={product.image}
                alt={product.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
                component={"div"}
              >
                {product.name}
              </Typography>
              <Typography sx={{ color: "white" }} variant="body2">
                {product.description}
              </Typography>
            </CardContent>
            <Box>
              <Button sx={{ marginLeft: "25%" }}>Check it Out </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Project;
