import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./Navbar.css";
import Logo from "../assets/Logo/Logo.png";
import "./Navbar.css";
import axios from "axios";
import OrderList from "./OrderList";
import { useNavigate } from "react-router-dom";
const TheNavbar = (props) => {

 const navigate =useNavigate();

  const handleClick = () => {
    // Toggle the showTable state when "Show List" button is clicked
    navigate("/list");
  };
  return (
    <>
    <div className="table-container">
      <Navbar
        expand="xl"
        className="navbar fixed-top"
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className="navbar_brand">
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <img className="imga" src={Logo} alt="My logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__linkgroup ms-auto">
            <Nav.Link
              className="nav__link firstnav__link me-4"
            >
              <Link
                activeClass={classes.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Our dishes
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
                <button onClick={handleClick}>Show List</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      </div>
    </>
  );
  //ENDS
};

export default TheNavbar;