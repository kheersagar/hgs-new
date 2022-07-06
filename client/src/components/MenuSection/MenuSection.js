import React, { useMemo, useState } from "react";

//css
import "./MenuSection.css";
import vision_mission from "../../Images/vision_mission.jpg";
import message from "../../Images/message.jpg";
import infra_cover from "../../Images/infra_cover.jpg";
import academics from "../../Images/academics.jpg";
import transportation from "../../Images/transportation.jpg";
import trip_4 from "../../Images/trip_4.jpg";
import sports_cover from "../../Images/sports_1.jpg";
import infra_facilities from "../../Images/infra_facilities.jpg";
import news from "../../Images/news.jpg";
import achivements from "../../Images/achivements.jpg";
import events from "../../Images/events.jpg";
import alumni from "../../Images/alumni.jpg";
import admission from "../../Images/admission.jpg";
import faculty from "../../Images/faculty.jpeg";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function MenuSection() {
  const menu_data = [
    {
      title: "VISION & MISSION",
      navigation: "vision-and-mission",
      image: vision_mission,
      text: "We are dedicated to a continuing tradition of excellence in an ever-changing world",
      className: ["custom-align", "custom-text-align"],
    },
    {
      title: "MESSAGE FROM LEADERSHIP",
      navigation: "message",
      text: "Message that is rooted in the values and culture of HGS and is of significant importance to key stakeholders",
      image: message,
    },
    {
      title: "INFRASTRUCTURE & FACILITIES",
      navigation: "infrastructure",
      image: infra_facilities,
      text: "The state-of-the-art infrastructure of play a significant role in the holistic development of students",
      landscape: true,
    },
    {
      title: "ACADEMICS & CURRICULUM",
      navigation: "nep",
      image: academics,
      text: "HGS pedagogy strives to make the schooling process more insightful by expanding the horizon of learning",
      landscape: true,
    },
    {
      title: "ADMISSIONS",
      navigation: "admissions",
      image: admission,
      text: "Granted to all without any distinction of religion, race, caste, place of birth, etc",
      className: ["custom-align", "custom-text-align"],
    },
    {
      title: "FACULTY & STAFF",
      navigation: "faculty-staff",
      text: "Extremely, knowledgeable, experienced, well-qualified and dedicated Staff",
      image: faculty,
    },
    {
      title: " EVENTS & HAPPENINGS ",
      navigation: "events",
      text: "Connect with latest events and happenings at the school",
      image: events,
    },
    {
      title: "ACHIEVEMENTS & LAURELS",
      navigation: "awards",
      image: achivements,
      text: "Students earn laurels & accolades for the school by winning coveted positions in different categories",
      className: ["custom-align", "custom-text-align"],
    },
    {
      title: "BEYOND CURRICULUM",
      navigation: "house-clubs",
      image: trip_4,
      text: "From their academic learning to their communications and social skills, providing children with a balanced learning experience",
      landscape: true,
    },
    {
      title: "SPORTS & FITNESS",
      navigation: "sports",
      image: sports_cover,
      text: "A fit body, mind and soul for HGS students is our goal",
      landscape: true,
      landscape: true,
    },
    {
      title: "PARENTS' & STUDENTS' VOICE",
      navigation: "parents",
      image: alumni,
      text: "The Voice of parents and students is often championed as an empowering process that serves as source for motivation and improvement ",
      className: ["custom-align", "custom-text-align"],
    },
    {
      title: "NEWS & MEDIA COVERAGE",
      navigation: "news",
      text: "School has featured in prestigious print media for several activities and workshops. Check out our media coverage",
      image: news,
    },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className={`menu_section ${inView ? "fade-up" : null}`} ref={ref}>
      {menu_data.map((item, index) => {
        return (
          <NavLink
            to={`${item.navigation} `}
            className={`a_menu ${
              item.landscape ? "mobile-landscape" : "potrait"
            }`}
          >
            <div
              className={`menu_card  ${
                item.className?.length > 0 ? item.className[0] : null
              }`}
            >
              <img src={item.image} className="menu_img" />
              <div className="content-hover">
                <div
                  style={{
                    marginTop: "6rem",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      textShadow: "2px 6px 4px darkslategrey",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      marginTop: "2rem",
                      textAlign: "center",
                      color: "white",
                      margin: "1rem",
                    }}
                  >
                    {item.text}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "8rem",
                        height: "2.5rem",
                        backgroundColor: "none",
                        border: "3px solid #0076BD",
                        borderRadius: "5px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          marginTop: "0.2rem",
                          color: "#0076BD",
                        }}
                      >
                        Know More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`title-menu ${
                  item.className?.length > 0 ? item.className[1] : null
                }`}
              >
                {item.title}
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default MenuSection;
