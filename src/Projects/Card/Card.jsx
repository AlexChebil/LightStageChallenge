import React from "react";
import "./Card.scss";
function Card({ data }) {
  return (
    <>
      <div className='card'>
        <div className='upperSection'>
          <h4>{data.name} </h4>
          <h4>{[data.address.street, ", ", data.address.city, "📍"]} </h4>
        </div>

        <div className='middleSection'>
          <h2>{data.company.catchPhrase} </h2>

          <div id='pillsContainer'>
            {data.company.bs.split(" ").map((entry) => (
              <div key={Math.random()} id='pill'>
                <p>{entry}</p>
              </div>
            ))}
          </div>

          <hr />
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
