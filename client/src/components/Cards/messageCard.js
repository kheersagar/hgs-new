import React from "react";
import { Row, Col } from "react-bootstrap";
import Theme from "./Theme";
import Skill from "./Skill";
import Coding from "./Coding";
import Finance from "./Finance";
const messageCard = () => {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3
        style={{
          marginTop: "2rem",
          textAlign: "center",
          marginLeft: "-2rem",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "42px",
          lineHeight: "51px",
        }}
      >
        Highlights
      </h3>
      <div style={{ marginLeft: "3rem" }}>
        <Row>
          <Col>
            <Theme />
          </Col>
          <Col>
            <Skill />
          </Col>
        </Row>
        <Row>
          <Col>
            <Coding />
          </Col>
          <Col>
            <Finance />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default messageCard;
