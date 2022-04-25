import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { useState } from 'react';

function App(){
    const [AboutCard, setAboutCard] = useState(true);
    const [PortfolioCard, setPortfolio] = useState(false);
    const [ContactCard, setContact] = useState(false);
    return(
        <div>
            <Header
            setAboutCard = {setAboutCard}
            AboutCard = {AboutCard}
            setPortfolio = {setPortfolio}
            PortfolioCard = {PortfolioCard}
            setContact = {setContact}
            ContactCard = {ContactCard}
            />
            <div className='container'>
                {
                    !PortfolioCard && !ContactCard? (
                        <>
                        <About/>
                        </>
                    ): (
                        <>
                        </>
                    )
                }
                {
                    !ContactCard && !AboutCard? (
                        <>
                        <Portfolio/>
                        </>
                    ): (
                        <>
                        </>
                    )
                }
                {
                    !PortfolioCard && !AboutCard? (
                        <>
                        <Contact/>
                        </>
                    ): (
                        <>
                        </>
                    )
                }
            </div>
            <Footer/>
        </div>
    );
}
export default App;