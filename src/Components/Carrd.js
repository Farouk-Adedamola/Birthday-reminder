import React, { useState } from "react";
import { data } from "../data";
import "./Carrd.css";
// images

const Carrd = () => {
  const [info, setInfo] = useState(data);
  return (
    <React.Fragment>
      {info.map((person) => {
        const { img, name, age } = person;
        return (
          <div className="inner-container">
            <img
              src={img}
              style={{
                height: "75px",
                width: "80px",
                borderRadius: "80px",
                objectFit: "cover",
              }}
              alt=""
            />
            <div className="second">
              <p className="reminder-name">{name}</p>
              <p className="reminder-age">{age} years old</p>
            </div>
          </div>
        );
      })}
      <div className="btn-container">
        <button type="button" className="btn" onClick={() => setInfo([])}>
          Clear all
        </button>
      </div>
    </React.Fragment>
  );
};

export default Carrd;
