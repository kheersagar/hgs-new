import React, { useState } from "react";
import ReactPlayer from "react-player";

import campus from "../../video/Virtual Tour.mp4";

import "./Landing.css";

import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

function Landing({ video, cover }) {
  const [isMuted, setIsMuted] = useState(true);

  return video ? (
    <div className="position-relative">
      <ReactPlayer
        url={campus}
        loop={true}
        muted={isMuted}
        playing={true}
        controls={false}
        width="100%"
        className="landing_video"
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
  ) : (
    <div className="cover_img_cont">
      <img src={cover} alt="images" className="cover_img" />
    </div>
  );
}

export default Landing;
