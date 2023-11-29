import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/about.css";
import Picture from "../images/const.png";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="left">
          <img src={Picture} alt="hkjhfk fkjhgk fjhweg" />
        </div>
        <div className="right">
          <h1>Our Mission</h1>
          <p>
            To provide a professional services to our clients, ensuring they
            benefits from our experience and unique style.
          </p>
          <h5 className="lines">ABC is an Indian based travel agency</h5>
          <h5 className="lines">
            Since 2005, we have been committed to bringing our clinets the best
            in value and quality travel arrangements
          </h5>
          <h5 className="lines">
            We are passionate about travel and sharing the worlds wonder on the
            leisure travelside
          </h5>
          <h5 className="lines">Text Here</h5>
          <h5 className="lines">Text Here</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
