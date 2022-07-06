import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import Contact from "../Contact/Contact";
import MessageCard from "../Cards/messageCard";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import SubjectCards from "./SubjectCard/SubjectCards";
import bullet_icon from "../../Images/bullet_icon.svg";
import HouseAndClubs from "../BeyondCurrciular/HouseAndClubs";
import { Col, Row } from "react-bootstrap";

function ContentMain(props) {
  const {
    sidebar_data,
    data,
    title,
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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
    delay: 100,
  });

  function Card({ data }) {
    return (
      <div className="card_main cursor">
        <div>
          <img
            src={data.image}
            alt="a-images"
            className="alumni_image"
            style={{
              boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              border: "3px solid",
              borderColor: headingColor,
            }}
          />
        </div>
        <div className="alumni_details">
          <div className="f-500 color-blue-cyan f-1">{data.title}</div>
          <div>
            <div>{data.occupation}</div>
          </div>
        </div>
      </div>
    );
  }
  function AwardCard({ data }) {
    return (
      <div className="card_main cursor award_card">
        <div>
          <img
            src={data.image}
            alt="a-images"
            className="award_image"
            style={{
              boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              border: "3px solid",
              borderColor: headingColor,
            }}
          />
        </div>
        <div className="alumni_details">
          <div className="f-500 color-blue-cyan f-1">{data.title}</div>
        </div>
      </div>
    );
  }
  function NewsCard({ data }) {
    return (
      <div className="card_main cursor award_card">
        <div>
          <img
            src={data.image}
            alt="a-images"
            className="award_image"
            style={{
              boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              border: "3px solid",
              borderColor: headingColor,
            }}
          />
        </div>
      </div>
    );
  }
  function CurriculumCard({ data }) {
    return (
      <NavLink to={`/${data.navigation}`}>
        <div className="curriculum_card_main cursor">
          <div>
            <div style={{ maxWidth: "330px", maxHeight: "300px" }}>
              <img
                src={data.image}
                alt="c-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  aspectRatio: "16/9",
                  border: "3px solid #F91984ED",
                  boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
            <div className="f-500 f-1-5 mt-3 text-center">{data.title}</div>
          </div>
          <div className="hover_content">
            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  margin: "1rem",
                }}
              >
                {data.text}
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
                    width: "7rem",
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
                      marginTop: "0.25rem",
                      color: "#0076BD",
                    }}
                  >
                    Know More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }

  return (
    <div className="contentmain_cont">
      <div style={{ width: "min-content" }}>
        <SideBar
          sidebar_data={sidebar_data}
          side_heading={side_heading}
          side_sub_heading={side_sub_heading}
        />
        <Contact />
      </div>
      {link == "clubs" ? (
        <div>
          {showBubble ? (
            <>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "0 0 100px 100px",
                  marginLeft: "70%",
                  marginTop: "-8rem",
                  backgroundColor: "#0548CA73",
                  position: "absolute",
                  left: "8%",
                  zIndex: "-1",
                  top: "-0.2%",
                }}
              ></div>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "0 0 100px 100px",
                  marginLeft: "78%",
                  marginTop: "-11rem",
                  backgroundColor: "#DA056B73",
                  position: "absolute",
                  left: "7%",
                  zIndex: "-1",
                  top: "1%",
                }}
              ></div>
            </>
          ) : null}

          <HouseAndClubs data={data} />
        </div>
      ) : link === "student-council" ||
        link === "ncc-scouts" ||
        link === "trips" ||
        link === "events" ||
        link === "primary" ? (
        <div>
          <div
            className={`f-2 f-500 color-blue-cyan`}
            style={{
              marginBottom: "1rem",
              color: headingColor,
            }}
          >
            {flaticon && (
              <img
                src={flaticon}
                style={{ width: "50px", margin: "-5px 5px 0 0" }}
              />
            )}

            {title}
          </div>
          {data.map((item, i) => {
            return (
              <div
                className={`d-flex justify-content-between align-items-start w-100 gap-4 mb-4 `}
                style={{ flexDirection: `${i % 2 === 0 ? "" : "row-reverse"}` }}
              >
                {item.description_image && (
                  <div style={{ flex: "1.8" }}>
                    <img
                      src={item.description_image[0]}
                      className="w-100 h-100 content_rect_img"
                      style={{
                        border: `3px solid ${headingColor}`,
                        boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                )}
                <div style={{ flex: "3" }}>
                  <div
                    className="f-bold f-1-2 mb-2"
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="color-grey f-500">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {showBubble ? (
            <>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "0 0 100px 100px",
                  marginLeft: "74%",
                  marginTop: "-7rem",
                  backgroundColor: "#FCF547B0",
                  position: "absolute",
                  left: "8%",
                  zIndex: "-1",
                  top: "-1.5%",
                }}
              ></div>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "0 0 100px 100px",
                  marginLeft: "83.5%",
                  marginTop: "-11rem",
                  backgroundColor: "#FF69B487",
                  position: "absolute",
                  left: "5%",
                  zIndex: "-1",
                  top: "2.5%",
                }}
              ></div>
            </>
          ) : null}
          <div
            className={`f-2 f-500 color-blue-cyan`}
            style={{
              marginBottom: "1rem",
              color: headingColor,
              // marginTop: showBubble ? "-110px" : "0px",
            }}
          >
            <Row style={{ display: "flex", alignItems: "center" }}>
              {topicon ? (
                <Col xs={1}>
                  <img src={topicon} alt="" style={{ width: "100%" }} />
                </Col>
              ) : null}
              {flaticon ? <Col xs={1}>{flaticon}</Col> : null}

              <Col>{title}</Col>
            </Row>
          </div>
          {link == "inspired" ? <div style={{ height: "1rem" }}></div> : null}
          {data?.map((item, i) => {
            return (
              <div
                className={`${inView ? "fade-up" : null}`}
                ref={ref}
                style={{
                  marginBottom: link == "inspired" ? 0 : "1rem",
                  marginTop: link == "inspired" ? "-1.7rem" : 0,
                }}
              >
                {item.infra_title && (
                  <h3 style={{ fontWeight: 600, marginBottom: 30 }}>
                    {item.infra_title}
                  </h3>
                )}
                <div
                  className={`d-flex ${
                    link == ("inspired" || "infrastructure") ? "" : "mt-2"
                  } ${item.image ? "gap-4" : ""}`}
                  style={{
                    backgroundColor:
                      link == "inspired" && i % 2 == 0
                        ? "#F919840D"
                        : link == "inspired"
                        ? "#FFF85614"
                        : "",
                    padding:
                      link == ("inspired" || "infrastructure")
                        ? "3rem 1rem"
                        : "",
                  }}
                >
                  {i % 2 == 0 ? (
                    <div>
                      {item.image ? (
                        <img
                          src={item.image}
                          className={`${
                            link == "infrastructure"
                              ? "content_rect_img"
                              : "content_img"
                          }`}
                          style={{
                            border: "3px solid",
                            borderColor: headingColor,
                            boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        />
                      ) : null}
                    </div>
                  ) : null}

                  <div>
                    {item.title && (
                      <div
                        className="f-bold f-1-2 mb-2"
                        style={{ fontSize: 25 }}
                      >
                        {item.title}
                      </div>
                    )}
                    {item.name && (
                      <div className="f-400 f-1-1  color-grey">{item.name}</div>
                    )}
                    {item.occupation && (
                      <div className="f-bold f-1-1  color-grey">
                        {item.occupation}
                      </div>
                    )}
                    {item.name && (
                      <div className="f-400 f-1-1 mb-2 color-grey">
                        {i === 3
                          ? "Hermann Gmeiner School, Faridabad"
                          : " SOS Children’s Villages of India"}
                      </div>
                    )}
                    <div className="color-grey f-500">
                      {item.description === "srsec" ? (
                        <SubjectCards />
                      ) : (
                        item.description
                      )}{" "}
                    </div>
                    {link != "infrastructure"
                      ? item.description_image?.map((d, i) => {
                          return (
                            <div className="text-center">
                              <img
                                src={d}
                                className={`${
                                  item.custom_class
                                    ? item.custom_class
                                    : "desc_img"
                                }`}
                                style={{
                                  boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                                  border: "3px solid",
                                  borderColor: headingColor,
                                }}
                              />
                            </div>
                          );
                        })
                      : null}

                    <div></div>
                    {link == "infrastructure"
                      ? item.description_image?.map((d, i) => {
                          return (
                            <div
                              className="text-center"
                              style={{
                                marginTop: "0rem",
                                marginRight: "0rem",
                              }}
                            >
                              <img
                                src={d}
                                className={`${
                                  item.custom_class
                                    ? item.custom_class
                                    : "desc_img"
                                }`}
                                style={{
                                  boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                                  border: "3px solid",
                                  borderColor: headingColor,
                                }}
                              />
                            </div>
                          );
                        })
                      : null}
                  </div>
                  {i % 2 == 1 ? (
                    <div>
                      {item.image ? (
                        <img
                          src={item.image}
                          className={`${
                            link == "infrastructure"
                              ? "content_rect_img"
                              : "content_img"
                          }`}
                          style={{
                            border: "3px solid",
                            borderColor: headingColor,
                            boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
                {item.extra_description ? (
                  item.extra_description[0] === "NEP" ? (
                    <MessageCard />
                  ) : (
                    <>
                      <div className="mt-2">
                        {item.extra_description
                          ? item.extra_description.map((desc, i) => {
                              return (
                                <div className="color-grey mt-2 f-500">
                                  {desc}
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </>
                  )
                ) : null}
                <div className="d-flex align-items-center px-1">
                  <div className="flex-1">
                    {item.features ? (
                      <ul className="mt-2" style={{ listStyleType: "none" }}>
                        {item.features?.map((list, i) => {
                          return (
                            <div>
                              <li className=" color-grey f-500">
                                <img
                                  src={bullet_icon}
                                  style={{
                                    marginLeft: "-1rem",
                                  }}
                                />
                                {list}
                              </li>
                              <div className="mt-2 px-4 color-grey f-500">
                                {item.features_description
                                  ? item.features_description[i]
                                  : null}
                              </div>
                            </div>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                  {item?.features_image && (
                    <div className="flex-1 mt-4">
                      <img
                        src={item?.features_image[0]}
                        className="text-center w-100"
                        style={{
                          boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                          border: "3px solid",
                          borderColor: headingColor,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {alumni_data ? (
            <div className="mt-4">
              {alumni_data?.map((item, i) => {
                return <Card data={item} />;
              })}
            </div>
          ) : null}
          {curriculum_data ? (
            <div className="curriculum_main">
              {curriculum_data?.map((item, i) => {
                return <CurriculumCard data={item} />;
              })}
            </div>
          ) : null}
          {awards_data ? (
            <div className="mt-4">
              {awards_data?.map((item, i) => {
                return <AwardCard data={item} />;
              })}
            </div>
          ) : null}
          {news_data ? (
            <div className="mt-4">
              {news_data?.map((item, i) => {
                return <NewsCard data={item} />;
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ContentMain;
