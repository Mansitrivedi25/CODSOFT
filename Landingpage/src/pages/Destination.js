import React from "react";
import { ProductList } from "./../data/data1";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Destination = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            padding: "20px",
            alignItems: "center",
            textAlign: "center",
            marginTop: "40px",
            justifyContent: "center",
            color: "red",
          }}
        >
          Destination places to visit in India
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
        {ProductList.map((product) => (
          <Card sx={{ maxWidth: "350px", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "200px",
                  padding: "10px auto",
                  marginLeft: "0px",
                }}
                component={"img"}
                src={product.image}
                alt={product.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                sx={{ textAlign: "center", color: "orangered" }}
                variant="h5"
                gutterBottom
                component={"div"}
              >
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Destination;
