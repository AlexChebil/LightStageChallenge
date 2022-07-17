import React, { useState } from "react";
import "./Header.scss";
import "./HeaderMediaQ.scss";

function Header() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });

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
        {
          /* A ternary operator. It is a shorthand if/else statement. */
          currentWidth >= 600 ? (
            <img
              id='BannerBig'
              src={require("../Images/bannerBig.jpg")}
              alt=''
            />
          ) : (
            <img
              id='BannerSmall'
              src={require("../Images/bannerSmall.jpg")}
              alt=''
            />
          )
        }

        <div id='bannerText'>
          <h1>Creative motion projects</h1>
          <h4>Discover client work to pitch on.</h4>
        </div>

        <span id='bannerCaption'>Video by Harold Miles</span>
      </div>
    </>
  );
}

export default Header;
