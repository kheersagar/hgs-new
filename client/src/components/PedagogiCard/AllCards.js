import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FiMusic } from "react-icons/fi";
import { BiRun } from "react-icons/bi";
import { ImManWoman } from "react-icons/im";
import { GiBlackBook } from "react-icons/gi";
import { IoCalculatorOutline, IoManSharp } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";
import { BsCamera } from "react-icons/bs";

const AllCards = () => {
  return (
    <div style={{ marginTop: "-2.5rem" }}>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #97eef7",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#0adbf2",
                    border: "1px solid #97eef7",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <FiMusic
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Music Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Musical Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #f69dfc",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#d41fe0",
                    border: "1px solid #f69dfc",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <BiRun
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Body Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Bodily-Kinesthetic Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #a5e060",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#66a61e",
                    border: "1px solid #a5e060",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <ImManWoman
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  People Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Interpersonal Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #f5605d",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#ba0c09",
                    border: "1px solid #f5605d",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <GiBlackBook
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Word Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Linguistic Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #be8ced",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#7620c7",
                    border: "1px solid #be8ced",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <IoCalculatorOutline
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Logic Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Logical-Mathematical Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #8877fc",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#290af2",
                    border: "1px solid#8877fc",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <RiPlantLine
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Nature Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Naturalistic</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #f7e881",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#f0d211",
                    border: "1px solid #f7e881",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <IoManSharp
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Self Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Intrapersonal Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "250px",
                height: "200px",
                marginTop: "2rem",
                borderRadius: "20px",
                border: "6px solid #5cf78f",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    width: "240px",
                    height: "4rem",
                    marginLeft: "-17px",
                    marginTop: "-17px",
                    background: "#0dd14e",
                    border: "1px solid #5cf78f",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <BsCamera
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                </div>
                <Card.Title
                  style={{
                    marginLeft: "5px",
                    marginTop: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  Picture Smart
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    marginTop: "1rem",
                  }}
                >
                  <p>Spatial Intelligence</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
