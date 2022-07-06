import React from "react";
import { GiBrain, GiStairsGoal, GiPuzzle } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Col, Row } from "react-bootstrap";

const PedagogiSkill = () => {
  return (
    <div
      style={{
        padding: "1rem",
        marginLeft: "-1rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        borderRadius: "5px",
        border: "1px solid #ffedf1",
        boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Row>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                marginLeft: "8%",
                color: "green",
              }}
            >
              Critical Thinking
            </p>
            <div>
              <Row>
                <Col xs={7}>
                  <div
                    style={{
                      textAlign: "left",
                      width: "15rem",
                      marginLeft: "15%",
                    }}
                  >
                    Critical thinking is generating questions, evaluating
                    information and arguments, making connections, identifying
                    patterns, reasoning to solve problems in the real world.
                  </div>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "6rem",
                      height: "6rem",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px #000000",
                      marginLeft: "20%",
                      marginTop: "-11px",
                    }}
                  >
                    <GiBrain style={{ width: "4rem", height: "6rem" }} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                textAlign: "left",
                marginLeft: "8rem",
                marginLeft: "33%",
                color: "purple",
              }}
            >
              Communication
            </p>
            <Row>
              <Col xs={2}>
                <div
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000",
                    marginTop: "1rem",
                  }}
                >
                  <AiOutlineMessage style={{ width: "4rem", height: "6rem" }} />
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "left",
                    width: "15rem",
                    marginLeft: "8rem",
                    marginLeft: "20%",
                  }}
                >
                  Communication is appropriately interacting with others to
                  convey meaning and gain understanding for multiple purposes,
                  settings, and audiences including the digital environment.
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                marginLeft: "8%",
                color: "blue",
              }}
            >
              Citizenship
            </p>
            <Row>
              <Col xs={7}>
                <div
                  style={{
                    textAlign: "left",
                    width: "15rem",
                    marginLeft: "15%",
                  }}
                >
                  Citizenship is respectfully and positively impacting others
                  and being actively involved in addressing community, national
                  and/or global issues.
                </div>
              </Col>
              <Col xs={5}>
                <div
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000",
                    marginLeft: "20%",
                  }}
                >
                  <FaRegHandshake style={{ width: "4rem", height: "6rem" }} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                textAlign: "left",
                marginLeft: "8rem",
                marginLeft: "33%",
                color: "#fad102",
              }}
            >
              Creativity
            </p>
            <Row>
              <Col xs={2}>
                <div
                  style={{
                    backgroundColor: "#fad102",
                    color: "white",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000",
                  }}
                >
                  <HiOutlineLightBulb
                    style={{ width: "4rem", height: "6rem" }}
                  />
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "left",
                    width: "15rem",
                    marginLeft: "8rem",
                    marginLeft: "20%",
                  }}
                >
                  Creativity is generating ideas and approaches to design
                  innovations, construct solutions, build understanding, and
                  express perspectives.
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                marginLeft: "8%",
                color: "red",
              }}
            >
              Growth mindset
            </p>
            <Row>
              <Col xs={7}>
                <div
                  style={{
                    textAlign: "left",
                    width: "15rem",
                    marginLeft: "15%",
                  }}
                >
                  Growth mindset is working through challenges showing tenacity,
                  perseverance, resilience, self regulation and self-advocacy.
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000",
                    marginLeft: "20%",
                  }}
                >
                  <GiStairsGoal style={{ width: "4rem", height: "6rem" }} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                textAlign: "left",
                marginLeft: "8rem",
                marginLeft: "33%",
                color: "orange",
              }}
            >
              Collaboration
            </p>
            <Row>
              <Col xs={2}>
                <div
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    boxShadow: "0px 0px 5px #000000",
                  }}
                >
                  <GiPuzzle style={{ width: "4rem", height: "6rem" }} />
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "left",
                    width: "15rem",
                    marginLeft: "8rem",
                    marginLeft: "20%",
                  }}
                >
                  Collaboration is working interdependently, learning from and
                  contributing to the learning of others for a shared purpose in
                  a wide range of environments.
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PedagogiSkill;
