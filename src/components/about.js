import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/about.css";
// import "../Styles/portfolio.css";
import Me from "../images/PaulDavis_WebMedium.jpg";

const About = () => {
  return (
    <div class="row justify-content-around div">
      <h1>Paul Davis</h1>
      <div class="col-10">
        <img src={Me} class="img-fluid" id="profile" alt="Profile pic" />
      </div>
      <div id="header">
        <br></br>
        <p>
          Welcome to my portfolio! My Name is Paul Davis and I recently finished
          a full stack coding bootcamp at the University of Denver. I come from
          a background in real estate, but I was ready for a change in career
          that would allow me to follow my passion. In this new career path I am
          able to create and have the freedom to explore many different
          technologies, as well as continue to learn and challenge myself in an
          ever evolving field. I feel as though I have finally found a career
          that allows me to thrive not only as an individual, but within a team.
        </p>
      </div>
    </div>
  );
};
export default About;
