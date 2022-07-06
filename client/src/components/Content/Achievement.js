import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import "./Achivement.css";
import achTopIcon from "../../Images/newImg/ach.png";
import bullet_icon from "../../Images/bullet_icon.svg";
import award_1 from "../../Images/award_1.jpg";
import award_2 from "../../Images/award_2.jpg";
import award_3 from "../../Images/award_3.jpg";
import award_4 from "../../Images/award_4.jpg";
import award_5 from "../../Images/award_5.jpg";
import award_6 from "../../Images/award_6.jpg";
import award_7 from "../../Images/award_7.jpg";
import award_8 from "../../Images/award_8.jpg";
import award_9 from "../../Images/award_9.jpg";
import award_10 from "../../Images/award_10.jpg";
import a1 from "../../Images/newImg/a1.jpg";
import a2 from "../../Images/newImg/a2.jpg";
import a3 from "../../Images/newImg/a3.jpg";
import a4 from "../../Images/newImg/a4.jpg";
import a5 from "../../Images/newImg/a5.jpg";
import a6 from "../../Images/newImg/a6.jpg";
import a7 from "../../Images/newImg/a7.jpg";
import a8 from "../../Images/newImg/a8.jpg";
import a9 from "../../Images/newImg/a9.jpg";
import a10 from "../../Images/newImg/a10.png";
import a11 from "../../Images/newImg/a11.png";
import a12 from "../../Images/newImg/a12.jpg";
import { Col, Row } from "react-bootstrap";
function Achievements(props) {
  const { cover, sidebar_data, side_heading, side_sub_heading } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, steIsShow] = useState(false);
  const handleScroll = (e) => {
    console.log("asd");
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
          <div className={`f-2 f-500 mb-3`} style={{ color: "#1FDC00ED" }}>
            <img
              src={achTopIcon}
              style={{ width: "4rem", marginRight: "1rem" }}
            />
            Achievements & Laurels
          </div>
          <div>
            <div className="d-flex gap-2 mt-1">
              <div>
                <div className="color-grey f-500">
                  HGS proudly highlights its achievements and presents the best
                  of its students, whether they are excelling academically,
                  athletically or in service to the community. We hope to
                  inspire more students to excel, their achievements ultimately
                  make the school become stronger.By highlighting student
                  achievements, we aim to eliminate self-doubt and build
                  confidence in our students that hard work is important and is
                  making an impact. In turn, this confidence can carry over to
                  other facets of their young lives, including making smart
                  choices when faced with several challenges as they grow up.
                </div>
                <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1.5rem" }}>
                    <b>School’s Achievements</b>
                  </p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <img src={bullet_icon} />
                      Global School Award for Innovation in Pedagogical
                      Practices in 2020
                    </li>
                    <li>
                      <img src={bullet_icon} />
                      Best Teaching Excellence Award by International School
                      Award held at Dubai in 2018
                    </li>
                    <li>
                      {" "}
                      <img src={bullet_icon} />
                      Indian School Award in 2018
                    </li>
                    <li>
                      {" "}
                      <img src={bullet_icon} />
                      National School Award 2018
                    </li>
                    <li>
                      <img src={bullet_icon} />
                      Global Sustainable School Award 2017 as a recognition of
                      its efforts towards community service and environment
                    </li>
                  </ul>
                </div>
                <Col>
                  <Row style={{ marginTop: "0.5rem" }}>
                    <Col>
                      <img className="awardimg" src={award_1} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_2} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_3} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1.5rem" }}>
                    <Col>
                      <img className="awardimg" src={award_4} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_5} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_6} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1.5rem" }}>
                    <Col>
                      <img className="awardimg" src={award_7} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_8} />
                    </Col>
                    <Col>
                      <img className="awardimg" src={award_9} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1.5rem" }}>
                    <Col>
                      <img className="awardimg" src={award_10} />
                    </Col>
                  </Row>
                </Col>
                <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1.5rem" }}>
                    <b>Students' Achievements</b>
                  </p>
                </div>
                <Row>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a1} />
                      <p className="ac">
                        <b>
                          District Level Clay Modelling Competition organized by
                          Bal Bhawan in Jan 2021
                        </b>
                      </p>
                      <p className="acdetails">
                        Mayank Sharma (Grade VIII) - 2nd position
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a2} />
                      <p className="ac">
                        <b>District Road Safety Festival, February 2021</b>
                      </p>
                      <p className="acdetails">
                        Aniket (Grade IX) - 3rd position
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a3} />
                      <p className="ac">
                        <b>Inter-School ‘Baby Show Competition’ in Feb 2021</b>
                      </p>
                      <p className="acdetails">
                        Vashnavi Shukla (Grade 1) - 1st position
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a4} />
                      <p className="ac">
                        <b>District Level JAM Competition in August 2020</b>
                      </p>
                      <p className="acdetails">
                        Nihal (Grade VII) - 2nd position
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a5} />
                      <p className="ac">
                        <b>
                          State Level Cricket Tournament held in Rohtak, Haryana
                        </b>
                      </p>
                      <p className="acdetails">
                        Yash Student (Grade XI) - 1st position
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a10} />
                      <p className="ac">
                        <b>District Road Safety Festival, February 2021</b>
                      </p>
                      <p className="acdetails">
                        Model of a sustainable city on “Panchtatva” by students
                        of primary
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a7} />
                      <p className="ac">
                        <b>
                          Open Football Tournament organized by Shiv Football
                          Club
                        </b>
                      </p>
                      <p className="acdetails">
                        Nisar Ali (Grade XII ) - Runner up
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg" src={a8} />
                      <p className="ac">
                        <b>Political Science Olympiad</b>
                      </p>
                      <p className="acdetails">
                        Diksha (Grade XII) - Gold medal, Vasudev (Grade XII) -
                        Silver medal, Lovely (Grade XII) - Bronze medal
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <Col>
                    <div className="acscard" style={{ height: "470px" }}>
                      <img className="acsimg" src={a9} />
                      <p className="ac">
                        <b>Inter-School Science Fiesta</b>
                      </p>
                      <p className="acdetails">
                        Ridheeshree Nayak (Grade IX) and Chirag Sharma (Grade
                        VIII)- 2nd position in Science Quiz. Krishna Mohan
                        Sharma - 2nd position in Web Designing.
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard" style={{ height: "470px" }}>
                      <img className="acsimg" src={a6} />
                      <p className="ac">
                        <b>
                          A RUN FOR ENVIRONMENT-A RACE organised by Panjabi
                          Samaj Sabha Faridabad & Rotary Club Midtown RY 2021-22
                        </b>
                      </p>
                      <p className="acdetails">
                        Tapish Nagar (Grade XI) - 1st position
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                  <p style={{ fontSize: "1.5rem" }}>
                    <b>Other Achievements</b>
                  </p>
                  <p style={{ fontSize: "1rem" }}>
                    Cultural & Student Exchange programmes with schools of
                    Malaysia and Vietnam
                  </p>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg1" src={a11} />
                    </div>
                  </Col>
                  <Col>
                    <div className="acscard">
                      <img className="acsimg1" src={a12} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Achievements;
