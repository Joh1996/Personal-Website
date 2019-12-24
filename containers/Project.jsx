import React from "react";
import { Media, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import {
  FaSass,
  FaReact,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaAws,
  FaGithub,
  FaNpm
} from "react-icons/fa";
import Git from "../icons/git.svg";
import Lightroom from "../icons/lightroom.svg";
import Photoshop from "../icons/photoshop.svg";
import Yarn from "../icons/yarn.svg";

import "../css/MyStyle.scss";

class Project extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <body className="p-body">
        <div className="p-header" />
        <div className="p-container-one">
          <Container>
            <Row>
              <Col class="p-col-1">
                <p className="p-titles">
                  <a
                    className="p-links"
                    href="https://github.com/Joh1996/Queensland-Alliance-for-Environmental-Health-Sciences---Final-Report"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Queensland Alliance of Environmental Health Sciences Social
                    Media Project
                  </a>
                </p>
                <Media id="p-media">
                  <Media.Body id="p-project-desc">
                    <p>
                      Final year capstone project involving{" "}
                      <font color="#FFC119">React</font>-application development
                      and <font color="#FFC119">AWS</font> Cloud Servers. Team
                      of eight members worked with the University of Queensland
                      and NIVA (Norwegian Institute for Water Research) to
                      create a <font color="#FFC119">social media web</font>{" "}
                      application for scientists.
                    </p>
                    <p>
                      Our tasks included prototyping,{" "}
                      <font color="#FFC119">user-experience research</font>,
                      <font color="#FFC119"> front-end </font> web development,
                      <font color="#FFC119"> back-end</font> development (using
                      Django and Python), and the presentation of the minimum
                      viable product as well as the final working product.
                      During development, the team was directly involved in
                      meetings with clients and documentation of work.
                    </p>
                    <p>
                      Full documentation of work available on Github. Source
                      code is <font color="red">unavailable</font> per
                      University Guidelines.
                    </p>
                  </Media.Body>
                </Media>
              </Col>
              <Col>
                <p className="p-titles">
                  <a
                    className="p-links"
                    href="https://github.com/Joh1996/MCTS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MCTS - Monte Carlo Tree Search
                  </a>
                </p>
                <Media>
                  {/* <img
                    width={300}
                    height={300}
                    className="p-media-one"
                    src={QAEHS}
                    alt="Generic placeholder"
                  /> */}
                  <Media.Body id="p-project-desc">
                    <p>
                      An <font color="#FFC119">Artificial Intelligence</font>{" "}
                      project that involved creating a set of decisions the
                      agent will make in order to reach a goal state.
                    </p>
                    <p>
                      In this project, I utilised the{" "}
                      <font color="#FFC119">Monte Carlo Tree Search </font>
                      (MCTS) for an agent's decision making in a 2D Observable
                      Environment. Using <font color="#FFC119">Java</font> as
                      the language of choice, the project required the
                      development of an agent to play a game. The game could be
                      won if an agent successfully calculates the most efficient
                      set of <font color="#FFC119">Action States</font> given
                      variety of <font color="#FFC119">Game States</font> and{" "}
                      <font color="#FFC119">Transition States</font>.
                    </p>
                  </Media.Body>
                </Media>
              </Col>
              <Col>
                <p className="p-titles">
                  <a
                    className="p-links"
                    href="https://github.com/Joh1996/Textual-Search"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Java Textual Search
                  </a>
                </p>
                <Media>
                  <Media.Body id="p-project-desc">
                    <p>
                      <font color="#FFC119"> Java </font> algorithm and data
                      structures assessment involving word search. While it was
                      a part of a university assessment, this project has taught
                      me the importance of quick and efficient{" "}
                      <font color="#FFC119"> algorithms </font> as well as{" "}
                      <font color="#FFC119"> data structures </font>. Given 1
                      million+ lines of strings, this assessment required the
                      utilisation of Java
                      <font color="#FFC119"> 'tries' </font> to lookup a given
                      word or a phrase in a timely manner.
                    </p>
                  </Media.Body>
                </Media>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-container-two">
          <div className="p-icon-loop">
            <a
              id="p-git"
              href="https://github.com/joh1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="75px" />
              &nbsp; Check out my Github page
            </a>
          </div>
        </div>
        <div className="p-container-three">
          <Container>
            <Row>
              <Col>
                <p className="p-titles">
                  <a
                    className="p-links"
                    href="https://github.com/Joh1996/DECO3500---Research-Prototype"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Social Application Research/Prototype
                  </a>
                </p>
                <Media>
                  <Media.Body id="p-project-desc">
                    <p>
                      This project involved{" "}
                      <font color="#FFC119">pitching</font> a solution to a
                      specific problem in the web domain. My team chose to
                      tackle the issue of{" "}
                      <font color="#FFC119">'spread of false information'</font>
                      on social media and popular news outlets.
                    </p>
                    <p>
                      Our solution was to <font color="#FFC119">design</font> a
                      web application that could potentially allow users to
                      subjectively and objectively rate popular media outlets
                      and journalists based on their work.
                    </p>
                    <p>
                      {" "}
                      The project itself involved heavy{" "}
                      <font color="#FFC119">User Research</font> and utilisation
                      of prototyping tools such as{" "}
                      <font color="#FFC119">Adobe XD</font>,{" "}
                      <font color="#FFC119">Marvel</font>, and
                      <font color="#FFC119"> inVision</font>.
                    </p>
                  </Media.Body>
                </Media>
              </Col>
              <Col>
                <p className="p-titles">
                  <a
                    className="p-links"
                    href="https://github.com/Joh1996/JennieBot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Simple Discord Bot
                  </a>
                </p>
                <Media>
                  <Media.Body id="p-project-desc">
                    <p>
                      A very simple Discord <font color="#FFC119">Bot</font>{" "}
                      using <font color="#FFC119">Javascript</font>. This is a
                      very simple <font color="#FFC119">personal project </font>
                      that I have been working on with a friend. It involves
                      utilising <font color="#FFC119">discord.js</font> and{" "}
                      <font color="#FFC119">Amazon Web Services</font>.
                    </p>
                    <p>
                      Its functionalities include{" "}
                      <font color="#FFC119">basic Discord bot commands</font>,
                      playing k-pop, and posting{" "}
                      <font color="#FFC119">memes</font>.
                    </p>
                    <p>
                      It is currently being hosted on a free AWS{" "}
                      <font color="#FFC119">EC2</font> server.
                    </p>
                  </Media.Body>
                </Media>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-container-five">
          <Container>
            <Row>
              <Col>
                <div>
                  <h2 id="p-c-header"> My Projects </h2>
                  <Slider {...settings} className="p-carousel">
                    <div className="p-project-images">
                      <a
                        id="p-linker"
                        href="https://github.com/Joh1996/Queensland-Alliance-for-Environmental-Health-Sciences---Final-Report"
                        rel="noopener noreferrer"
                      >
                        <p>
                          Queensland Alliance of Environmental Health Sciences -
                          Social Media Project
                        </p>
                      </a>
                    </div>
                    <div className="p-project-images">
                      <a
                        id="p-linker"
                        href="https://github.com/Joh1996/Queensland-Alliance-for-Environmental-Health-Sciences---Final-Report"
                        rel="noopener noreferrer"
                      >
                        <p>MCTS - Monte Carlo Tree Search</p>
                      </a>
                    </div>
                    <div className="p-project-images">
                      <a
                        id="p-linker"
                        href="https://github.com/Joh1996/Textual-Search"
                        rel="noopener noreferrer"
                      >
                        <p>Java Textual Search</p>
                      </a>
                    </div>
                    <div className="p-project-images">
                      <a
                        id="p-linker"
                        href="https://github.com/Joh1996/DECO3500---Research-Prototype"
                        rel="noopener noreferrer"
                      >
                        <p>Social Application Research and Prototype</p>
                      </a>
                    </div>
                    <div className="p-project-images">
                      <a
                        id="p-linker"
                        href="https://github.com/Joh1996/JennieBot"
                        rel="noopener noreferrer"
                      >
                        <p>Simple Discord Bot</p>
                      </a>
                    </div>
                  </Slider>
                </div>
              </Col>
              <Col />
            </Row>
          </Container>
          <div className="p-container-four">
            <Container>
              <Row id="p-work"> Working with </Row>
              <Col id="p-icons-one">
                <FaJava size="75px" />
                &nbsp;
                <FaPython size="75px" />
                &nbsp;
                <FaSass size="75px" />
                &nbsp;
                <FaHtml5 size="75px" />
                &nbsp;
                <FaJs size="75px" />
                &nbsp;
                <FaReact size="75px" />
                &nbsp;
                <FaNpm size="75px" />
                &nbsp;
              </Col>
              <Col id="p-icons-two">
                <FaAws size="75px" />
                &nbsp;
                <img id="p-yarn" src={Yarn} alt="" />
                <img id="p-ps" src={Git} alt="" />
                <FaGithub size="75px" />
                <img id="p-ps" src={Photoshop} alt="" />
                <img id="p-ps" src={Lightroom} alt="" />
              </Col>
            </Container>
          </div>
          <div id="p-footer" />
        </div>
      </body>
    );
  }
}

export default Project;
