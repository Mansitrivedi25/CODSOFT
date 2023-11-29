import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import '../style/Contact.css'
const Contact = () => {
  return (
    <div className="contact" style={{ backgroundColor: "pink", height: "600px" }}>
      <Typography
      sx={{color:'white'}}
        variant="h3"
        padding={"50px"}
        textAlign={"center"}
        fontFamily={"fantasy"}
      >
        Contact Us Here
      </Typography>
      <Card
        sx={{
          border: "2px solid black",
          height: "400px",
          width: "500px",
          margin: "0px auto",
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid sx={12} sm={6} item>
                <TextField
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid sx={12} sm={6} item>
                <TextField
                  label=" Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Your Email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  rows={4}
                  multiline
                  variant="outlined"
                  placeholder="Type Your Message Here"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth required>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
