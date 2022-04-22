import React from "react";
import marvel from "../../../public/assets/images/marvel.png"
import pet from "../../images/pet-search.png"
import daily from "../../images/daily.png"
import pw from "../../images/pw.png"

export default function myWork() {
    return (
        <main>
            <div className="container">
                <section className="about-info">
                    <h2 id="myWork">My Work</h2>
                    <div className="card-container">
                        <div className="card">
                            <img id="mine" src={marvel} alt="Marvel app" />
                            <h3>Marvel For Beginners</h3>
                            <a href="https://bhodge166.github.io/MarvelForBeginners/">Live link</a>
                            <a href="https://github.com/bhodge166/MarvelForBeginners">Repo</a>
                        </div>
                        <div className="card">
                            <img src={pet} alt="Pet finder" />
                            <h3>Pet finder</h3>
                            <a href="https://find-your-next-pet.herokuapp.com/">Live link</a>
                            <a href="https://github.com/Ccatalyst/Find-Your-Next-Pet">Repo</a>
                        </div>
                        <div className="card">
                            <img src={daily} alt="Daily Planner" />
                            <h3>Daily Planner</h3>
                            <a href="https://pdavisdu.github.io/daily-planner/">Live link</a>
                            <a href="https://github.com/pdavisDU/daily-planner">Repo</a>
                        </div>
                        <div className="card">
                            <img src={pw} alt="Password Generator" />
                            <h3>Password Generator</h3>
                            <a href="https://pdavisdu.github.io/Password-generator/">Live link</a>
                            <a href="https://github.com/pdavisDU/Password-generator">Repo</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}