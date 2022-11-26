import React from "react";
import cctlogo1 from "../assets/images/cctLogoLarge.jpg";

// import css
import "./homeStyle.css";


const Home = () => {

    return (
        <div className="main">
            <img className="cctLogoLarge" src={cctlogo1} alt="outline of horse with parliament buildings in background"></img>
            <h1>Home</h1>
        </div>
    )
}

export default Home;