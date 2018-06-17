import React from "react";


const NavBar = props => 
  
    <div className="jumbotron container-fluid text-center h1" >
        <p>Click a Character to score </p>
        <p>Don't click the same Character again!!</p>
        <p> Score: {props.score} </p>
        <p> MaxScore: {props.maxScore} </p>
    </div>;

export default NavBar;
