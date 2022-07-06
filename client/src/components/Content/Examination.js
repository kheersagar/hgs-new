import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import assesment from "../../Images/newImg/asses.png";
import "./Content.css";
import ContentMain from "./ContentMain";
import ExaminationCard from "./ExaminationCard";
function Examination(props) {
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
          <div className={`f-2 f-500 mb-3`} style={{ color: "#0076BD" }}>
            <img
              src={assesment}
              style={{ width: "4rem", marginRight: "1rem" }}
            />
            Assessment
          </div>
          <div>
            <div className="d-flex gap-2 mt-1">
              <div>
                {/* <div className="f-bold f-1-2 mb-2"></div> */}
                <div className="color-grey f-500 mb-2">
                  Assessments are used to measure student learning outcomes on
                  an ongoing basis. These assessments reveal how and what
                  students are learning during the course and often inform next
                  steps in teaching and learning.
                </div>
                <div className="color-grey f-500 mb-2 ">
                  At specific periods of time, we conduct secure and stable
                  examinations for the students of all grades to not only test
                  their capabilities but also to help them gain self-confidence.
                  The children are marked on the basis of their academic and
                  co-curricular results along with their year-long behaviour and
                  activities.
                </div>
                <div className="color-grey f-500  mb-2">
                  We encourage students to think critically and solve problems
                  through project-based learning. Our focus is on seamlessly
                  integrating art into the curriculum to enhance the
                  appreciation for aesthetics, visual and performing arts. We
                  foster holistic development through sports, i.e. Health and
                  Physical Education.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 mt-3">
              <div>
                <div className="f-bold f-1-2 mb-4"></div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <ExaminationCard
                    title="Pre-Primary & Primary"
                    description="Formative assessments are used to measure student learning on a daily, ongoing basis. These assessments reveal how and what students are learning during the course and often inform next steps in teaching and learning"
                    path={require("../../pdf/pre-primary.pdf")}
                    backgroundColor="rgba(244, 59, 0, 0.91)"
                    border="6px solid rgba(244, 59, 0, 0.63)"
                  />
                  <ExaminationCard
                    title="Classes VI to VIII"
                    description="According to the revised assessment-structure and examination pattern, the session is divided into two terms: TERM-I (Internal Assessment 1 and Half Yearly Exam) and TERM-II (Internal Assessment 2 and Annual Exam)"
                    path={require("../../pdf/class-6-8.pdf")}
                    backgroundColor="#24EA03"
                    border="6px solid rgba(36, 234, 3, 0.66)"
                  />
                  <ExaminationCard
                    title="Classes IX to X"
                    description="According to the revised assessment-structure and examination pattern, the session is divided into two terms: TERM-I (Internal Assessment 1 and Half Yearly Exam) and TERM-II (Internal Assessment 2 and Annual Exam)"
                    path={require("../../pdf/class-9-10.pdf")}
                    backgroundColor="#0755EC"
                    border="6px solid rgba(7, 85, 236, 0.62)"
                  />
                  <ExaminationCard
                    title="Classes XI to XII"
                    description="For classes XI and XII marks weightage to the syllabus units (Chapters) may be assigned proportionally based on course structure given in CBSE Secondary Curriculum 2021-22 to have total 30/70/80 marks"
                    path={require("../../pdf/class-11-12.pdf")}
                    backgroundColor="#f53864"
                    border="6px solid #fa6487"
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

export default Examination;
