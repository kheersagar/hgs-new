import React from "react";

import "./Contact.css";
function Contact() {
  return (
    <div className="contact_main cursor ">
      <div className="color-white f-1-2 f-500"> Hermann Gmeiner School</div>
      <div className=" mt-4">
        <div className="d-flex  gap-3 mt-3 overflow-wrap-anywhere">
          <div>
            <img
              src={`https://www.pathways.in/assets/img/location_white.svg`}
              className="contact-icon"
            />
          </div>
          <div className="color-white f-1">
            Hermann Gmeiner School, SOS Enclave, Sector-29, Faridabad
          </div>
        </div>
        <div className="d-flex  gap-3 mt-3 overflow-wrap-anywhere">
          <div>
            <img
              src={`https://www.pathways.in/assets/img/email_us_white.svg`}
              className="contact-icon"
            />
          </div>
          <div className="color-white f-1">
            principal.faridabadhgs@soscvindia.org
          </div>
        </div>
        <div className="d-flex  gap-3 mt-3 overflow-wrap-anywhere">
          <div>
            <img
              src={`	https://www.pathways.in/assets/img/phone_icon_white.svg`}
              className="contact-icon"
            />
          </div>
          <div className="color-white f-1">0129-4088574 / 75</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
