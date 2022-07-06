import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Home from "./components/Home/Home";
import Content from "./components/Content/Content";
import Contact from "./components/Contact/Contact";
import ContactUs from "./components/ContactUs/ContactUs";
import Booklist from "./components/Content/Booklist";
import CampusTour from "./components/Content/CampusTour";
import Examination from "./components/Content/Examination";
import Faculty from "./components/Content/Faculty";
import MessageCard from "./components/Cards/messageCard";
import Pedagogi from "./components/Content/Pedagogi";
import { FaSchool } from "react-icons/fa";
import alumniTopIcon from "./Images/alumniTopIcon.svg";
import pedagogiIcon from "./Images/pedagogyTopIcon.svg";
import infroTopIcon from "./Images/infraTopIcon.svg";
import msgTopIcon from "./Images/newImg/message.png";
import currTopIcon from "./Images/newImg/curr.png";
import assesTopIcon from "./Images/newImg/asses.png";
import skillTopIcon from "./Images/newImg/svt.png";
import stuCouncilTopIcon from "./Images/newImg/council.png";
import tripTopIcon from "./Images/newImg/trip.png";
import scoutTopIcon from "./Images/newImg/scout.png";
import infraTopIcon from "./Images/newImg/infra.png";
import achTopIcon from "./Images/newImg/ach.png";
import evTopIcon from "./Images/newImg/ev.png";
import nwTopIcon from "./Images/newImg/nw.png";
import adTopIcon from "./Images/newImg/ad.png";
import sportsTopIcon from "./Images/newImg/sicon.png";
import Achievements from "./components/Content/Achievement";

import {
  about_data,
  academics_sidenav,
  admission,
  admissions_data,
  alumni_data,
  alumni_text_data,
  awards_data,
  award_text_data,
  beyond_sidenav,
  career_guidance,
  co_curricular_data,
  curriculum,
  events_data,
  examination_data,
  facilities_data,
  faculty_data,
  house_clubs_data,
  infrastructure,
  life_curriculum_data,
  message_data,
  ncc_scouts_guides_data,
  nep_data,
  news_data,
  news_text_data,
  pre_primary_data,
  primary_data,
  results_data,
  secondary_data,
  sidebar_data_vision,
  skill_vocational_data,
  sports_data,
  sr_secondary_data,
  student_council_data,
  transportation_data,
  trip_data,
  vision_mission,
} from "./variable";
//cover
import campus_tour from "./Images/campus_tour.jpg";
import vision_mission_cover from "./Images/newImg/Assembly (1).jpeg";
import message_cover from "./Images/message_cover.jpg";
import facilities_cover from "./Images/facilities_cover.jpg";
import transportation_cover from "./Images/transportation_cover.jpg";
import curriculum_cover from "./Images/curriculum_cover.jpg";
import infra_cover from "./Images/infra_cover.jpg";
import career_cover from "./Images/career_cover.jpg";
import alumni_cover from "./Images/newImg/Alumni Cover Page.jpeg";
import pre_primary_cover from "./Images/pre_primary_cover.jpg";
import secondary_cover from "./Images/secondary_cover.jpg";
import sr_secondary_cover from "./Images/newImg/sr sec.jpeg";
import nep_cover from "./Images/nep_cover.jpg";
import life_skill_cover from "./Images/life_skill_cover.jpg";
import examination_cover from "./Images/examination_cover.jpg";
import co_curricular_cover from "./Images/co_curricular_cover.jpg";
import clubs_cover from "./Images/newImg/Houses (2).JPG";
import student_council_cover from "./Images/student_council_cover.jpg";
import trip_2 from "./Images/trip_2.jpg";
import ncc_cover from "./Images/ncc_cover.jpg";
import booklist_cover from "./Images/booklist_cover.jpg";
import skill_vocational_cover from "./Images/skill_vocational_cover.jpg";
import sports_cover from "./Images/sports_cover.jpg";
import events_cover from "./Images/newImg/events page cover.jpeg";
import results_cover from "./Images/results_cover.jpg";
import awards_cover from "./Images/awards_cover.jpg";
import addmission_cover from "./Images/newImg/46 (1).JPG";
import faculty_cover from "./Images/faculty_cover.jpg";
import SportsCard from "./components/Content/SportsCard";
import news_cover from "./Images/news.jpg";
import parents_cover from "./Images/newImg/Parents (1).jpeg";
import pedagogi_cover from "./Images/newImg/Pedagogical Approach.jpeg";
import Parents from "./components/Content/parentsVoice";
import Vision from "./components/Content/vision";
import Lifeskill from "./components/Content/Lifeskill";
import Results from "./components/Content/Results";

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
      anchorPlacement: "bottom-bottom",
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/pedagogi"
          element={
            <Pedagogi
              cover={pedagogi_cover}
              sidebar_data={academics_sidenav}
              side_heading="Academics & Curriculum"
              headingColor={"#1FDC00D1"}
              topicon={pedagogiIcon}
            />
          }
        />
        <Route
          path="/vision-and-mission"
          element={
            <Vision
              cover={vision_mission_cover}
              sidebar_data={sidebar_data_vision}
            />
          }
        />
        <Route
          path="/message"
          element={
            <Content
              cover={message_cover}
              sidebar_data={sidebar_data_vision}
              data={message_data}
              topicon={msgTopIcon}
              title={"Message From Leadership"}
              headingColor={"#0076BD"}
            />
          }
        />
        <Route
          path="/news"
          element={
            <Content
              cover={news_cover}
              sidebar_data={sidebar_data_vision}
              data={news_text_data}
              news_data={news_data}
              topicon={nwTopIcon}
              title={"News & Media Coverage"}
              headingColor={"#0076BD"}
            />
          }
        />
        <Route
          path="/campus-tour"
          element={
            <CampusTour
              cover={infra_cover}
              sidebar_data={sidebar_data_vision}
              data={vision_mission}
            />
          }
        />
        <Route
          path="/facilities"
          element={
            <Content
              cover={facilities_cover}
              sidebar_data={sidebar_data_vision}
              data={facilities_data}
            />
          }
        />
        <Route
          path="/transportation"
          element={
            <Content
              cover={transportation_cover}
              sidebar_data={sidebar_data_vision}
              data={transportation_data}
              title="Transportation"
            />
          }
        />
        <Route
          path="/curriculum"
          element={
            <Content
              cover={curriculum_cover}
              sidebar_data={academics_sidenav}
              data={null}
              title="Curriculum"
              curriculum_data={curriculum}
              side_sub_heading={true}
              topicon={currTopIcon}
              headingColor={"#F91984ED"}
              side_heading="Academics & Curriculum"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <SportsCard
              cover={sports_cover}
              title="Sports & Fitness"
              sidebar_data={sidebar_data_vision}
              data={sports_data}
            />
          }
        />
        <Route
          path="/parents"
          element={
            <Parents cover={parents_cover} sidebar_data={sidebar_data_vision} />
          }
        />
        <Route
          path="/infrastructure"
          element={
            <Content
              cover={infra_cover}
              title="Infrastructure & Facilities"
              sidebar_data={sidebar_data_vision}
              data={infrastructure}
              headingColor={"#F91984ED"}
              topicon={infroTopIcon}
              link={"infrastructure"}
            />
          }
        />
        <Route
          path="/career-guidance"
          element={
            <Content
              cover={career_cover}
              sidebar_data={sidebar_data_vision}
              data={career_guidance}
            />
          }
        />
        <Route
          path="/awards"
          element={
            <Achievements
              cover={awards_cover}
              sidebar_data={sidebar_data_vision}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              cover={results_cover}
              sidebar_data={academics_sidenav}
              side_sub_heading={true}
              side_heading="Academics & Curriculum"
            />
          }
        />
        <Route
          path="/alumni"
          element={
            <Content
              cover={alumni_cover}
              sidebar_data={sidebar_data_vision}
              data={null}
              alumni_data={alumni_data}
              title="Illustrious Alumni"
            />
          }
        />
        <Route
          path="/admissions"
          element={
            <Content
              cover={addmission_cover}
              sidebar_data={sidebar_data_vision}
              data={admissions_data}
              topicon={adTopIcon}
              title="Admissions"
              headingColor={"#FF8C22ED"}
            />
          }
        />
        <Route
          path="/pre-primary"
          element={
            <Content
              cover={pre_primary_cover}
              sidebar_data={sidebar_data_vision}
              data={pre_primary_data}
              headingColor={"#F91984ED"}
            />
          }
        />
        <Route
          path="/primary"
          element={
            <Content
              title="Primary Curriculum"
              cover={pre_primary_cover}
              sidebar_data={sidebar_data_vision}
              data={primary_data}
              headingColor={"#F91984ED"}
              link="primary"
            />
          }
        />
        <Route
          path="/secondary"
          element={
            <Content
              title="Secondary Curriculum"
              cover={secondary_cover}
              sidebar_data={sidebar_data_vision}
              data={secondary_data}
              headingColor={"#F91984ED"}
            />
          }
        />
        <Route
          path="/sr-secondary"
          element={
            <Content
              title="Senior Secondary Curriculum"
              cover={sr_secondary_cover}
              sidebar_data={sidebar_data_vision}
              data={sr_secondary_data}
              headingColor={"#F91984ED"}
            />
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/about-us"
          element={
            <Content
              cover={campus_tour}
              sidebar_data={sidebar_data_vision}
              data={about_data}
            />
          }
        />
        <Route
          path="/nep"
          element={
            <Content
              cover={nep_cover}
              flaticon={<FaSchool style={{ fontSize: 50 }} />}
              title="NEP 2020 Ready School"
              icon={<FaSchool />}
              sidebar_data={academics_sidenav}
              data={nep_data}
              side_sub_heading={true}
              side_heading="Academics & Curriculum"
              link="nep"
            />
          }
        />
        <Route
          path="/life-skill"
          element={
            <Lifeskill
              cover={life_skill_cover}
              sidebar_data={academics_sidenav}
              side_sub_heading={true}
              side_heading="Academics & Curriculum"
            />
          }
        />
        <Route
          path="/examination"
          element={
            <Examination
              cover={examination_cover}
              sidebar_data={academics_sidenav}
              data={examination_data}
              topicon={assesTopIcon}
              side_heading="Academics  & Curriculum"
              headingColor={"#0440B6ED"}
            />
          }
        />
        <Route
          path="/skill-vocational"
          element={
            <Content
              cover={skill_vocational_cover}
              title="Skill & Vocational Subjects"
              data={skill_vocational_data}
              sidebar_data={academics_sidenav}
              side_sub_heading={true}
              topicon={skillTopIcon}
              side_heading="Academics & Curriculum"
              headingColor={"#F91984ED"}
            />
          }
        />
        <Route
          path="/co-curricular"
          element={
            <Content
              cover={co_curricular_cover}
              title="Co-Curricular Activities"
              sidebar_data={beyond_sidenav}
              data={co_curricular_data}
              side_sub_heading={true}
              side_heading="Beyond Curriculum"
              headingColor={"#FF8C22ED"}
            />
          }
        />
        <Route
          path="/house-clubs"
          element={
            <Content
              cover={clubs_cover}
              title="Houses & Clubs"
              sidebar_data={beyond_sidenav}
              data={house_clubs_data}
              side_sub_heading={true}
              side_heading="Beyond Curriculum"
              link="clubs"
              showBubble={true}
            />
          }
        />
        <Route
          path="/student-council"
          element={
            <Content
              cover={student_council_cover}
              sidebar_data={beyond_sidenav}
              title="Student Council"
              data={student_council_data}
              side_sub_heading={true}
              link="student-council"
              side_heading="Beyond Curriculum"
              headingColor={"#0076BD"}
              flaticon={stuCouncilTopIcon}
            />
          }
        />
        <Route
          path="/trips"
          element={
            <Content
              cover={trip_2}
              title="Trips, Excursions & Field Visits"
              sidebar_data={beyond_sidenav}
              data={trip_data}
              topicon={tripTopIcon}
              side_sub_heading={true}
              side_heading="Beyond Curriculum"
              headingColor={"#1FDC00"}
              link="trips"
              flaticon={tripTopIcon}
            />
          }
        />
        <Route
          path="/ncc-scouts"
          element={
            <Content
              cover={ncc_cover}
              title="NCC, Scouts & Guides"
              sidebar_data={beyond_sidenav}
              data={ncc_scouts_guides_data}
              side_sub_heading={true}
              topicon={scoutTopIcon}
              side_heading="Beyond Curriculum"
              headingColor="#FF8C22"
              link="ncc-scouts"
              flaticon={scoutTopIcon}
            />
          }
        />
        <Route
          path="/booklist-uniform"
          element={
            <Booklist
              cover={booklist_cover}
              sidebar_data={academics_sidenav}
              side_sub_heading={true}
              side_heading="Academics & Curriculum"
            />
          }
        />
        <Route
          path="/inspired"
          element={
            <Content
              cover={alumni_cover}
              title={"See What Our Alumni Say"}
              sidebar_data={sidebar_data_vision}
              data={alumni_text_data}
              showBubble={true}
              link="inspired"
              headingColor={"#F91984BF"}
              topicon={alumniTopIcon}
            />
          }
        />
        <Route
          path="/faculty-staff"
          element={
            <Faculty
              cover={faculty_cover}
              sidebar_data={sidebar_data_vision}
              data={faculty_data}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Content
              cover={events_cover}
              title="Events & Happenings"
              sidebar_data={sidebar_data_vision}
              topicon={evTopIcon}
              data={events_data}
              headingColor={"#FF8C22ED"}
              link="events"
              flaticon={evTopIcon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
