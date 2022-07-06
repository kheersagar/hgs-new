import React, { useEffect, useState } from "react";

import "./Navbar.css";

//
import main_logo from "../../Images/main-logo.png";

//icons
import { BsList, BsFillPersonFill } from "react-icons/bs";
import {HiHome} from "react-icons/hi"

import { NavLink } from "react-router-dom";
function Navbar(props) {
  const { isScrolled, handleClick,custom_class } = props;

  const [isClicked,setIsClicked] = useState(false);
  return (
    <div className={`nav_bar_main ${ isScrolled ? "scrolled-nav" : null}`}>
      <div className="nav_cont">
        <div>
          <NavLink to="/">
            <img src={main_logo} className={`cursor ${isScrolled ? 'logo' : custom_class ? custom_class : 'scrolled-logo'}`} />
          </NavLink>
        </div>
        <div className="nav-right">
        <div>
          <NavLink to="/contact-us">

            <button className="apply-btn cursor mx-2">CONTACT US</button>
          </NavLink>
          </div>
        <div className={`${!isScrolled ? 'division' : 'division-black'}`}>
        <NavLink to="/">
          <HiHome size={30} className="cursor mx-2 home_icon"/>
        </NavLink>
        </div>
          <div className={`parent-btn-cont ${!isScrolled ? 'division' : 'division-black'}`}>
            <button className="parent-login mx-2" onClick={()=> setIsClicked(!isClicked)}>
              <BsFillPersonFill size={30} className="cursor mx-2" />
            </button>
            <div className={`dropdown-main cursor ${!isClicked ? 'hidden':null}`}>
                <div className="f-1 f-400 px-4 py-2 d-flex">
                  <div>
                  <svg class="st_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.2 109"><path d="M484.9,327.1a9.4,9.4,0,0,1-7.5-6.6,9.2,9.2,0,0,1,2.2-9.7,24.8,24.8,0,0,1,8.3-5.8,1.7,1.7,0,0,0,.9-1.1c.5-4,1-7.9,1.5-11.9.2-2-.7-2.7-2.7-2.2l-15.4,3.5-17.4,4c-.6.2-1.1.8-1.7,1.3s-.7.9-1.2,1a5.8,5.8,0,0,1-2,0c-.3,0-.8-.3-.8-.5s-1.4-1.7-2.6-2l-31.9-7.3c-2.2-.5-3.1.1-2.8,2.4.4,3.9.9,7.9,1.4,11.8a1.4,1.4,0,0,0,.7.9,25.3,25.3,0,0,1,8.5,5.7,9.8,9.8,0,0,1-4.1,16.2l-2.1.5c.4,2.7.5,2.8,2.3,3.1l26,4.6a5.3,5.3,0,0,1,2.3.7,7,7,0,0,0,8.7-.1,2.4,2.4,0,0,1,1-.5l2.9-.5,24-4.2c2.4-.4,2.6-.7,2.6-3.2h-1Z" transform="translate(-407.5 -228.3)"></path><path d="M436.5,257.8a1.7,1.7,0,0,1,1.2,1.2,25.8,25.8,0,0,0,6.4,9.5c2.4,2.1,5.2,3.3,8.5,2.8a11,11,0,0,0,5.5-2.8,26.7,26.7,0,0,0,6.4-9.5,1.9,1.9,0,0,1,.9-1,5.8,5.8,0,0,0,3.9-5.6c-.1-1.8-.3-2-2.1-2.2v-1c.2-1.8.6-3.6.7-5.4.2-3.8-.8-7.1-4-9.5l-2.7-2.2c-5.4-4.2-11.2-4.9-17.3-2-1.9.9-3.5,2.6-5.3,3.8-3.9,2.7-4.9,6.5-4.5,10.9.2,1.8.5,3.6.7,5.4-.9,0-1.7,0-2,1.1A5.6,5.6,0,0,0,436.5,257.8Z" transform="translate(-407.5 -228.3)"></path><path d="M444.2,291c2.5.4,5.1.3,6.8,2.7a6.5,6.5,0,0,1,3.9-2.3l24.4-3.7,4.2-.7c-.1-.6-.1-1.1-.2-1.5-.3-4.5-2.4-7.8-6.9-9.2l-8.6-2.8-5.7-1.5a20.7,20.7,0,0,1-2.1,3c-2.1,2.2-4.3,4.3-6.7,6.3s-2.6,1.8-4.9-.1-6.4-5.4-8.4-9.3l-5.2,1.3c-4.2,1.2-8.3,2.3-12.1,4.6a5.9,5.9,0,0,0-3.1,4c-.4,1.7-.8,3.4-1.2,5.2l1,.3Z" transform="translate(-407.5 -228.3)"></path><path d="M493,309.5a2.9,2.9,0,0,0-4-1,20.9,20.9,0,0,0-7.1,5.1,5,5,0,0,0-1.3,3.6,6.1,6.1,0,0,0,7.4,6.2c3.5-.7,5.2-3.2,6.2-6.4A7.7,7.7,0,0,0,493,309.5Z" transform="translate(-407.5 -228.3)"></path><path d="M420.5,314a19.9,19.9,0,0,0-4.3-3.8,19.7,19.7,0,0,0-4.1-2,2.2,2.2,0,0,0-1.7.3c-2.1,1.3-2.8,3.4-2.9,6.1s1.6,6.4,4.9,8.3a6.2,6.2,0,0,0,7.6-1.1A6,6,0,0,0,420.5,314Z" transform="translate(-407.5 -228.3)"></path></svg>
                  </div>
                  <div>Parent Login</div>
                </div>
            </div>
          </div>
          <div className={` ${isScrolled ? "three-lines" : "bg-blue "} radius-6 mx-2 nav-dropdwom `}>
            <BsList
              className="cursor"
              size={30}
              color={isScrolled ? "black" : "white"}
              onClick={() => handleClick()}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
