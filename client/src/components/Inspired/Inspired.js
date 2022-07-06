import React from "react";
import { NavLink } from "react-router-dom";

import "./Inspired.css";
function Inspired() {
  return (
    <div className="inspired_main">
      <div className="f-3 color-white f-bold inspired_title">
        Illustrious Alumni
      </div>
      <div className="f-1-2 color-white f-500 mt-2 inspired_subtitle">
        Get inspired by the success stories of our notable alumni!
      </div>
      {/* <div className='f-1-5 color-white f-bold mt-2'>Explore notable student, faculty and alumni stories from across the globe!</div> */}
      <div className="mt-4">
        <NavLink to="/inspired">
          <button className="btn read_more color-white f-500 f-1-1">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Inspired;
