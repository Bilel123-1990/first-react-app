import React from "react";
import '../styles/card.css'
export default function card(props) {
  return (
    <div className="divcard">

      <div className="div3">
        <img
          src={props.img}
          alt="img1"
        />
        <h4> {props.title}</h4>
        <h4> {props.parag}</h4>
      </div>

    </div>
  );
}
