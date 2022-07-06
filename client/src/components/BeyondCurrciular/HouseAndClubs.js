import React from "react";
import { Col, Row } from "react-bootstrap";
import { houses_school } from "../../variable";
import SideBar from "../SideBar/SideBar";
import club_heading_icon from "../../Images/clubs/clubHeadingIcon.png";
import house_club_top from "../../Images/clubs/houseClubsTop.svg";

function HouseAndClubs(props) {
  const { data } = props;
  return (
    <div>
      <Row>
        <Row
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <Col xs={1}>
            <img src={house_club_top} alt="" style={{ width: "100%" }} />
          </Col>
          <Col>
            <h2
              style={{
                color: "#F91984ED",
                fontWeight: "600",
              }}
            >
              Houses and Clubs
            </h2>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 20,
          }}
        >
          <Col xs={1}>
            <h2>Clubs</h2>
          </Col>
        </Row>
        <Row style={{ marginBottom: 40, marginLeft: 20 }}>
          <p>
            The school has varied clubs which help reach and accomplish the
            vision and mission that the school stands by. The values and ethos
            of the school are promoted and imbibed through these clubs. The
            clubs are headed by the club in-charges. They have members who
            understand and teach and who help in facilitating the work and the
            activities that the club undertakes at school.
          </p>
        </Row>
      </Row>
      {data.map((item, ind) =>
        ind % 2 != 0 ? (
          <Row
            style={{
              margin: 0,
              padding: "20px",
              backgroundColor: "#ED037308",
              padding: "3rem 1rem",
            }}
          >
            <Col>
              <Row style={{ marginBottom: 20 }}>
                {/* <Col xs={2}> */}
                {/* </Col> */}
                <Col>
                  <h3 style={{ fontWeight: 600 }}>
                    {item?.icon && (
                      <img
                        src={item.icon}
                        alt=""
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                    )}

                    {item.title}
                  </h3>
                </Col>
              </Row>
              {item.description}
            </Col>
            <Col md={5}>
              <img
                src={item.image}
                alt="Clubs Image"
                style={{
                  width: "100%",
                  border: "3px solid",
                  borderColor: "#F91984ED",
                  boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                }}
              />
            </Col>
          </Row>
        ) : (
          <Row
            style={{ margin: 0, padding: "20px", backgroundColor: "#0386D608" }}
          >
            <Col md={5}>
              <img
                src={item.image}
                alt="Clubs Image"
                style={{
                  width: "100%",
                  border: "3px solid",
                  borderColor: "#F91984ED",
                  boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                }}
              />
            </Col>
            <Col>
              <Row style={{ marginBottom: 20 }}>
                {/* <Col xs={2}> */}
                {/* </Col> */}
                <Col>
                  <h3>
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: "50px",
                          marginRight: "10px",
                        }}
                      />
                    )}

                    {item.title}
                  </h3>
                </Col>
              </Row>

              {item.description}
            </Col>
          </Row>
        )
      )}
      {houses_school.map((item, index) => (
        <div
          className={`d-flex mt-5 gap-4 ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div>
            <img
              src={item.houseImg}
              style={{
                width: "22rem",
                height: "13rem",
                border: "3px solid",
                borderColor: "#F91984ED",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
          <div>
            <div>
              <h3 style={{ marginBottom: 20, color: item.color }}>
                {item.title}
              </h3>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HouseAndClubs;
