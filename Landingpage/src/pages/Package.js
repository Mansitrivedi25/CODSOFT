import React from "react";
import { ProductList } from "./../data/data";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Package = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
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
              <Typography variant="h5" gutterBottom component={"div"}>
                {product.name}
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography
                color={"secondary"}
                varaiant="h1"
                fontWeight={"bold"}
                fontSize={"30px"}
              >
                {product.price}
              </Typography>
            </CardContent>
            <Button
              fullWidth
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                textAlign: "center",
              }}
              variant="contained"
            >
              Book Now
            </Button>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Package;
