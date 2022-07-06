import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import badminton from "../../Images/sports/badminton.jpg";
import taekwondo from "../../Images/sports/Taekwondo 2.jpeg";
import table_tennis from "../../Images/sports/Table Tennis.JPG";
import chess from "../../Images/sports/chess.jpg";
import yoga from "../../Images/sports/yoga.jpg";
import football from "../../Images/sports/Football.jpeg";
import athletics from "../../Images/sports/Athletics.JPG";
import carrom from "../../Images/sports/Carrom Board.jpeg";
import judo from "../../Images/sports/Judo Karate.JPG";
import sicon from "../../Images/newImg/sicon.png";
import { Card, Col, Row } from "react-bootstrap";

const SportsCard = (props) => {
  const { cover, sidebar_data, side_heading, side_sub_heading } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, steIsShow] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    }
    if (e.target.scrollTop === 0) {
      setIsScrolled(false);
    }
  };
  const handleClick = () => {
    steIsShow(!isShow);
    console.log(isShow);
  };
  return (
    <div className="content_main" onScroll={handleScroll}>
      <Navbar isScrolled={isScrolled} handleClick={handleClick} />
      <NavbarMenu isShow={isShow} handleClick={handleClick} />
      <Landing video={false} cover={cover} />
      <div className="contentmain_cont">
        <div style={{ width: "min-content" }}>
          <SideBar
            sidebar_data={sidebar_data}
            side_heading={side_heading}
            side_sub_heading={side_sub_heading}
          />
          <Contact />
        </div>
        <div>
          <div className={`f-2 f-500 mb-3`} style={{ color: "#FF8C22ED" }}>
            <img src={sicon} style={{ width: "4rem", marginRight: "1rem" }} />
            Sports & Fitness
          </div>
          <div className="d-flex gap-2 mt-1">
            <div>
              <div className="color-grey f-500">
                Sports and Fitness improve the physical immunity and mental
                agility of students. Learning is induced, in a healthy and
                competitive environment and a good combination of outdoor games
                and indoor activities keeps them engaged and active. Inculcation
                of life skills like discipline, time management, ability to make
                decisions, teamwork, leadership, patience and learning from
                failure are developed only when children play sports regularly,
                and these skills are equally important when it comes to studies
                and management.
              </div>
            </div>
          </div>
          <div>
            <Col>
              <Row>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                      src={athletics}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Athletics</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                      src={badminton}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Badminton</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={carrom}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Carrom Board</b>
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "-1rem" }}>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={chess}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Chess</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={football}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Football</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={judo}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Judo Karate</b>
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "-1rem" }}>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={table_tennis}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Table Tennis</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={taekwondo}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Taekwondo</b>
                    </p>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "15rem",
                      height: "15rem",
                      boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      margin: "auto",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      src={yoga}
                      style={{ height: "12rem", marginLeft: "-0.5px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                      <b>Yoga</b>
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SportsCard;
