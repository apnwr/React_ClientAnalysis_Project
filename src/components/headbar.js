import React from "react";

import "../headbar.css";
const HeadBar = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear()
    
  return (
    <div className="head-nav">
      <div className="div-center">
        <div className="div-header">
          <h2>
            Hello, <p>Welcome here</p>
          </h2>
        </div>
        <div className="date">
          <h4
            style={{
              padding: "0.5rem",
            }}
          >
            DATE
          </h4>
          <h4
            style={{
              border: "0.5px solid hsl(205, 77%, 57%)",
              padding: "0.5rem",
            }}
          >
            1/1/{year} - {date}/{month}/{year}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
