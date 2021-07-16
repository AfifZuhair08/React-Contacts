import React from "react";
import ReactDOM from "react-dom";

// REUSABLE FUNCTION/COMPONENT
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" height="300" width="300"/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      tel="+123 456 789" 
      email="b@beyonce.com"/>
    <Card 
      name="Eminem" 
      img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSusoQHrrN1QD_DMEYP5yYn1bBI-oj7rnnA7WeK7429w1NyCeYV" 
      tel="+60104122818" 
      email="me@eminem.com"
    />
    <input id="fName" type="text"/>
  </div>,
  document.getElementById("root")
);
