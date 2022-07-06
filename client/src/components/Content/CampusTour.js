import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import ReactPlayer from "react-player";

import campus from "../../video/CampusTour.mp4";
import "./Content.css";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

function CampusTour(props) {
  const { cover, sidebar_data, data, title, alumni_data, curriculum_data } =
    props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, steIsShow] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
          <SideBar sidebar_data={sidebar_data} />
          <Contact />
        </div>
        <div>
          <div className={`f-2 f-500 color-blue-cyan mb-3`}>
            {" "}
            Campus Tour
          </div>
          <div className="position-relative">
            <ReactPlayer
              url={campus}
              loop={true}
              muted={isMuted}
              playing={true}
              controls={false}
              width="100%"
              className="campus_v"
            />
            <GiSpeaker
              size={50}
              className="sound_icon  cursor"
              style={{ display: !isMuted ? null : "none" }}
              onClick={() => setIsMuted(true)}
            />
            <GiSpeakerOff
              size={50}
              className="sound_icon cursor"
              style={{ display: isMuted ? null : "none" }}
              onClick={() => setIsMuted(false)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CampusTour;
