import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./SideBar.css";
import { useInView } from "react-intersection-observer";
import { BsChevronRight } from "react-icons/bs";

function SideBar(props) {
  const { sidebar_data, side_heading, side_sub_heading } = props;
  const { pathname } = useLocation();
  const [isSideNav, setIsSideNav] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    // triggerOnce:true,
    delay: 100,
  });
  return (
    <div className={`sidebar_main ${inView ? "fade-right" : null}`} ref={ref}>
      <div
        className="sidenav_mob"
        onClick={() => {
          setIsSideNav(!isSideNav);
        }}
      >
        <div className="color-white f-1-2">Faridabad</div>
        <div>
          <BsChevronRight
            color="white"
            className={`${!isSideNav ? "arrow-down" : "arrow-up"}`}
          />
        </div>
      </div>
      <div
        className={`sidenav_list ${isSideNav ? "sidenav_list_visible" : null} `}
      >
        {side_heading ? (
          <div>
            <div
              className={`f-1-1 color-white f-400 mt-2 p-2 cursor sidebar_item`}
            >
              {side_heading}
            </div>
            <div
              className="mx-3 px-2 mt-2 "
              style={{ borderLeft: "2px solid darkcyan" }}
            >
              {sidebar_data?.map((item, i) => {
                return (
                  <NavLink
                    to={`/${item.navigation}`}
                    onClick={() => {
                      setIsSideNav(!isSideNav);
                    }}
                  >
                    <div
                      className={`color-white f-400 py-2 my-1 cursor sidebar_item ${
                        pathname === `${"/" + item.navigation}`
                          ? "selected"
                          : null
                      }`}
                    >
                      {item.title}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ) : (
          sidebar_data?.map((item) => {
            return (
              <NavLink
                to={`/${item.navigation}`}
                onClick={() => {
                  setIsSideNav(!isSideNav);
                }}
              >
                <div
                  className={`f-1 color-white f-400 mt-2 p-2 cursor sidebar_item ${
                    pathname === `${"/" + item.navigation}` ? "selected" : null
                  }`}
                >
                  {item.title}
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SideBar;
