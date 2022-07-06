import React, { useMemo, useState } from "react";

import "./NavbarMenu.css";

import { BsFillXCircleFill } from "react-icons/bs";
import main_logo from "../../Images/main-logo.png";
import { NavLink } from "react-router-dom";

function NavbarMenu(props) {
  const { isShow, handleClick } = props;
  const initialValues = {
    aboutUs: false,
    academics: false,
    beyond: false,
    career: false,
  };
  const [menuItem, setMenuItem] = useState(initialValues);
  const [data, setData] = useState([]);
  // console.log(isShow);
  const aboutUs_menu = [
    {
      title: "Vision & Mission",
      navigation: "vision-and-mission",
    },
    {
      title: "Message from Leadership",
      navigation: "message",
    },
  ];
  const academics_menu = [
    {
      title: "NEP 2020 Ready School ",
      navigation: "nep",
    },
    {
      title: "Curriculum ",
      navigation: "curriculum",
    },
    {
      title: "Pedagogical Approach",
      navigation: "pedagogi",
    },
    {
      title: "Life Skill Curriculum",
      navigation: "life-skill",
    },
    {
      title: "Assessment",
      navigation: "examination",
    },
    {
      title: "Skill & Vocational Subjects",
      navigation: "skill-vocational",
    },
    {
      title: "Results",
      navigation: "results",
    },
  ];
  const beyond_menu = [
    {
      title: "House & Clubs",
      navigation: "house-clubs",
    },
    {
      title: "Student Council",
      navigation: "student-council",
    },
    {
      title: "Trips, Excursions & Field Visits",
      navigation: "trips",
    },
    {
      title: "NCC, Scouts & Guides",
      navigation: "ncc-scouts",
    },
  ];

  function handleMenu(name) {
    setMenuItem(() => {
      return { initialValues, [name]: true };
    });
  }
  useMemo(() => {
    setData(() => {
      return menuItem.aboutUs
        ? aboutUs_menu
        : menuItem.academics
        ? academics_menu
        : menuItem.beyond
        ? beyond_menu
        : null;
    });
  }, [menuItem]);

  const toggle = () => {
    return menuItem.aboutUs || menuItem.academics || menuItem.beyond
      ? ""
      : "hidden";
  };

  return (
    <div
      className="navbar_menu_main"
      style={{ display: isShow ? "block" : "none", overflow: "scroll" }}
    >
      <div>
        <div className="nav_cont">
          <div>
            <NavLink to="/">
              <img src={main_logo} className="logo bg-white p-1" />
            </NavLink>
          </div>
          <div className="cross-div">
            <BsFillXCircleFill
              className="cursor"
              size={30}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="menu_main">
        <div
          className="menu_item-1"
          style={{
            marginTop: "-55px",
          }}
        >
          <div
            className={`f-1-2 line-height-3 f-400 color-white mt-2 hover-cyan ${
              menuItem.aboutUs ? "active-line" : null
            }`}
            onClick={() => {
              handleMenu("aboutUs");
            }}
          >
            {" "}
            About Us
          </div>
          <div
            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan ${
              menuItem.academics ? "active-line" : null
            }`}
            onClick={() => {
              handleMenu("academics");
            }}
          >
            Academics & Curriculum
          </div>
          <div
            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan ${
              menuItem.beyond ? "active-line" : null
            }`}
            onClick={() => {
              handleMenu("beyond");
            }}
          >
            Beyond Curriculum
          </div>
          <NavLink to={"/sports"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan`}
              onClick={() => {
                handleClick();
              }}
            >
              Sports & Fitness
            </div>
          </NavLink>
          <NavLink to={"/infrastructure"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleClick();
              }}
            >
              Infrastructure & Facilities
            </div>
          </NavLink>
          <NavLink to="/awards">
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleClick();
              }}
            >
              Achievements & Laurels
            </div>
          </NavLink>
          <NavLink to={"/events"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleMenu("news");
                handleClick();
              }}
            >
              Events & Happenings
            </div>
          </NavLink>
          <NavLink to={"/news"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleClick();
              }}
            >
              News & Media Coverage
            </div>
          </NavLink>
          <NavLink to={"/inspired"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleClick();
              }}
            >
              Illustrious Alumni
            </div>
          </NavLink>
          <NavLink to={"/parents"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleClick();
              }}
            >
              Parents' & Students' Voice
            </div>
          </NavLink>
          <NavLink to="/admissions">
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleMenu("news");
                handleClick();
              }}
            >
              Admissions
            </div>
          </NavLink>
          <NavLink to={"/faculty-staff"}>
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
              onClick={() => {
                handleMenu("news");
                handleClick();
              }}
            >
              Faculty & Staff
            </div>
          </NavLink>
          <NavLink to="/contact-us">
            <div
              className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan`}
              onClick={() => {
                handleMenu("press");
                handleClick();
              }}
            >
              Contact Us
            </div>
          </NavLink>
        </div>
        <div className={`menu_item ${toggle()}`}>
          {data?.map((item, index) => {
            return (
              <NavLink to={`/${item.navigation}`} onClick={() => handleClick()}>
                <div className="f-1 f-400 color-white mt-1 hover-underline-animation">
                  {item.title}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
