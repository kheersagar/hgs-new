import React from "react";

import "./Footer.css";

import footer_logo from "../../Images/footer-logo.jpg";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Footer() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 100,
  });

  return (
    <div className={`footer_main ${inView ? "fade-up" : null}`} ref={ref}>
      <div className=" footer-logo justify-content-center align-items-center d-flex">
        <NavLink to="/">
          <img src={footer_logo} className="cursor" />
        </NavLink>
      </div>
      <div className="flex-1">
        <div className="f-2 f-400 mx-5"> QUICK LINKS</div>
        <div className="footer-section">
          <div className="footer-section-1">
            <NavLink to={"/vision-and-mission"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2 fs-small">
                About HGS
              </div>
            </NavLink>
            <NavLink to={"/nep"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2">
                Academics & Curriculum
              </div>
            </NavLink>
          </div>
          <div className="footer-section-2">
            <NavLink to={"/house-clubs"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2">
                Beyond Curriculum
              </div>
            </NavLink>
            <NavLink to={"/news"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2">
                News & Media Coverage
              </div>
            </NavLink>
          </div>
          <div className="footer-section-3">
            <NavLink to={"/infrastructure"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2">
                {" "}
                Infrastructure & Facilities
              </div>
            </NavLink>
            <NavLink to={"/contact-us"}>
              <div className="f-1-2 fs-6 hover cursor f-500 mt-2">
                {" "}
                Contact Us
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
