import React, { useEffect } from "react";
import "./Card.scss";
import "./CardMediaQ.scss";

import AOS from "aos";
import "aos/dist/aos.css";
/* Importing the AOS library and the CSS file for the library.
(the only external library used on this project for some css animations) */

function Card({ data }) {
  useEffect(() => {
    /* Initializing the AOS library. */
    AOS.init({
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Destructuring the data object and then using the data to 
      populate the card. */}
      <div
        data-aos='fade-up'
        /* A data attribute that is used by the AOS library to determine 
        the animation that will be applied to the element. */
        className='card'
      >
        <div className='upperSection'>
          <h4>{data.name} </h4>
          <h4>{[data.address.street, ", ", data.address.city, "📍"]} </h4>
        </div>

        <div className='middleSection'>
          <h2>{data.company.catchPhrase} </h2>

          <div id='pillsContainer'>
            {/* Splitting the string into an array of words, then slicing the
             array to only 3 words (design requirements),then mapping over 
             the array and returning a div for each word. */}
            {data.company.bs
              .split(" ")
              .slice(0, 3)
              .map((entry) => (
                <div key={Math.random()} id='pill'>
                  <p>{entry}</p>
                </div>
              ))}
          </div>

          <hr id='cardHR' />
        </div>

        <div className='footerSection'>
          <h4>📞{data.phone} </h4>
          <h4>🌐{data.website} </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
