import React from "react";
import "./Footer.scss";
import "./FooterMediaQ.scss";

function Footer() {
  return (
    <>
      <div className='flexContainer'>
        <div id='footerText'>
          <h3>Terms&Privacy</h3>
          <h3>Contact</h3>
        </div>

        <div id='contact'>
          <h5>©2022|Light Stage|All Rights Reserved</h5>
          <img
            src={require("../Images/iconINSTAGRAM.png")}
            alt='instagramIcon'
          />
          <img src={require("../Images/iconTWITTER.png")} alt='twitterIcon' />
        </div>
      </div>
    </>
  );
}

export default Footer;
