import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import "../styles/about.css";

const About = () => {
  return (
    <Container>
      <div>
        <div className="aboutStyle">
          <p>
            ABOUT <span className="line"></span>
          </p>
          <h1>ABOUT US </h1>
        </div>
        <div className="aboutUsDetails">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ul>
              <li>
                <span className="checkmarkStyle">
                  <DoneAllOutlinedIcon />
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </li>
              <li>
                <span className="checkmarkStyle">
                  <DoneAllOutlinedIcon />
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit
              </li>
              <li>
                <span className="checkmarkStyle">
                  <DoneAllOutlinedIcon />
                </span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </li>
            </ul>
          </div>
          <div>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.<br></br>
            <Button className="button2Style">Learn More</Button>
          </div>
        </div>
        <div className="cardsStyle">
          <Card.Body className="eachCardStyle">
            <Card.Title className="cardtitleStyle">
              <span className="iconStyle">
                <SentimentSatisfiedOutlinedIcon fontSize="large" />
              </span>
              232
            </Card.Title>
            <Card.Text className="cardTextStyle">
              <span className="textSpan">Happy Clients</span> consequuntur quae
              qui deca rode
            </Card.Text>
            <Card.Text className="findOutStyle">Find out more »</Card.Text>
          </Card.Body>
          <Card.Body className="eachCardStyle">
            <Card.Title className="cardtitleStyle">
              <span className="iconStyle">
                <ReceiptLongOutlinedIcon fontSize="large" />
              </span>
              521
            </Card.Title>
            <Card.Text className="cardTextStyle">
              <span className="textSpan">Projects</span> adipisci atque cum quia
              aut numquam
            </Card.Text>
            <Card.Text className="findOutStyle">Find out more »</Card.Text>
          </Card.Body>
          <Card.Body className="eachCardStyle">
            <Card.Title className="cardtitleStyle">
              <span className="iconStyle">
                <HeadsetMicOutlinedIcon fontSize="large" />
              </span>
              1463
            </Card.Title>
            <Card.Text className="cardTextStyle">
              <span className="textSpan">Hours Of Support</span> aut commodi
              quaerat. Aliquam ratione
            </Card.Text>
            <Card.Text className="findOutStyle">Find out more »</Card.Text>
          </Card.Body>
          <Card.Body className="eachCardStyle">
            <Card.Title className="cardtitleStyle">
              <span className="iconStyle">
                <PeopleOutlineOutlinedIcon fontSize="large" />
              </span>
              15
            </Card.Title>
            <Card.Text className="cardTextStyle">
              <span className="textSpan">Hard Workers</span> rerum asperiores
              dolor molestiae doloribu
            </Card.Text>
            <Card.Text className="findOutStyle">Find out more »</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
};

export default About;
