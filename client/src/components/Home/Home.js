import React, { useLayoutEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Inspired from "../Inspired/Inspired";
import Landing from "../Landing/Landing";
import MenuSection from "../MenuSection/MenuSection";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import PhotoGallery from "../PhotoGallery/PhotoGaller";

//
import "./Home.css";
function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, steIsShow] = useState(false);
  const handleScroll = (e) => {
    console.log(e);
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
    <div className="home_main" onScroll={handleScroll}>
      <Navbar isScrolled={isScrolled} handleClick={handleClick} />
      <NavbarMenu isShow={isShow} handleClick={handleClick} />
      <Landing video={true} />
      <MenuSection />
      <Inspired />
      <GetInTouch />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default Home;
