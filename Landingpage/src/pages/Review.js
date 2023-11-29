import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProductList } from "../data/data2";
const Review = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "700px",
        }}
      >
        {ProductList.map((product) => (
          <Card
            sx={{
              maxWidth: "400px",
              height: "400px",
              m: 2,
              backgroundColor: "red",
              marginTop: "10%",
            }}
          >
            <CardActionArea sx={{ marginTop: "1px" }}>
              <CardMedia
                sx={{
                  //border:'2px solid yellow',
                  height: "200px",
                  width: "300px",
                  borderRadius: "100%",
                  padding: "40px ",
                  marginTop: "-50px",
                  marginLeft: "50px",
                }}
                component={"img"}
                src={product.image}
                alt={product.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                sx={{ textAlign: "center", fontSize: "30px", color: "white" }}
                variant="h5"
                gutterBottom
                component={"div"}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{ fontSize: "15px", textAlign: "center" }}
                variant="body2"
              >
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Review;
