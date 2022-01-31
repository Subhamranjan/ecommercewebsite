import React from "react";
import "./aboutSection.css";
import {Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from '@material-ui/icons/Pinterest';
const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow us</Typography>
            <a
              href="https://www.facebook.com/thedecoratehomedecor"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/thedecorate_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a>
              <PinterestIcon/>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
