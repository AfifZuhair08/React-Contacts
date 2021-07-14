import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// Single object with list of arrays (Contact for contacts)
function createCard(contact) {
  return(
    <Card 
      key={contact.id} //special property
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* REPETITIVE ELEMENT USING MAP*/}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
