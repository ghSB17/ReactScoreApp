import React from "react";


const NavBar = props => 
  
    <div className="container-fluid text-center h6" >
        <strong><p>Click a Character to score </p>
        <p>Don't click the same Character again!!</p>
        <p> Score: {props.score} </p>
        <p> MaxScore: {props.maxScore} </p></strong>
    </div>;

export default NavBar;
