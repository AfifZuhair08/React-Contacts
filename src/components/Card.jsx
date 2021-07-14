import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
    return(
        <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar avatarImg={props.imgURL}/>
        </div>
        <div className="bottom">
            <Info info={props.phone}/>
            <Info info={props.email}/>
        </div>
      </div>
    );
}

export default Card;