import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";

import "./Content.css";
import ContentMain from "./ContentMain";
function Booklist(props) {
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
          <div className={`f-2 f-500 color-blue-cyan mb-3`}>
            {" "}
            Booklist & Uniform
          </div>
          <div>
            <div className="d-flex gap-2 mt-1">
              <div>
                {/* <div className="f-bold f-1-2 mb-2"></div> */}
                <div className="color-grey f-500">
                  We always want the best for our students, and for that, we
                  provide all the classes starting from grade 1 to 12, their
                  books list and specific uniforms. To maintain discipline and
                  dignity, all students are requested to wear the same uniform
                  provided by the school authority. A series of textbooks and
                  notebooks are given each year to all the students for their
                  respective classes.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 mt-3">
              <div>
                <div className="f-bold f-1-2 mb-4">Booklist</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <a href={require("../../pdf/nursery.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Nursery</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/lkg.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>L.K.G</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/ukg.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>U.K.G</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-1.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class I</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-2.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class II</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-3.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class III</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-4.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class IV</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-5.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class V</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-6.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class VI</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-7.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class VII</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-8.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class VIII</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-9.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class IX</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-10.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class X</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-11.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class XI</div>
                    </div>
                  </a>
                  <a href={require("../../pdf/grade-12.pdf")} target="_blank">
                    <div className="custom-btn-pdf">
                      <div>Class XII</div>
                    </div>
                  </a>
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

export default Booklist;
