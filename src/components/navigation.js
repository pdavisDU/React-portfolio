import React from "react";
import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Resume from "./resume";
import "../Styles/navigation.css";

const Navigation = ({
  setAboutCard,
  setPortfolio,
  setContact,
  setResume,
  AboutCard,
  PortfolioCard,
  ContactCard,
  ResumeCard,
}) => {
  const [active, setActive] = useState("about");
  return (
    <header>
      {/* <h1>Paul Davis</h1> */}
      <nav class="navbar navbar-expand-lg justify-content-center">
        <button
          onClick={() => {
            setAboutCard(true);
            setPortfolio(false);
            setContact(false);
            setResume(false);
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setAboutCard(false);
            setPortfolio(true);
            setContact(false);
            setResume(false);
          }}
        >
          My Work
        </button>
        <button
          onClick={() => {
            setAboutCard(false);
            setPortfolio(false);
            setContact(true);
            setResume(false);
          }}
        >
          Contact Me
        </button>
        <button
          onClick={() => {
            setAboutCard(false);
            setPortfolio(false);
            setContact(false);
            setResume(true);
          }}
        >
          My Resume
        </button>
      </nav>
    </header>
  );
};
export default Navigation;
