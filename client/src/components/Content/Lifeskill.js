import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import life_skill_1 from "../../Images/life_skill_1.jpg";
import life from "../../Images/life.png";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import { Col, Row } from "react-bootstrap";

function Lifeskill(props) {
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
        <div className="circle-div">
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "0 0 100px 100px",
              marginLeft: "45%%",
              marginTop: "-8rem",
              backgroundColor: "#06C5AED1",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "0 0 100px 100px",
              marginLeft: "50.5%",
              marginTop: "-11rem",
              backgroundColor: "#FF8C22D1",
            }}
          ></div>
        </div>
        <div style={{ width: "min-content" }}>
          <SideBar
            sidebar_data={sidebar_data}
            side_heading={side_heading}
            side_sub_heading={side_sub_heading}
          />
          <Contact />
        </div>
        <div>
          <div className={`f-2 f-500 `} style={{ color: "#FF8C22E8" }}>
            <img
              src={life}
              style={{ width: "4rem", marginRight: "1rem", color: "#FF8C22E8" }}
            />
            Life Skill Curriculum
          </div>
          <div
            style={{
              width: "100%",
              height: "30rem",
              marginBottom: "2rem",
            }}
          >
            <img
              src={life_skill_1}
              style={{
                width: "20rem",
                border: "4px solid #FF8C22",
                filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25))",
                margin: "1.5rem",
                alignItems: "left",
              }}
            />
            <p
              className="color-grey f-500"
              style={{
                marginLeft: "25rem",
                marginTop: "-17rem",
                paddingRight: "1.5rem",
              }}
            >
              Adapting the Life Skill Curriculum in the daily routine of every
              child at the primary stage is a very crucial part of our
              education. The basic hygiene importance like handwashing and daily
              bathing, and the value of chivalry and gratitude towards one
              another must be taught at their impressionable age and fortified
              over the years. The three components of the Life Skill Curriculum;
              the individual life-skill, the social skill, and the effective
              decision making skills are some of the eminent topics of our
              syllabus. To not only make our students academic geniuses, but to
              also refine their social and personal skills is what we aim for.
            </p>
            <p
              className="color-grey f-500"
              style={{
                marginLeft: "2rem",
                marginTop: "1.5rem",
                textAlign: "left",
                paddingRight: "1.5rem",
              }}
            >
              We believe in testing and creating challenges for our students, so
              they can break their barriers and overcome their judgemental and
              stereotypical fears. To educate all of them about daily chores,
              irrespective of the gender, makes the batchmates comfortable and
              more open to these topics. The ten core Life Skills adopted by our
              education system are:-
            </p>
          </div>
          <Row
            style={{
              marginLeft: "3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              fontSize: "1.2rem",
            }}
          >
            <Col>
              <ol style={{ listStyleType: "none" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #06C5AE",
                    padding: "0.2rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    1.
                  </p>
                </div>
                <li
                  style={{
                    backgroundColor: "rgba(6, 197, 174, 0.05)",
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Self-awareness
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginTop: "1rem",
                    border: "5px solid #06C5AE",
                    padding: "0.2rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    3.
                  </p>
                </div>
                <li
                  style={{
                    backgroundColor: "rgba(6, 197, 174, 0.05)",
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Empathy
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #06C5AE",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px solid ",
                    }}
                  >
                    5.
                  </p>
                </div>
                <li
                  style={{
                    backgroundColor: "rgba(6, 197, 174, 0.05)",
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Critical Thinking
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #06C5AE",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    7.
                  </p>
                </div>
                <li
                  style={{
                    backgroundColor: "rgba(6, 197, 174, 0.05)",
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Creative Thinking
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #06C5AE",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    9.
                  </p>
                </div>
                <li
                  style={{
                    backgroundColor: "rgba(6, 197, 174, 0.05)",
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  Decision Making
                </li>
              </ol>
            </Col>
            <Col>
              <ol style={{ listStyleType: "none" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #FF8C22",
                    padding: "0.2rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    2.
                  </p>
                </div>
                <li
                  style={{
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                    backgroundColor: "#FF8C220D",
                  }}
                >
                  Problem Solving
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginTop: "1rem",
                    border: "5px solid #FF8C22",
                    padding: "0.2rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    4.
                  </p>
                </div>
                <li
                  style={{
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                    backgroundColor: "#FF8C220D",
                  }}
                >
                  Effective Communication
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #FF8C22",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    6.
                  </p>
                </div>
                <li
                  style={{
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                    backgroundColor: "#FF8C220D",
                  }}
                >
                  Interpersonal Relationship
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #FF8C22",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    8.
                  </p>
                </div>
                <li
                  style={{
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                    backgroundColor: "#FF8C220D",
                  }}
                >
                  Coping with stress
                </li>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    border: "5px solid #FF8C22",
                    padding: "0.2rem",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "1px  solid ",
                    }}
                  >
                    10.
                  </p>
                </div>
                <li
                  style={{
                    width: "17rem",
                    marginTop: "-2.3rem",
                    marginLeft: "70px",
                    paddingLeft: "0.3rem",
                    paddingBottom: "0.2rem",
                    backgroundColor: "#FF8C220D",
                  }}
                >
                  Coping with Emotion
                </li>
              </ol>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Lifeskill;
