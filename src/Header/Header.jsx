import React from "react";
import "./Header.scss";
import "./HeaderMediaQ.scss";

function Header() {
  return (
    <>
      <div className='nav'>
        <img
          id='lightStageLogo'
          src={require("../Images/LightStageLogo.png")}
          alt=''
        />

        <div id='navText'>
          <h1>EXPLORE CREATORS</h1>
          <h2>MY PROJECTS</h2>
        </div>

        <img id='avatar' src={require("../Images/Avatar.png")} alt='' />
      </div>

      <div className='banner'>
        <img id='Banner' src={require("../Images/Banner.jpg")} alt='' />
        <div id='bannerText'>
          <h1>Creative motion projects</h1>
          <h4>Discover client work to pitch on.</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
