import React from "react";
import image from "../../assets/imgs/image.jpeg";
import "../../styles/header.css";


export default function Header() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="div-bar1">
          <img className="logo-navbar" src={image} alt="Image 3w" />
        </div>
        <div className="div-bar">
          <ul className="ul-bar">
            <li>Metier</li>
            <li>Technologie</li>
            <li>Entreprise</li>
            <li>Notre academy</li>
            <li>Ville</li>
          </ul>
          <button className="boutton">Cvthéque</button>
        </div>
      </nav>
    </div>
  );
}
