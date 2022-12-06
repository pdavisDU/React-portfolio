import React from "react";
import "../Styles/resume.css";

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>My Resume</h3>
          <a
            href="https://drive.google.com/file/d/1-VGbyWyJz_ZaBuvIahkhJqKMZ20NUxdJ/view?usp=sharing"
            target="_blank"
          >
            <img
              src="https://www.kindpng.com/picc/m/237-2374125_submit-your-resume-png-download-cartoon-resume-png.png"
              className="img-fluid"
              alt="Resume"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>My Github</h3>
          <a href="https://github.com/pdavisDU" target="_blank">
            <img
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              className="img-fluid"
              alt="Github"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-4 lowerBoxes">
          <h3>My LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/paul-davis-58663a74/"
            target="_blank"
          >
            <img
              src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
              className="img-fluid"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
