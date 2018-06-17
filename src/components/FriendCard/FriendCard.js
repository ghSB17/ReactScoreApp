import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
const FriendCard = props =>(
  
  
  <div className="card" data-id={props.id}   onClick={()=> (props.imgClick(props.id) )} >
    <div className="img-container">
      <img alt={props.name} src={props.image} data-name={props.name} />
    </div>

   </div> 
  

)

export default FriendCard;


  //   <div className="content">
  //     <ul>
  //       <li>
  //         <strong>Name:</strong> {props.name}
  //       </li>
  //       <li>
  //         <strong>Occupation:</strong> {props.occupation}
  //       </li>
  //       <li>
  //         <strong>Address:</strong> {props.location}
  //       </li>
  //     </ul>
  //   </div>
  //   <span className="remove">𝘅</span> 