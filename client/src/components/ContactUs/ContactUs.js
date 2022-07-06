import React, { useLayoutEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Inspired from "../Inspired/Inspired";
import Landing from "../Landing/Landing";
import MenuSection from "../MenuSection/MenuSection";
import Navbar from "../NavBar/Navbar";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

//
import "./ContactUs.css";
function ContactUs() {
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
      <Navbar isScrolled={true} handleClick={handleClick} />
      <NavbarMenu isShow={isShow} handleClick={handleClick} />
      <div className="contactus_main">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="f-3 f-bold " style={{ color: "#0076BD" }}>
            We’d love to hear from you.
          </div>
        </div>
        <div className="d-flex justify-content-around mt-4 flex-wrap">
          <div>
            <div className="mt-4">
              <div className="f-bold f-1-1">Address</div>
              <div className="f-500 mt-2 color-grey">
                Hermann Gmeiner School
              </div>
              <div className="f-500 mt-2 color-grey">
                SOS Enclave, Sector-29, Faridabad
              </div>
            </div>
            <div className="mt-4">
              <div className="f-bold f-1-1">Mobile</div>
              <div className="f-500 mt-2 color-grey">0129-4088574 / 75</div>
            </div>
            <div className="mt-4">
              <div className="f-bold f-1-1">Email</div>
              <div className="f-500 mt-2 color-grey">
                <a
                  href="mailto:principal.faridabadhgs@soscvindia.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  principal.faridabadhgs@soscvindia.org
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div className="f-bold f-1-1">Socials</div>
              <div class="detail_desc mt-2">
                <div class="profiles">
                  <div class="profile">
                    <a
                      href="https://www.youtube.com/channel/UCQMhAUB1PDxHQ3toSnp4-qA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="youtube"
                        class="svg-inline--fa fa-youtube fa-w-14 fa-2x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459,61.2C443.7,56.1,349.35,51,255,51c-94.35,0-188.7,5.1-204,10.2C10.2,73.95,0,163.2,0,255s10.2,181.05,51,193.8
                          C66.3,453.9,160.65,459,255,459c94.35,0,188.7-5.1,204-10.2c40.8-12.75,51-102,51-193.8S499.8,73.95,459,61.2z M204,369.75v-229.5
                          L357,255L204,369.75z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="profile">
                    <a
                      href="https://www.facebook.com/hermann.gmeiner.9279"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        class="svg-inline--fa fa-facebook fa-w-16 fa-2x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="profile">
                    <a
                      href="https://twitter.com/HGS_Faridabad?t=WIzDlV5wpfYFER3Cfox4Rg&s=08"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        class="svg-inline--fa fa-twitter fa-w-16 fa-2x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="profile">
                    <a
                      href="https://www.instagram.com/hgsfaridabad/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        class="svg-inline--fa fa-instagram fa-w-14 fa-2x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="form-main">
              <div class="input-container mt-3">
                <svg
                  class="icon"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 43.9 64.6"
                >
                  <path
                    d="M478.1,356.8H451.6a10.2,10.2,0,0,1-8.1-7.9c-.1-.4-.2-.9-.3-1.3q0-6.7,0-13.3a18.4,18.4,0,0,1,.5-2,10.9,10.9,0,0,1,5.4-5.7,12.8,12.8,0,0,1,3.8-1.3l-.2-.3a20.4,20.4,0,0,1-2.2-24.1,17.3,17.3,0,0,1,11-8.1l2.4-.4h3.1a16.8,16.8,0,0,1,11,6.2,19.8,19.8,0,0,1,4.4,15.6,19.4,19.4,0,0,1-4.2,9.9l-.9,1.1a31.2,31.2,0,0,1,3.4,1.2,10.3,10.3,0,0,1,6,6.8l.2,1.1v13.7a10.2,10.2,0,0,1-6.2,8.3A18.2,18.2,0,0,1,478.1,356.8Zm-13-2.2h12l1.5-.2a8.2,8.2,0,0,0,6.2-7.8c0-3.9,0-7.9,0-11.8a5.8,5.8,0,0,0-.4-2.2c-1.3-3.1-3.9-4.7-7.1-5.4l-1.7-.2a.7.7,0,0,0-.7.1,16.2,16.2,0,0,1-19,.5,2.2,2.2,0,0,0-1.5-.5,10.7,10.7,0,0,0-6.2,2.4,7.1,7.1,0,0,0-2.9,6c.1,3.6,0,7.2,0,10.8a8.8,8.8,0,0,0,.2,1.8,8,8,0,0,0,7.8,6.4Zm15.4-43.1a17.7,17.7,0,0,0-4.5-12.1,14.3,14.3,0,0,0-10-5,13.9,13.9,0,0,0-10.9,4.1,17.4,17.4,0,0,0-5.2,14.6,17,17,0,0,0,4.6,10.4,14.3,14.3,0,0,0,21.2,0A17.5,17.5,0,0,0,480.6,311.5Z"
                    transform="translate(-443.3 -292.2)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Full Name"
                  name="usrnm"
                />
              </div>
              <div class="input-container mt-3">
                <svg
                  class="email_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 91.6 54.9"
                >
                  <path
                    d="M520.6,274.1v44.4a9.4,9.4,0,0,1-3.4,3.9,8.5,8.5,0,0,1-2.6,1H434.8l-1.5-.4a6.1,6.1,0,0,1-4.1-3.8l-.2-.8V272.8a5.5,5.5,0,0,1,3.8-3.8l1.8-.5h79.9a6.4,6.4,0,0,1,4.4,2.7A25.4,25.4,0,0,1,520.6,274.1Zm-85.9,46.5H514l1.1-.2-29.5-27.8-.4.3-7,4.6a6,6,0,0,1-7,0l-4.8-3.2-2.1-1.4Zm78.3-49.2H436.5l.5.4,35.6,23.4a3.5,3.5,0,0,0,4.2,0l30.5-20Zm-51.1,20-29.1-19.1a2.2,2.2,0,0,0-.9,1.9q0,16.8,0,33.7,0,4.9,0,9.8a2.1,2.1,0,0,0,.4,1.4Zm26.2-.3,29.2,27.5a1.6,1.6,0,0,0,.6-1.3q0-20.9,0-41.8a3.6,3.6,0,0,0-1.5-2.9Z"
                    transform="translate(-429 -268.5)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Email"
                  name="usrnm"
                />
              </div>
              <div class="input-container mt-3">
                <svg
                  class="phone_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 493.5 395"
                >
                  <path
                    class="a"
                    d="M680,117.8a27.3,27.3,0,0,0-17,17v-17Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    class="a"
                    d="M888,134.8a27.3,27.3,0,0,0-17-17h17Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    class="a"
                    d="M394.5,412.9q9.9,27,36.9,36.9H394.5Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    class="a"
                    d="M871,512.7a27.3,27.3,0,0,0,17-17v17Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    d="M524.9,202.1H405.2a17.1,17.1,0,0,0-10.7,10.7V439.1a17.1,17.1,0,0,0,10.7,10.7H524.9a17.1,17.1,0,0,0,10.7-10.7V212.8A17.1,17.1,0,0,0,524.9,202.1Zm2.9,234.8c-.1,3-2.5,4.7-5.4,5.2a17.9,17.9,0,0,1-2.8.1h-109c-6.4,0-8.4-2-8.4-8.4s0-11.9,0-18.2H527.9C527.9,422.8,528.1,429.9,527.8,436.9ZM402.3,407.6V244.2H527.8V407.6ZM528,236.3H402.2c0-7.2-.2-14.3.1-21.4.1-3,2.5-4.7,5.5-5.2a17.7,17.7,0,0,1,2.8-.1h109c6.4,0,8.4,2,8.4,8.4S528,230,528,236.3Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    d="M465,419.9a8.3,8.3,0,1,0,8.3,8.1A8.5,8.5,0,0,0,465,419.9Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                  <path
                    d="M491.2,221.6c-.7-.6-2.2-.5-3.3-.5H456.3c-2.8,0-5.6-.1-8.4.1s-3.8,1.5-3.8,3.8,1.6,3.5,3.8,3.7h39.4c1.2,0,2.7.2,3.7-.4s2.4-2.1,2.4-3.1S492.3,222.5,491.2,221.6Z"
                    transform="translate(-394.5 -117.8)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Mobile"
                  name="usrnm"
                />
              </div>
              <div class="input-container mt-3">
                <svg
                  class="location_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 154.2 133.9"
                >
                  <path
                    d="M508.6,326.5c-1.2-2-2.3-4.1-3.4-6.1l-16.1-29.3c-1.8-3.3-4.5-5.5-8.2-5.6-6.6-.2-13.2-.1-19.8-.1a2.4,2.4,0,0,0-2.2,1.7,2.2,2.2,0,0,0,.6,2.7,4.2,4.2,0,0,0,2.3.7h17.7a5.2,5.2,0,0,1,4.9,2.7l19.8,36a5.7,5.7,0,0,1,.7,3c-.2,3-2.4,4.6-5.7,4.6H366.9a7.8,7.8,0,0,1-2.2-.2c-3.3-1-4.5-4.5-2.8-7.7l19.4-35.2a5.6,5.6,0,0,1,5.4-3.2H404a4.9,4.9,0,0,0,1.7-.2,2.5,2.5,0,0,0,1.5-2.8,2.6,2.6,0,0,0-2.7-2.1H386.7a10.5,10.5,0,0,0-10,6L369.2,305l-12,21.8a10.2,10.2,0,0,0,2.3,12.8,12.3,12.3,0,0,0,5.2,2.4H501.3l.3-.2A10.2,10.2,0,0,0,508.6,326.5Z"
                    transform="translate(-355.9 -208.1)"
                  ></path>
                  <path
                    d="M404.6,274.1c6.6,14,15.2,26.7,24.6,39l3.8,4.7,1-1.2a242,242,0,0,0,19.9-28.4c5.2-8.7,9.8-17.7,12.8-27.4s3.3-18.2.1-27.2c-4.3-12-12.4-20.4-24.8-24.1-2-.6-4.2-.8-6.3-1.3h-5.3l-.7.2a32.7,32.7,0,0,0-10.5,2.8c-15.9,7.1-25.1,25.9-21.4,43.4A87.7,87.7,0,0,0,404.6,274.1Zm4.8-48.8a29.2,29.2,0,0,1,18.4-11.5,28,28,0,0,1,24.3,6.8c7.2,6.3,10.9,14.3,11.7,23.8.5,6.7-1.2,13-3.5,19.1a141.4,141.4,0,0,1-15.1,28.7c-3.7,5.6-7.7,11-11.6,16.5l-.8.9c-3.3-4.7-6.6-9.2-9.7-13.8a165.7,165.7,0,0,1-16.4-29.5,58.9,58.9,0,0,1-4.3-15.1A34.2,34.2,0,0,1,409.3,225.3Z"
                    transform="translate(-355.9 -208.1)"
                  ></path>
                  <path
                    d="M432.9,254.4a12.9,12.9,0,1,0-12.8-12.8A12.9,12.9,0,0,0,432.9,254.4Zm.1-20.6a7.7,7.7,0,1,1-7.7,7.8A7.7,7.7,0,0,1,433,233.8Z"
                    transform="translate(-355.9 -208.1)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="City*"
                  name="usrnm"
                />
              </div>
              <div class="input-container mt-3">
                <svg
                  class="grade_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 82.5 82.5"
                >
                  <polygon
                    class="a"
                    points="16.9 32.7 17.5 35.2 21.8 32.9 21.8 32.9 21.8 54.3 25.1 54.3 25.1 29.8 22.2 29.8 16.9 32.7"
                  ></polygon>
                  <path
                    class="a"
                    d="M434.6,277.6,426,303.1h3.4l2.6-8h9l2.7,8h3.5l-8.7-25.4Zm-1.9,14.9,2.5-7.4c.5-1.5.9-3.1,1.3-4.6h.1c.4,1.5.8,3,1.3,4.6l2.5,7.3Z"
                    transform="translate(-397.1 -265.9)"
                  ></path>
                  <path
                    class="a"
                    d="M441.8,318.9h0a6,6,0,0,0,4.3-5.6,5.3,5.3,0,0,0-2.1-4.5c-1.6-1.3-3.7-1.8-7-1.8a31.8,31.8,0,0,0-6,.5v25a38.4,38.4,0,0,0,5.1.3c4.2,0,7-.8,8.8-2.4a6.9,6.9,0,0,0,2.2-5.1A6.6,6.6,0,0,0,441.8,318.9Zm-7.5-9.2a14.1,14.1,0,0,1,2.9-.2c3.3,0,5.6,1.2,5.6,4.2s-2,4.3-5.5,4.3h-3Zm2.8,20.5-2.8-.2v-9.7H437c3.6,0,6.6,1.4,6.6,4.9S440.4,330.2,437,330.2Z"
                    transform="translate(-397.1 -265.9)"
                  ></path>
                  <polygon
                    class="a"
                    points="63.9 55.4 63.9 46.6 61.5 46.6 61.5 55.4 52.9 55.4 52.9 57.7 61.5 57.7 61.5 66.7 63.9 66.7 63.9 57.7 72.4 57.7 72.4 55.4 63.9 55.4"
                  ></polygon>
                  <path
                    class="a"
                    d="M438.4,265.9a41.2,41.2,0,1,0,41.2,41.2A41.3,41.3,0,0,0,438.4,265.9Zm0,79.2a37.9,37.9,0,1,1,37.9-37.9A38,38,0,0,1,438.4,345.1Z"
                    transform="translate(-397.1 -265.9)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Grade"
                  name="usrnm"
                />
              </div>
              <div class="input-container mt-3">
                <svg
                  class="email_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 91.6 54.9"
                >
                  <path
                    d="M520.6,274.1v44.4a9.4,9.4,0,0,1-3.4,3.9,8.5,8.5,0,0,1-2.6,1H434.8l-1.5-.4a6.1,6.1,0,0,1-4.1-3.8l-.2-.8V272.8a5.5,5.5,0,0,1,3.8-3.8l1.8-.5h79.9a6.4,6.4,0,0,1,4.4,2.7A25.4,25.4,0,0,1,520.6,274.1Zm-85.9,46.5H514l1.1-.2-29.5-27.8-.4.3-7,4.6a6,6,0,0,1-7,0l-4.8-3.2-2.1-1.4Zm78.3-49.2H436.5l.5.4,35.6,23.4a3.5,3.5,0,0,0,4.2,0l30.5-20Zm-51.1,20-29.1-19.1a2.2,2.2,0,0,0-.9,1.9q0,16.8,0,33.7,0,4.9,0,9.8a2.1,2.1,0,0,0,.4,1.4Zm26.2-.3,29.2,27.5a1.6,1.6,0,0,0,.6-1.3q0-20.9,0-41.8a3.6,3.6,0,0,0-1.5-2.9Z"
                    transform="translate(-429 -268.5)"
                  ></path>
                </svg>
                <input
                  class="input-field"
                  type="text"
                  placeholder="Message"
                  name="usrnm"
                />
              </div>
              <div className="d-flex justify-content-center align-content-center mt-4">
                <button className="btn btn-submit f-2 color-white w-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
