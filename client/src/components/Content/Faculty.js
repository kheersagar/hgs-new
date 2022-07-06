import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import faculty_1 from "../../Images/newImg/1.png";
import faculty_2 from "../../Images/newImg/2.png";
import faculty_3 from "../../Images/newImg/3.png";
import faculty_4 from "../../Images/newImg/4.png";
import faculty_5 from "../../Images/newImg/5.png";
import faculty_6 from "../../Images/newImg/6.png";
import fsTopIcon from "../../Images/newImg/fs.png";
import "./Content.css";
import ContentMain from "./ContentMain";
function Faculty(props) {
  const {
    cover,
    sidebar_data,
    data,
    title,
    alumni_data,
    curriculum_data,
    side_heading,
    side_sub_heading,
  } = props;
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
          <div className={`f-2 f-500 mb-3`} style={{ color: "#0076BD" }}>
            <img
              src={fsTopIcon}
              style={{ width: "4rem", marginRight: "1rem" }}
            />
            Faculty & Staff
          </div>
          <div>
            <div className="d-flex gap-2 mt-1">
              <div>
                {/* <div className="f-bold f-1-2 mb-2"></div> */}
                <div className="color-grey f-500">
                  Hermann Gmeiner School Faridabad has a very experienced,
                  knowledgeable, well-qualified and dedicated Staff, so much so
                  that they are conscious of their responsibility of being the
                  most important block in the foundation of the Nation as well
                  as the Society.
                </div>
                <div className="color-grey f-500 mt-2">
                  Their self-discipline is an example in itself, which always
                  drives them to work as a well-knit team to make all possible
                  endeavour together for the holistic growth of students as well
                  the institution. They are enthusiastic, dedicated,
                  conscientious and highly motivated to adapt to new innovative
                  ideas and well versed with modern education systems.
                </div>
                <div className="color-grey f-500 mt-2">
                  The valuable contribution of all the Faculty members is well
                  manifested in the spectacular achievements of our students in
                  the scholastic as well as co- scholastic discipline.
                </div>
                <div className="color-grey f-500 mt-2">
                  The Teachers grouped under various subject-wise Faculties are
                  put under the guidance of the most experienced Faculty heads.
                  All of them always put their heads together to devise
                  improvised methodology to deliver their best to facilitate the
                  young evolving minds. This significantly contributes in
                  promoting the problem solving skills of students to enable
                  them to grow as useful citizens.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 mt-3">
              <div>
                <div className="f-bold f-1-2 mb-4 "></div>
                <div className="text-center">
                  <img src={faculty_1} style={{ width: "65vw" }} />
                  <img
                    src={faculty_2}
                    style={{ marginTop: "1.5rem", width: "65vw" }}
                  />
                  <img
                    src={faculty_3}
                    style={{ marginTop: "1rem", width: "65vw" }}
                  />
                  <img
                    src={faculty_4}
                    style={{
                      marginTop: "-0.17rem",
                      marginLeft: "1.5px",
                      width: "64.8vw",
                    }}
                  />
                  <img
                    src={faculty_5}
                    style={{ marginTop: "1rem", width: "65vw" }}
                  />
                  <img
                    src={faculty_6}
                    style={{ marginTop: "1rem", width: "65vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faculty;
