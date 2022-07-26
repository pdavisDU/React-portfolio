import React from "react";
import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";

const Navigation = ({
  setAboutCard,
  setPortfolio,
  setContact,
  AboutCard,
  PortfolioCard,
  ContactCard,
}) => {
  const [active, setActive] = useState("about");
  return (
    <header>
      <h1>Paul Davis</h1>
      <nav>
        <button
          onClick={() => {
            setAboutCard(true);
            setPortfolio(false);
            setContact(false);
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setAboutCard(false);
            setPortfolio(true);
            setContact(false);
          }}
        >
          My Work
        </button>
        <button
          onClick={() => {
            setAboutCard(false);
            setPortfolio(false);
            setContact(true);
          }}
        >
          Contact Me
        </button>
        <a
          type="button"
          className="btn"
          href="https://docs.google.com/document/d/1dK3Qpm4ZurdK2sUm5899TKM_YXmmnCIvWGbpu_2XgSI/edit?usp=sharing"
        >
          My Resume
        </a>
      </nav>
    </header>
  );
};
export default Navigation;
