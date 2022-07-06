import React, { useState } from "react";
import HouseAndClubs from "../BeyondCurrciular/HouseAndClubs";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

import "./Content.css";
import ContentMain from "./ContentMain";
function Content(props) {
  const {
    cover,
    sidebar_data,
    data,
    title,
    icon,
    alumni_data,
    curriculum_data,
    awards_data,
    news_data,
    side_heading,
    side_sub_heading,
    link,
    showBubble,
    headingColor,
    topicon,
    flaticon,
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
      <Navbar
        isScrolled={isScrolled}
        handleClick={handleClick}
        custom_class="logo"
      />
      <NavbarMenu isShow={isShow} handleClick={handleClick} />
      <Landing video={false} cover={cover} />

      <ContentMain
        sidebar_data={sidebar_data}
        data={data}
        icon={icon}
        title={title}
        alumni_data={alumni_data}
        news_data={news_data}
        curriculum_data={curriculum_data}
        awards_data={awards_data}
        side_heading={side_heading}
        side_sub_heading={side_sub_heading}
        link={link}
        showBubble={showBubble}
        headingColor={headingColor}
        topicon={topicon}
        flaticon={flaticon}
      />

      <Footer />
    </div>
  );
}

export default Content;
