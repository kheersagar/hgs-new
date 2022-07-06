import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import b from "../../Images/parents/b.png";
import c from "../../Images/parents/c.jpg";
import d from "../../Images/parents/d.png";
import e from "../../Images/parents/e.png";
import f from "../../Images/parents/f.jpg";
import s1 from "../../Images/students/s1.jpg";
import s2 from "../../Images/students/s2.jpg";
import s3 from "../../Images/students/s3.jpg";
import paTopIcon from "../../Images/newImg/pa.png";
import "./Content.css";

function Parents(props) {
  const { cover, sidebar_data, side_heading, side_sub_heading } = props;
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
      <Navbar isScrolled={isScrolled} handleClick={handleClick} />
      <NavbarMenu isShow={isShow} handleClick={handleClick} />
      <Landing video={false} cover={cover} />
      <div className="contentmain_cont">
        <div style={{ width: "min-content" }}>
          <SideBar
            sidebar_data={sidebar_data}
            side_heading={side_heading}
            side_sub_heading={side_sub_heading}
          />
          <Contact />
        </div>
        <div>
          {/* parents' voice */}
          <div className={`f-2 f-500 mb-3`} style={{ color: "#1FDC00ED" }}>
            <img
              src={paTopIcon}
              style={{ width: "4rem", marginRight: "1rem" }}
            />
            Parents' Voice
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <img
              src={b}
              style={{
                width: "10rem",
                height: "10rem",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                border: "3px solid #1FDC00F5",
              }}
            />
            <div style={{ marginLeft: "12rem", marginTop: "-11rem" }}>
              <p style={{ marginTop: "1rem" }}>
                <b>Vaishnavi Shukla (III-A)</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                Herman Gmeiner School is the best place for our children's
                mental n physical growth. All the faculty is very helpful and
                supportive.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "6rem", display: "flex" }}>
            <div>
              <p style={{ marginTop: "1rem" }}>
                <b>Ishita (III-A)</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                We are very satisfied after sending our children in such a
                prestigious school. We are also thankful to the class teacher Ms
                Sukhbir Kaur along with other subject teachers who are working
                hard and putting their endless efforts in making their future
                bright, so that they can become a good human being as well as an
                asset for the country.
              </p>
            </div>
            <img
              src={c}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <img
              src={d}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div style={{ marginLeft: "12rem", marginTop: "-11rem" }}>
              <p style={{ marginTop: "1rem" }}>
                <b>Shaurya Tripathi (III-A)</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                The school premises is quite big and spacious. School provides
                almost all kinds of recreational activities for kids. Best thing
                about School management and teachers is that they very well
                entertain the parent's queries and try to solve them.
              </p>
            </div>
          </div>
          <div
            style={{ marginTop: "6rem", marginBottom: "5rem", display: "flex" }}
          >
            <div>
              <p style={{ marginTop: "1rem" }}>
                <b>Mansi Kashyap (I) & Manvi Kashyap(II)</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                Hermann Gmeiner School is setting new benchmarks of quality
                services in field of Education. I am proud guradian of my two
                daughters of the school because they are in hand of Eminent,
                Skilled and Professional Teachers. The value and foundation it
                has instilled in our kids are wonderful. Thank you so much
                teachers for putting so much efforts and making them enable for
                higher stage performance in life.
              </p>
            </div>
            <img
              src={e}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
          {/*  */}
          <div style={{ marginTop: "2rem" }}>
            <img
              src={f}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div style={{ marginLeft: "12rem", marginTop: "-11rem" }}>
              <p style={{ marginTop: "1rem" }}>
                <b>RANVEER- I A</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                My child loves this school because of such co-operative
                teachers. A well versed system of education is followed in the
                school. The efforts made by the teachers and other staff of the
                school is commendable.
              </p>
              <p>Great team ~ Great school.</p>
            </div>
          </div>
          {/* students' voice */}
          <div className={`f-2 f-500 mt-5 `} style={{ color: "#1FDC00ED" }}>
            <img
              src={paTopIcon}
              style={{
                width: "4rem",
                marginRight: "1rem",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
            Students' Voice
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <img
              src={s1}
              style={{
                width: "10rem",
                height: "10rem",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
                border: "3px solid #1FDC00F5",
              }}
            />
            <div style={{ marginLeft: "12rem", marginTop: "-11rem" }}>
              <p style={{ marginTop: "1rem" }}>
                <b>Kushleen Kaur (XII C)</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                I am so grateful for being a part of Hermann Gmeiner School,
                Faridabad. The teachers are kind and supportive. They have
                always guided me and gave me the strength I needed to achieve my
                goals. The school has given me many opportunities to show my
                best which increased my confidence. I will always miss my
                school.”
              </p>
            </div>
          </div>
          <div style={{ marginTop: "6rem", display: "flex" }}>
            <div>
              <p style={{ marginTop: "1rem" }}>
                <b>Nikitaa Shukla XII D </b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                The school has the friendly atmosphere and a best place for
                enhancing students skills. Teachers are very supportive.I feel
                proud to be a part of Hermann Gmeiner School Faridabad since
                2010.
              </p>
            </div>
            <img
              src={s2}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
          <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
            <img
              src={s3}
              style={{
                width: "10rem",
                height: "10rem",
                border: "3px solid #1FDC00F5",
                boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div style={{ marginLeft: "12rem", marginTop: "-11rem" }}>
              <p style={{ marginTop: "1rem" }}>
                <b>Eshaa Shukla XII B</b>
              </p>
              <p style={{ marginTop: "1rem" }}>
                I am attending this school since 2010 and have only great things
                to say about my experience. The teachers are amazing,
                understanding and supportive.They teach their students very
                passionately and each child is treated with care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Parents;
