import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import p1 from "../../Images/blooms.jpg";
import p2 from "../../Images/newImg/p2.png";
import p3 from "../../Images/newImg/p3.png";
import PedagogiSkill from "./PedagogiSkill";
import "./Content.css";
import AllCards from "../PedagogiCard/AllCards";
import { Col, Collapse, Row } from "react-bootstrap";

function Pedagogi(props) {
  const {
    cover,
    sidebar_data,
    side_heading,
    side_sub_heading,
    headingColor,
    topicon,
  } = props;
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
      <div style={{ marginBottom: "-5rem" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "0 0 100px 100px",
            marginLeft: "74%",
            marginTop: "-8rem",
            backgroundColor: "#F919848A",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "0 0 100px 100px",
            marginLeft: "83.5%",
            marginTop: "-11rem",
            backgroundColor: "#1FDC00D1",
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              overflow: "hidden",
              marginRight: "-30px",
              marginTop: "-20px",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "0 0 100px 100px",
                marginLeft: "74%",
                marginTop: "-7rem",
                backgroundColor: "#06C5AED1",
              }}
            ></div>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "0 0 100px 100px",
                marginLeft: "83.5%",
                marginTop: "-11rem",
                backgroundColor: "#FF8C22D1",
              }}
            ></div>
          </div>
          <div
            className={`f-2 f-500 color-blue-cyan mb-3`}
            style={{ color: headingColor }}
          >
            <Row style={{ display: "flex", alignItems: "center" }}>
              <h1>
                <img
                  src={topicon}
                  alt=""
                  style={{ width: "80px", marginLeft: "-20px" }}
                />
                Pedagogical Approach
              </h1>
            </Row>
          </div>
          <div>
            <div className="d-flex gap-2">
              <div>
                <div className="color-grey f-500">
                  At Hermann Gmeiner School, a variety of teaching-learning
                  methodologies, integrated with technology, are used to give
                  students a holistic education making them independent,
                  life-long learners and above all responsible citizens of the
                  globe. WE believes in holistic development of its students and
                  leaves no stone unturned to nurture talent. An integrated
                  approach to education is adopted at each level. A broad and
                  comprehensive education should aim at enabling each individual
                  to discover, unearth and enrich his or her creative
                  potential.The holistic curriculum encourages students to be
                  active learners who explore, understand and participate in the
                  world around them.
                </div>
                <div className="f-bold f-1-2 mb-2 mt-4">
                  <h3>
                    Employing Bloom’s Taxonomy to develop learning objectives
                  </h3>
                </div>
                <img
                  src={p1}
                  style={{
                    marginLeft: "5rem",
                    maxWidth: "80%",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                />
                <div className="color-grey f-500 mt-2">
                  Bloom's Taxonomy is employed in classrooms of Hermann Gmeiner
                  to help the teachers in understanding the objectives of
                  classroom teaching. It guides them to change the complexity of
                  the questions and helps students to achieve higher levels of
                  understanding.
                </div>
                <div className="color-grey f-500 mt-2">
                  The curriculum is designed in such a way that the levels help
                  to move students through the process of learning, from the
                  most fundamental remembering and understanding to the more
                  complex evaluating and creating.
                </div>
                <div className="color-grey f-500 mt-2">
                  Because Bloom's Taxonomy is based on a specific hierarchy of
                  learning levels, each level is a vital part of learning to
                  achieve deeper, more advanced cognitive skills and abilities.
                  Building upon each level in lesson plans guides students to
                  think in "increasingly more sophisticated ways".
                </div>
                <div className="color-grey f-500 mt-2">
                  The Taxonomy is used as a practical tool, providing a
                  framework in which to plan challenging lessons that help to
                  ensure students' progress is maximised – a fundamental tenet
                  of successful teaching. The framework also allows educators to
                  assess learning on an ongoing basis, encouraging students to
                  reflect on their progress.
                </div>
                <div
                  className="f-bold f-1-2 mb-1 mt-15"
                  style={{ marginTop: "1.5rem" }}
                >
                  <h3>Developing 21st Century Skills</h3>
                </div>
                <PedagogiSkill />
                <div className="color-grey f-500 mt-2">
                  21st-century skills are more important to students now than
                  ever before. By providing a framework for successful learning
                  in the classroom, we ensure students can thrive in a world
                  where change is constant and learning never stops.
                </div>
                <div className="color-grey f-500 mt-2">
                  These are tools that are tremendously important for our
                  nation's well-being and can be universally applied to enhance
                  ways of thinking, learning, working and living in the world.
                  The skills include critical thinking/reasoning,
                  creativity/creative thinking, problem solving, metacognition,
                  collaboration, communication and global citizenship.
                </div>
                <div className="color-grey f-500 mt-2">
                  We equip teachers to use new teaching strategies or
                  educational software, giving them hands-on demonstrations and
                  offering concrete entry points to facilitate development of
                  these skills in their classrooms. Personalized learning
                  involves students in their own learning process, teaching them
                  several valuable skills.
                </div>
                <div className="f-bold f-1-2 mb-2 mt-5">
                  <h3>Project Based Learning Activities</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <div
                    className="color-grey f-500 mt-2"
                    style={{ marginRight: 20 }}
                  >
                    Project-based learning is adopted as a dynamic classroom
                    approach in which students actively explore real-world
                    problems and challenges and acquire a deeper knowledge.
                    Project based learning activities allow our students to
                    develop deep content knowledge. Importantly, they also
                    support development of 21st century skills such as critical
                    thinking, collaboration, creativity and communication.
                    Relevant PBL activities are conducted under the guided
                    supervision of aur able staff to develop greater depth of
                    understanding the concepts than in traditional
                    classroom-based learning resulting in improved levels of
                    student's creativity.
                  </div>
                  <img src={p2} />
                </div>

                {/* <div className="f-bold f-1-2 mt-5"></div> */}
                <h3 style={{ color: "black", marginTop: "2rem" }}>
                  Experiential Learning
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    marginTop: "2rem",
                    marginBottom: 40,
                  }}
                >
                  <div>
                    <img src={p3} style={{ width: "300px" }} />
                  </div>

                  <div
                    className="color-grey f-500 mt-1"
                    style={{ marginLeft: 50 }}
                  >
                    At Hermann Gmeiner, we believe in experiential learning
                    methodology in order to make learning fun filled,
                    interesting and meaningful. We encourage students to ask
                    questions and explore answers to become critical thinkers of
                    the future generation. By engaging students in hands-on
                    experiences and reflection, they are better able to connect
                    theories and knowledge learned in the classroom to
                    real-world situations.
                  </div>
                </div>
                <div className="f-bold f-1-2 mb-2 mt-4">
                  <h3>Multiple intelligences in the classroom</h3>
                </div>
                <div className="color-grey f-500 mt-2">
                  No two children think and learn the same way, so, it is
                  necessary to present information in a completely different
                  light to reach some students. The theory of multiple
                  intelligences provides teachers of HGS with a framework and
                  tools that allows them to better meet the needs of the
                  different types of learners present in every classroom.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 mt-3">
              <div>
                <div className="f-bold f-1-2 mb-4 "></div>
                <div
                  style={{
                    marginLeft: "3rem",
                  }}
                >
                  <AllCards />
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

export default Pedagogi;
