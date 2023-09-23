import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Contact.css";
import Logo from "../assets/Logo/Logo.png";
import { Link } from "react-scroll";
import insta from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import fb from "../assets/icon/facebook.png";

const Contact = () => {
  //Structure & layout of the footer
  return (
    <div id="contact" className="footer_bg">
      <Container className="foot">
        <Row className={classes.row}>
          <Col lg={6}>
            <div className={classes.info}>
              <div className={classes.image_div}>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <img
                    className="img"
                    src={Logo}
                    alt="logo"
                  ></img>
                </Link>
              </div>
              <div className={classes.content_div}>
                <p>
                  Solution for easy and flexible getting meals for the
                  household.You can trust us anywhere through this platform
                </p>
                <p>
                  <a
                    href="https://github.com/Eniola-Codes"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.eniola_codes}
                  >
                  </a>
                </p>
              </div>
            </div>
          </Col>

          <Col lg={3} className="soc">
            <div className={classes.about}>
              <h3>About</h3>
              <p>Our Company</p>
              <p>Career</p>
              <p>Investors Relations</p>
              <p>Social Impact</p>
            </div>
          </Col>

          <Col lg={3} className="soc">
            <div className={classes.social}>
              <h3>Social</h3>
              <a
                href="https://www.linkedin.com/in/kaavya-s-2a1b97239/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={fb}
                    alt="facebook"
                    className="social_icon"
                  ></img>
                </p>
              </a>
              <a
                href="https://twitter.com/kaavya446"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={twitter}
                    alt="twitter"
                    className="social_icon"
                  ></img>
                </p>
              </a>
              <a
                href="https://github.com/kaavya-s"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img
                    src={insta}
                    alt="instagram"
                    className="social_icon"
                  ></img>
                </p>
              </a>
              
            </div>
          </Col>

          <p className={classes.mobile_copy}>
            <a
              href="https://github.com/Eniola-Codes"
              target="_blank"
              rel="noreferrer"
              className={classes.eniola_codes}
            >
            </a>
          </p>
        </Row>
      </Container>
    </div>
  );
  //END
};

export default Contact;