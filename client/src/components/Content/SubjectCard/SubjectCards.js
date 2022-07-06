import React from "react";
import { Row, Col } from "react-bootstrap";
import PCM from "./PCM";
import PCB from "./PCB";
import Commerce from "./Commerce";
import Humanities from "./Humanities";

const SubjectCards = () => {
  return (
    <div style={{ marginLeft: "7rem" }}>
      <Col>
        <Row>
          <Col>
            <PCM />
          </Col>
          <Col>
            <PCB />
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Commerce />
          </Col>
          <Col>
            <Humanities />
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default SubjectCards;
