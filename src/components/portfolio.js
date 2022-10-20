import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/portfolio.css";
import Marvel from "../images/marvel.png";
import Password from "../images/pw.png";
import Daily from "../images/daily.png";
import Pet from "../images/pet-search.png";
import Note from "../images/note.png";
import Weather from "../images/weather.png";
import Fetch from "../images/fetch.png";
import Chopz from "../images/chopz";
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

        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Pet Search</h3>
          <a href="https://find-your-next-pet.herokuapp.com/" target="_blank">
            <img src={Pet} className="img-fluid" alt="pet search" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/Ccatalyst/Find-Your-Next-Pet"
            target="_blank"
          >
            {" "}
            Github Repo
          </a>
          <br></br>This is my second project. Our team created an app that
          allows you to find pets at your local adoption shelters.
        </div>

        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Note Taking App</h3>
          <a href="https://note-jot-app.herokuapp.com/" target="_blank">
            <img src={Note} className="img-fluid" alt="note-jot-app" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/pdavisDU/Note-taker-app"
            target="_blank"
          >
            Github Repo
          </a>
          <br></br> A note taking app that allows you to add and delte notes.
        </div>
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Weather Forecast App</h3>
          <a href="https://pdavisdu.github.io/Weather-report/" target="_blank">
            <img src={Weather} className="img-fluid" alt="weather report" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/pdavisDU/Weather-report"
            target="_blank"
          >
            Github Repo
          </a>
          <br></br> An app that allows you to search for a city and get its 5
          day weather forecast.
        </div>
        <div className="col-sm-12 col-md-4 lowerBoxes" id="fetch">
          <h3>Fetch</h3>
          <a href="https://fetchdu.herokuapp.com/" target="_blank">
            <img src={Fetch} className="img-fluid" alt="fetch" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/AJShea86/Project-3-DU"
            target="_blank"
          >
            Github Repo
          </a>
          <br></br> This was my final project. Our team created an app for
          arranging playdates with pets and meeting others with similar pets!
        </div>
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>Chopz Salon</h3>
          <a href="https://chopz-website.herokuapp.com/" target="_blank">
            <img src={Chopz} className="img-fluid" alt="chopz" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/pdavisDU/Chopz-react-site"
            target="_blank"
          >
            Github Repo
          </a>
          <br></br> This is a site that I redesigned for a local salon. Before
          photos can be found on the github repo.
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
