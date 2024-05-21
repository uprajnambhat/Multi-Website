import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/img/slide/slide-1.jpg";
import slide2 from "../assets/img/slide/slide-2.jpg";
import slide3 from "../assets/img/slide/slide-3.jpg";
import { Button } from "react-bootstrap";
import "../styles/home.css";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item className="carouseImglStyle">
        <img className="fitImg" src={slide1} text="First slide" />
        <Container>
          <Carousel.Caption className="carouselStyle">
            <h2>Welcome to Multi</h2>
            <p>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <Button className="buttonStyle">Read More</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="carouseImglStyle">
        <img className="fitImg" src={slide2} text="Second slide" />
        <Container>
          <Carousel.Caption className="carouselStyle">
            <h2>Lorem Ipsum Dolor</h2>
            <p>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto
            </p>
            <Button className="buttonStyle">Read More</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="carouseImglStyle">
        <img className="fitImg" src={slide3} text="Third slide" />
        <Container>
          <Carousel.Caption className="carouselStyle">
            <h2>Sequi ea ut et est quaerat</h2>
            <p>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <Button className="buttonStyle">Read More</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
