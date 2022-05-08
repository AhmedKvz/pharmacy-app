import React from "react";
import "../styles/AboutPage.css";
function AboutPage() {
  const handleClick = () => {
    window.open("https://github.com/AhmedKvz");
  };
  return (
    <div className="about">
      <div className="version">
        <h1>
          Pharmacy App <span className="ver">version 1.0.0</span>
        </h1>
      </div>

      <div className="footer">
        <p>
          Developed by{" "}
          <span className="ahmed" onClick={handleClick}>
            Ahmed
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
