import React from "react";
import "./Animal.css";
const Animal = props => {
  return (
    <div className="animal-div">
      <h2 className="name">{props.name}</h2>
      <button
        className="button"
        onClick={() => props.onPetAnimal(props.name)}
      >{`Pet the ${props.name}`}</button>
    </div>
  );
};
export default Animal;
