import React from 'react';
const Portfolio = ()=>{
    return(
        <div id='myPortfolio' className='row'>
            <div className='column'>
                <h2>My Portfolio</h2>
            </div>
            <div id='liveWork' className='column'>
                <div id='marvel' className='card'>
                    <div className='work'>Marvel for beginners</div>
                    <a href='https://bhodge166.github.io/MarvelForBeginners/' target='_blank'>Live Link</a>
                    <a href='https://github.com/bhodge166/MarvelForBeginners' target='_blank'>Repo</a>
                    <img src={require('../images/marvel.png')} alt='Marvel screenshot'></img>
                </div>
                <div  id='password' className='card'>
                    <div className='work'>Password Generator</div>
                    <a href='https://pdavisdu.github.io/Password-generator/' target='_blank'>Live Link</a>
                    <a href='https://github.com/pdavisDU/Password-generator' target='_blank'>Repo</a>
                    <img src={require('../images/pw.png')} alt='Password screenshot'></img>
                </div>
                <div id='daily-planner' className='card'>
                    <div className='work'>Daily Planner</div>
                    <a href='https://pdavisdu.github.io/daily-planner/' target='_blank'>Live Link</a>
                    <a href='https://github.com/pdavisDU/daily-planner' target='_blank'>Repo</a>
                    <img src={require('../images/daily.png')} alt='Planner screenshot'></img>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;