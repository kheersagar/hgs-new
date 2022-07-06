import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import arrow from "../../Images/Rectangle 66.svg";
import mainIcon from "../../Images/mission_icon.svg";
import dot from "../../Images/4dot.png";

import "./Content.css";

function Vision(props) {
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
      <div style={{ marginBottom: "-6rem" }}>
        <div
          style={{
            width: "204.11px",
            height: "204.64px",
            marginLeft: "74%",
            marginTop: "-7rem",
            background: "#F919848A",
            borderRadius: "0 0 100px 100px",
          }}
        ></div>
        <div
          style={{
            width: "204.11px",
            height: "204.64px",
            marginLeft: "83.5%",
            marginTop: "-11rem",
            background: "#1FDC007D",
            borderRadius: "0 0 100px 100px",
          }}
        ></div>
      </div>
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
          <div className={`f-2 f-500 mb-3`} style={{ color: "#23E303F5" }}>
            <img src={mainIcon} style={{ marginRight: "1rem" }} />
            Vision & Mission
          </div>
          <div
            style={{
              marginTop: "2rem",
              backgroundColor: "#F919840A",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <img src={arrow} />
            <p
              style={{
                fontSize: "1.5rem",
                marginTop: "-3rem",
                marginLeft: "3.2rem",
              }}
            >
              Vision
            </p>
            <div
              className="d-flex gap-2"
              style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
            >
              <div>
                <div className="color-grey f-500" style={{ margin: "1.5rem" }}>
                  We at HGS believe in scholarly and accomplished learning. To
                  provide all our students with advanced and qualified academic
                  education along with the knowledge and experience in sports
                  and co-curricular activities has always been our priority.
                  Blending leisure with technology and creating a holistic
                  experience for the educators to have the finest learning
                  experience has been the precedence of our institution. We tend
                  to upskill and upgrade all the children at the primary age
                  with the will and spirit to be the best and brightest version
                  of themselves. This helps them to grow and develop
                  individually and in the society to become a good and
                  contributing citizen of our country.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              backgroundColor: "#1FDC000A",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <img src={arrow} />
            <p
              style={{
                fontSize: "1.5rem",
                marginTop: "-3rem",
                marginLeft: "3.2rem",
              }}
            >
              Mission
            </p>
            <div
              className="d-flex gap-2"
              style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
            >
              <div>
                <div className="color-grey f-500" style={{ margin: "1.5rem" }}>
                  The mission of HGS is to create a safe space that nurtures the
                  cerebral, social, emotional, physical, spiritual and academic
                  development of every child. Our school strives to encourage
                  and develop a sense of confidence and self-assurance in every
                  juvenile. With a wide yet safe environment along with
                  empathetic and patient staff, we want to empower our students
                  and help them rise at every step of learning. By inculcating
                  family and society values along with practical and theoretical
                  knowledge, the children would learn the significance of
                  selfhood and brotherhood.
                </div>
              </div>
            </div>
            <img src={dot} style={{ width: "5rem", marginLeft: "90%" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Vision;
