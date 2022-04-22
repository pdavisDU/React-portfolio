import React from "react";
import home from "./pages/home";
import myWork from "./pages/myWork";
import aboutMe from "./pages/aboutMe";
import contactMe from "./pages/contactMe";
import navbar from "./navbar";

export default function portfolio(){
    const [myPage, setPage] = useState('home');
    const render = ()=>{
        if (myPage === 'home') {
            return <home />;
        }
        if (myPage === 'aboutMe') {
            return <aboutMe />;
        }
        if (myPage === 'myWork') {
            return <myWork />;
        }
        return <contactMe />;
    };
    const changePage = (page) => setPage(page);
    return (
        <>
            <navbar myPage={myPage} changePage={changePage} />
        </>
    )
}