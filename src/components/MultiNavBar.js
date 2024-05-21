import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

import Button from "react-bootstrap/Button";
import "../styles/navbarStyle.css";

const MultiNavBar = () => {
  const navigate = useNavigate();
  const onGetStarteClick = () => {
    navigate(`/about`);
  };
  return (
    <Container>
      <div className="navbarStyle">
        <div>
          <h4 style={{ fontWeight: "650" }}>MULTI</h4>
        </div>
        <div>
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/team">Team</Link>
          <Link to="/">Drop Down</Link>
          <Link to="/contact">Contact</Link>
          <Button onClick={onGetStarteClick} className="buttonStyle">
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MultiNavBar;
