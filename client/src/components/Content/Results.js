import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import toparrow from "../../Images/newImg/toparrow.png";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import "./Results.css";
import { Col, Row } from "react-bootstrap";
import s1 from "../../Images/r10/s1.jpg";
import s2 from "../../Images/r10/s2.jpg";
import s3 from "../../Images/r10/s3.jpg";
import s4 from "../../Images/r10/s4.jpg";
import s5 from "../../Images/r10/s5.jpg";
import s6 from "../../Images/r10/s6.jpg";
import s7 from "../../Images/r10/s7.jpg";
import s8 from "../../Images/r10/s8.jpg";
import s9 from "../../Images/r10/s9.jpg";
import s10 from "../../Images/r10/s10.jpg";
import s11 from "../../Images/r10/s11.jpg";
import s12 from "../../Images/r10/s12.jpg";
import s13 from "../../Images/r10/s13.jpg";
import s14 from "../../Images/r10/s14.jpg";
import s15 from "../../Images/r10/s15.jpg";
import s16 from "../../Images/r10/s16.jpg";
import s17 from "../../Images/r10/s17.jpg";
import s18 from "../../Images/r10/s18.jpg";
import s19 from "../../Images/r10/s19.jpg";
import s20 from "../../Images/r10/s20.jpg";
import s21 from "../../Images/r10/s21.jpg";

import s22 from "../../Images/r12/s22.jpg";
import s23 from "../../Images/r12/s23.jpg";
import s24 from "../../Images/r12/s24.jpg";
import s25 from "../../Images/r12/s25.jpg";
import s26 from "../../Images/r12/s26.png";
import s27 from "../../Images/r12/s27.png";
import s28 from "../../Images/r12/s28.png";
import s29 from "../../Images/r12/s29.png";
import s30 from "../../Images/r12/s30.png";
import s31 from "../../Images/r12/s31.jpg";
import s32 from "../../Images/r12/s32.png";
import s33 from "../../Images/r12/s33.png";
import s34 from "../../Images/r12/s34.jpg";
import s35 from "../../Images/r12/s35.png";
import s36 from "../../Images/r12/s36.jpg";
import s37 from "../../Images/r12/s37.png";
import s38 from "../../Images/r12/s38.png";
import s39 from "../../Images/r12/s39.png";

function Results(props) {
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
          <div className={`f-2 f-500 mb-3`} style={{ color: "#1FDC00ED" }}>
            <img
              src={toparrow}
              style={{ width: "4rem", marginRight: "1rem" }}
            />{" "}
            Results
          </div>
          <Col>
            <Row>
              <div style={{ fontSize: "1.2rem", marginTop: "1.5rem" }}>
                <b>Toppers: X</b>
              </div>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s1} />
                    <div className="details">
                      <p className="sname">Bhoomi Hans</p>
                      <p className="marks">95.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s2} />
                    <div className="details">
                      <p className="sname">Jamil Ahmed Sayyed</p>
                      <p className="marks">95%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s3} />
                    <div className="details">
                      <p className="sname">Nikitaa Shukla</p>
                      <p className="marks">94.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s4} />
                    <div className="details">
                      <p className="sname">Eshaa Shukla</p>
                      <p className="marks">94.2%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s5} />
                    <div className="details">
                      <p className="sname">Arju</p>
                      <p className="marks">93.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s6} />
                    <div className="details">
                      <p className="sname">Kashish</p>
                      <p className="marks">93.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s7} />
                    <div className="details">
                      <p className="sname">Gautam Jha</p>
                      <p className="marks">93.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s8} />
                    <div className="details">
                      <p className="sname">Saumya Srivastava</p>
                      <p className="marks">92.6%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s9} />
                    <div className="details">
                      <p className="sname">Yash Kumar Jha</p>
                      <p className="marks">92%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s10} />
                    <div className="details">
                      <p className="sname">Harsh Maurya</p>
                      <p className="marks">91.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s11} />
                    <div className="details">
                      <p className="sname">Nandini Shukla</p>
                      <p className="marks">91.6%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s12} />
                    <div className="details">
                      <p className="sname">Mayank Kumar</p>
                      <p className="marks">91.4%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s13} />
                    <div className="details">
                      <p className="sname">Shristi Singh</p>
                      <p className="marks">91%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s14} />
                    <div className="details">
                      <p className="sname">Aparna Sharma</p>
                      <p className="marks">89.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s15} />
                    <div className="details">
                      <p className="sname">Ayush Sharma</p>
                      <p className="marks">89.4%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s16} />
                    <div className="details">
                      <p className="sname">Naman Rana</p>
                      <p className="marks">89.2%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s17} />
                    <div className="details">
                      <p className="sname">Neha Yadav</p>
                      <p className="marks">87.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s18} />
                    <div className="details">
                      <p className="sname">Akshat Bajpai</p>
                      <p className="marks">87.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s19} />
                    <div className="details">
                      <p className="sname">Mansi</p>
                      <p className="marks">86.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s20} />
                    <div className="details">
                      <p className="sname">Satyam Jawla</p>
                      <p className="marks">86%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s21} />
                    <div className="details">
                      <p className="sname">Lalit Punetha</p>
                      <p className="marks">85.8%</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row>
              <div style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
                <b>Toppers: XII</b>
              </div>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s22} />
                    <div className="details">
                      <p className="sname">Purva Sharma</p>
                      <p className="marks">96.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s23} />
                    <div className="details">
                      <p className="sname">Muskan Hans</p>
                      <p className="marks">95.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s24} />
                    <div className="details">
                      <p className="sname">Lalit Kumar</p>
                      <p className="marks">94.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s25} />
                    <div className="details">
                      <p className="sname">Nitin Kumar</p>
                      <p className="marks">93.8%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s26} />
                    <div className="details">
                      <p className="sname">Muskan Nimodia</p>
                      <p className="marks">93.4%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s27} />
                    <div className="details">
                      <p className="sname">Soni</p>
                      <p className="marks">92.6%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s28} />
                    <div className="details">
                      <p className="sname">Sanjay Kumar</p>
                      <p className="marks">92.2%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s29} />
                    <div className="details">
                      <p className="sname">Anannya Malviya</p>
                      <p className="marks">92%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s30} />
                    <div className="details">
                      <p className="sname">Mayank Bhadana</p>
                      <p className="marks">92%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s31} />
                    <div className="details">
                      <p className="sname">Arpita Adak</p>
                      <p className="marks">91.6%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s32} />
                    <div className="details">
                      <p className="sname">Anuj Shrivastava</p>
                      <p className="marks">91.4%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s33} />
                    <div className="details">
                      <p className="sname">Deepak Kumar Jha</p>
                      <p className="marks">91.2%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s34} />
                    <div className="details">
                      <p className="sname">Aditya Maurya</p>
                      <p className="marks">90.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s35} />
                    <div className="details">
                      <p className="sname">Jai Juggal</p>
                      <p className="marks">88.6%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s36} />
                    <div className="details">
                      <p className="sname">Vaibhav Namdev</p>
                      <p className="marks">87.8%</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="resultcard">
                    <img className="studentimg" src={s37} />
                    <div className="details">
                      <p className="sname">Sapna</p>
                      <p className="marks">87.8%</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <div>
                  <div className="resultcard">
                    <img className="studentimg" src={s38} />
                    <div className="details">
                      <p className="sname">Dishakha Saini</p>
                      <p className="marks">84.8%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="resultcard">
                    <img className="studentimg" src={s39} />
                    <div className="details">
                      <p className="sname">Yash</p>
                      <p className="marks">84.6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Results;
