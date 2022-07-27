import "./App.css";
import Navigation from "./components/navigation";
import About from "./components/about";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import { useState } from "react";

function App() {
  const [AboutCard, setAboutCard] = useState(true);
  const [PortfolioCard, setPortfolio] = useState(false);
  const [ContactCard, setContact] = useState(false);
  const [ResumeCard, setResume] = useState(false);
  return (
    <div className="App">
      <Navigation
        setAboutCard={setAboutCard}
        AboutCard={AboutCard}
        setPortfolio={setPortfolio}
        PortfolioCard={PortfolioCard}
        setContact={setContact}
        ContactCard={ContactCard}
        setResume={setResume}
        ResumeCard={ResumeCard}
      />
      <div className="container">
        {!PortfolioCard && !ContactCard && !ResumeCard ? (
          <>
            <About />
          </>
        ) : (
          <></>
        )}
        {!ContactCard && !AboutCard && !ResumeCard ? (
          <>
            <Portfolio />
          </>
        ) : (
          <></>
        )}
        {!PortfolioCard && !AboutCard && !ResumeCard ? (
          <>
            <Contact />
          </>
        ) : (
          <></>
        )}
        {!PortfolioCard && !AboutCard && !ContactCard ? (
          <>
            <Resume />
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default App;
