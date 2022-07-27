import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons//md";
import { BsGithub } from "react-icons/bs";
import "../Styles/about.css";
import "../Styles/portfolio.css";
import "../Styles/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="mailto: pdavisDU@gmail.com" target="_blank">
            {" "}
            <MdOutlineEmail />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.linkedin.com/in/paul-davis-58663a74/"
            target="_blank"
          >
            {" "}
            <BsLinkedin />{" "}
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/pdavisDU"
            target="_blank"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
