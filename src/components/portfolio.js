import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/portfolio.css";
import Marvel from "../images/marvel.png";
import Password from "../images/pw.png";
import Daily from "../images/daily.png";

const Portfolio = () => {
  return (
    <div id="work" className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Marvel For Beginners</h3>
          <a
            href="https://bhodge166.github.io/MarvelForBeginners/"
            target="_blank"
          >
            <img src={Marvel} className="img-fluid" alt="Marvel Project" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/bhodge166/MarvelForBeginners"
            target="_blank"
          >
            Github Repo
          </a>
          <br></br>
          This was my first project. Our team built an app using the Marvel API
          to help people new to Marvel learn about the MCU. You can search
          characters and see the movies and comics that they appeared in. We
          also used the Rotten Tomatoes API to show their ratings.
        </div>

        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Password Generator</h3>
          <a
            href="https://pdavisdu.github.io/Password-generator/"
            target="_blank"
          >
            <img src={Password} className="img-fluid" alt="PW image" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/pdavisDU/Password-generator"
            target="_blank"
          >
            Github Repo
          </a>{" "}
          <br></br>A simple random password generator.
        </div>

        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Daily Planner</h3>
          <a href="https://pdavisdu.github.io/daily-planner/" target="_blank">
            <img src={Daily} className="img-fluid" alt="Daily planner" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/pdavisDU/daily-planner"
            target="_blank"
          >
            Github Repo
          </a>{" "}
          <br></br>A simple daily planner to help you schdeule your day.
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
