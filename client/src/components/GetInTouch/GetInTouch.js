import React from "react";

import "./GetInTouch.css";
function GetInTouch() {
  return (
    <div className="get_main">
      <h4 className="text-center">Drop us your details for a quick response.</h4>
      <h2 className="text-center">Get In Touch</h2>
      <div className="form_cont mt-4">
        <div class="input-container">
        <svg class="icon"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.9 64.6"><path d="M478.1,356.8H451.6a10.2,10.2,0,0,1-8.1-7.9c-.1-.4-.2-.9-.3-1.3q0-6.7,0-13.3a18.4,18.4,0,0,1,.5-2,10.9,10.9,0,0,1,5.4-5.7,12.8,12.8,0,0,1,3.8-1.3l-.2-.3a20.4,20.4,0,0,1-2.2-24.1,17.3,17.3,0,0,1,11-8.1l2.4-.4h3.1a16.8,16.8,0,0,1,11,6.2,19.8,19.8,0,0,1,4.4,15.6,19.4,19.4,0,0,1-4.2,9.9l-.9,1.1a31.2,31.2,0,0,1,3.4,1.2,10.3,10.3,0,0,1,6,6.8l.2,1.1v13.7a10.2,10.2,0,0,1-6.2,8.3A18.2,18.2,0,0,1,478.1,356.8Zm-13-2.2h12l1.5-.2a8.2,8.2,0,0,0,6.2-7.8c0-3.9,0-7.9,0-11.8a5.8,5.8,0,0,0-.4-2.2c-1.3-3.1-3.9-4.7-7.1-5.4l-1.7-.2a.7.7,0,0,0-.7.1,16.2,16.2,0,0,1-19,.5,2.2,2.2,0,0,0-1.5-.5,10.7,10.7,0,0,0-6.2,2.4,7.1,7.1,0,0,0-2.9,6c.1,3.6,0,7.2,0,10.8a8.8,8.8,0,0,0,.2,1.8,8,8,0,0,0,7.8,6.4Zm15.4-43.1a17.7,17.7,0,0,0-4.5-12.1,14.3,14.3,0,0,0-10-5,13.9,13.9,0,0,0-10.9,4.1,17.4,17.4,0,0,0-5.2,14.6,17,17,0,0,0,4.6,10.4,14.3,14.3,0,0,0,21.2,0A17.5,17.5,0,0,0,480.6,311.5Z" transform="translate(-443.3 -292.2)" ></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="Username"
            name="usrnm"
          />
        </div>
        <div class="input-container">
        <svg class="email_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.6 54.9"><path d="M520.6,274.1v44.4a9.4,9.4,0,0,1-3.4,3.9,8.5,8.5,0,0,1-2.6,1H434.8l-1.5-.4a6.1,6.1,0,0,1-4.1-3.8l-.2-.8V272.8a5.5,5.5,0,0,1,3.8-3.8l1.8-.5h79.9a6.4,6.4,0,0,1,4.4,2.7A25.4,25.4,0,0,1,520.6,274.1Zm-85.9,46.5H514l1.1-.2-29.5-27.8-.4.3-7,4.6a6,6,0,0,1-7,0l-4.8-3.2-2.1-1.4Zm78.3-49.2H436.5l.5.4,35.6,23.4a3.5,3.5,0,0,0,4.2,0l30.5-20Zm-51.1,20-29.1-19.1a2.2,2.2,0,0,0-.9,1.9q0,16.8,0,33.7,0,4.9,0,9.8a2.1,2.1,0,0,0,.4,1.4Zm26.2-.3,29.2,27.5a1.6,1.6,0,0,0,.6-1.3q0-20.9,0-41.8a3.6,3.6,0,0,0-1.5-2.9Z" transform="translate(-429 -268.5)"></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="Email"
            name="usrnm"
          />
        </div>
        <div class="input-container">
        <svg class="phone_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.5 395"><path class="a" d="M680,117.8a27.3,27.3,0,0,0-17,17v-17Z" transform="translate(-394.5 -117.8)"></path><path class="a" d="M888,134.8a27.3,27.3,0,0,0-17-17h17Z" transform="translate(-394.5 -117.8)"></path><path class="a" d="M394.5,412.9q9.9,27,36.9,36.9H394.5Z" transform="translate(-394.5 -117.8)"></path><path class="a" d="M871,512.7a27.3,27.3,0,0,0,17-17v17Z" transform="translate(-394.5 -117.8)"></path><path d="M524.9,202.1H405.2a17.1,17.1,0,0,0-10.7,10.7V439.1a17.1,17.1,0,0,0,10.7,10.7H524.9a17.1,17.1,0,0,0,10.7-10.7V212.8A17.1,17.1,0,0,0,524.9,202.1Zm2.9,234.8c-.1,3-2.5,4.7-5.4,5.2a17.9,17.9,0,0,1-2.8.1h-109c-6.4,0-8.4-2-8.4-8.4s0-11.9,0-18.2H527.9C527.9,422.8,528.1,429.9,527.8,436.9ZM402.3,407.6V244.2H527.8V407.6ZM528,236.3H402.2c0-7.2-.2-14.3.1-21.4.1-3,2.5-4.7,5.5-5.2a17.7,17.7,0,0,1,2.8-.1h109c6.4,0,8.4,2,8.4,8.4S528,230,528,236.3Z" transform="translate(-394.5 -117.8)"></path><path d="M465,419.9a8.3,8.3,0,1,0,8.3,8.1A8.5,8.5,0,0,0,465,419.9Z" transform="translate(-394.5 -117.8)"></path><path d="M491.2,221.6c-.7-.6-2.2-.5-3.3-.5H456.3c-2.8,0-5.6-.1-8.4.1s-3.8,1.5-3.8,3.8,1.6,3.5,3.8,3.7h39.4c1.2,0,2.7.2,3.7-.4s2.4-2.1,2.4-3.1S492.3,222.5,491.2,221.6Z" transform="translate(-394.5 -117.8)"></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="Mobile"
            name="usrnm"
          />
        </div>
        <div class="input-container">
        <svg class="location_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.2 133.9"><path d="M508.6,326.5c-1.2-2-2.3-4.1-3.4-6.1l-16.1-29.3c-1.8-3.3-4.5-5.5-8.2-5.6-6.6-.2-13.2-.1-19.8-.1a2.4,2.4,0,0,0-2.2,1.7,2.2,2.2,0,0,0,.6,2.7,4.2,4.2,0,0,0,2.3.7h17.7a5.2,5.2,0,0,1,4.9,2.7l19.8,36a5.7,5.7,0,0,1,.7,3c-.2,3-2.4,4.6-5.7,4.6H366.9a7.8,7.8,0,0,1-2.2-.2c-3.3-1-4.5-4.5-2.8-7.7l19.4-35.2a5.6,5.6,0,0,1,5.4-3.2H404a4.9,4.9,0,0,0,1.7-.2,2.5,2.5,0,0,0,1.5-2.8,2.6,2.6,0,0,0-2.7-2.1H386.7a10.5,10.5,0,0,0-10,6L369.2,305l-12,21.8a10.2,10.2,0,0,0,2.3,12.8,12.3,12.3,0,0,0,5.2,2.4H501.3l.3-.2A10.2,10.2,0,0,0,508.6,326.5Z" transform="translate(-355.9 -208.1)"></path><path d="M404.6,274.1c6.6,14,15.2,26.7,24.6,39l3.8,4.7,1-1.2a242,242,0,0,0,19.9-28.4c5.2-8.7,9.8-17.7,12.8-27.4s3.3-18.2.1-27.2c-4.3-12-12.4-20.4-24.8-24.1-2-.6-4.2-.8-6.3-1.3h-5.3l-.7.2a32.7,32.7,0,0,0-10.5,2.8c-15.9,7.1-25.1,25.9-21.4,43.4A87.7,87.7,0,0,0,404.6,274.1Zm4.8-48.8a29.2,29.2,0,0,1,18.4-11.5,28,28,0,0,1,24.3,6.8c7.2,6.3,10.9,14.3,11.7,23.8.5,6.7-1.2,13-3.5,19.1a141.4,141.4,0,0,1-15.1,28.7c-3.7,5.6-7.7,11-11.6,16.5l-.8.9c-3.3-4.7-6.6-9.2-9.7-13.8a165.7,165.7,0,0,1-16.4-29.5,58.9,58.9,0,0,1-4.3-15.1A34.2,34.2,0,0,1,409.3,225.3Z" transform="translate(-355.9 -208.1)"></path><path d="M432.9,254.4a12.9,12.9,0,1,0-12.8-12.8A12.9,12.9,0,0,0,432.9,254.4Zm.1-20.6a7.7,7.7,0,1,1-7.7,7.8A7.7,7.7,0,0,1,433,233.8Z" transform="translate(-355.9 -208.1)"></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="City*"
            name="usrnm"
          />
        </div>
        <div class="input-container">
        <svg class="grade_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.5 82.5"><polygon class="a" points="16.9 32.7 17.5 35.2 21.8 32.9 21.8 32.9 21.8 54.3 25.1 54.3 25.1 29.8 22.2 29.8 16.9 32.7"></polygon><path class="a" d="M434.6,277.6,426,303.1h3.4l2.6-8h9l2.7,8h3.5l-8.7-25.4Zm-1.9,14.9,2.5-7.4c.5-1.5.9-3.1,1.3-4.6h.1c.4,1.5.8,3,1.3,4.6l2.5,7.3Z" transform="translate(-397.1 -265.9)"></path><path class="a" d="M441.8,318.9h0a6,6,0,0,0,4.3-5.6,5.3,5.3,0,0,0-2.1-4.5c-1.6-1.3-3.7-1.8-7-1.8a31.8,31.8,0,0,0-6,.5v25a38.4,38.4,0,0,0,5.1.3c4.2,0,7-.8,8.8-2.4a6.9,6.9,0,0,0,2.2-5.1A6.6,6.6,0,0,0,441.8,318.9Zm-7.5-9.2a14.1,14.1,0,0,1,2.9-.2c3.3,0,5.6,1.2,5.6,4.2s-2,4.3-5.5,4.3h-3Zm2.8,20.5-2.8-.2v-9.7H437c3.6,0,6.6,1.4,6.6,4.9S440.4,330.2,437,330.2Z" transform="translate(-397.1 -265.9)"></path><polygon class="a" points="63.9 55.4 63.9 46.6 61.5 46.6 61.5 55.4 52.9 55.4 52.9 57.7 61.5 57.7 61.5 66.7 63.9 66.7 63.9 57.7 72.4 57.7 72.4 55.4 63.9 55.4"></polygon><path class="a" d="M438.4,265.9a41.2,41.2,0,1,0,41.2,41.2A41.3,41.3,0,0,0,438.4,265.9Zm0,79.2a37.9,37.9,0,1,1,37.9-37.9A38,38,0,0,1,438.4,345.1Z" transform="translate(-397.1 -265.9)"></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="Grade"
            name="usrnm"
          />
        </div>
        <div class="input-container">
        <svg class="email_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.6 54.9"><path d="M520.6,274.1v44.4a9.4,9.4,0,0,1-3.4,3.9,8.5,8.5,0,0,1-2.6,1H434.8l-1.5-.4a6.1,6.1,0,0,1-4.1-3.8l-.2-.8V272.8a5.5,5.5,0,0,1,3.8-3.8l1.8-.5h79.9a6.4,6.4,0,0,1,4.4,2.7A25.4,25.4,0,0,1,520.6,274.1Zm-85.9,46.5H514l1.1-.2-29.5-27.8-.4.3-7,4.6a6,6,0,0,1-7,0l-4.8-3.2-2.1-1.4Zm78.3-49.2H436.5l.5.4,35.6,23.4a3.5,3.5,0,0,0,4.2,0l30.5-20Zm-51.1,20-29.1-19.1a2.2,2.2,0,0,0-.9,1.9q0,16.8,0,33.7,0,4.9,0,9.8a2.1,2.1,0,0,0,.4,1.4Zm26.2-.3,29.2,27.5a1.6,1.6,0,0,0,.6-1.3q0-20.9,0-41.8a3.6,3.6,0,0,0-1.5-2.9Z" transform="translate(-429 -268.5)"></path></svg>
          <input
            class="input-field"
            type="text"
            placeholder="Message"
            name="usrnm"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center mt-4">
        <button className="btn btn-submit f-2 color-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default GetInTouch;
