import React from "react";
function navbar({ myPage, changePage }) {
    return(
        <nav className="navbar narvbar-light">
        <a className={myPage === 'home' ? 'nav-link active name' : 'nav-link name'}
        href="#home"
        onClick={()=> changePage('home')}
        >Paul Davis</a>
        <button className="nav-toggle" type="button" data-toggle="collapse" data-target="#navDesign" aria-controls="navDesign" aria-expanded="false" aria-label="Toggle navigation">
            <span className="nav-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navDesign">
            <div className="navbar-nav">

                <a className={myPage === 'aboutMe' ? 'nav-item nav-link active' : 'nav-item nav-link'}
                href="#aboutMe"
                onClick={()=> changePage('aboutMe')}
                >About Me</a>
                <li className="nav-item">
                    <a 
                    className={myPage === 'myWork' ? 'nav-item nav-link active' : 'nav-item nav-link'}
                    href="#myWork"
                    onClick={()=> changePage('myWork')}
                    >My Work</a>
                </li>
                <li className="nav-item">
                    <a className={myPage === 'contactMe' ? 'nav-item nav-link active' : 'nav-item nav-link'}
                    href="#contactMe"
                    onClick={()=> changePage('contactMe')}
                    >Contact Me</a>
                </li>
            </div>
        </div>
        </nav>
    )
}
export default navbar