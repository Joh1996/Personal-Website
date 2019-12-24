import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../css/MyStyle.scss";

/**
 * Image Imports Here
 */
import PROFILE from "../imgs/profile.jpg";

const Main = () => {
  return (
    <Container className="main-container">
      <Row>
        <Col id="image-col" xs={6} md={4}>
          <Image id="profile-picture" src={PROFILE} roundedCircle />
        </Col>
        <Col className="profile-desc">
          <Row id="row-desc">
            <p id="profile-about">
              Hi! I'm Justin Ji Hoon Oh, a
              <font color="#FFC119"> Programmer </font>,
              <font color="#FFC119"> Web Developer </font>, and an aspiring
              Portrait <font color="#FFC119"> Artist </font>. I am a University
              of Queensland graduate with a Bachelor of Science in Computer
              Science and Psychology.
            </p>
            <p id="profile-loc">
              I am currently based in <font color="#FFC119"> Brisbane </font>,
              Queensland Australia
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="social-row">
        <Col id="social-col">
          <SocialIcon
            id="social-icon"
            url="https://www.facebook.com/justin.oh.1088"
            style={{ height: 75, width: 75 }}
            target="_blank"
          />
          &nbsp;
          <SocialIcon
            id="social-icon"
            url="https://www.instagram.com/_justinwastaken/"
            style={{ height: 75, width: 75 }}
            target="_blank"
          />
          &nbsp;
          <SocialIcon
            id="social-icon"
            url="https://github.com/Joh1996"
            style={{ height: 75, width: 75 }}
            target="_blank"
          />
          &nbsp;
          <SocialIcon
            id="social-icon"
            url="https://www.flickr.com/photos/156683253@N07/"
            style={{ height: 75, width: 75 }}
            target="_blank"
          />
          &nbsp;
          <SocialIcon
            id="social-icon"
            url="mailto:justin@dorrai.net"
            style={{ height: 75, width: 75 }}
            target="_blank"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
