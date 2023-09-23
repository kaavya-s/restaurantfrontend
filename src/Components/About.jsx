import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./About.css";
import aboutImage from "../assets/image/about-image.png";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {

  return (
    <>
      <section id="about">
        <Container>
          <Row className="row mx-auto">
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="700"
            >
              <div className="text_div">
                <h2 className="text_header">About us</h2>
                <p className="text_content">
                I make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? The Hot Plate makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go. We'll help you
                find unique meals wherever you are. With our app, you never have
                to settle for unhealthy, expensive takeaway food again.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="image_div"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="700"
              >
                <img
                  className="image"
                  src={aboutImage}
                  alt="about"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  //END
};

export default About;