import React from "react";
import "../../src/styles/home.css";
import Card from '../components/card.jsx'

export default function home() {
  return (
    <div className="home-container">
        <div className="divflex">
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card2.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"} />
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card8-hover.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
       </div>
       <div className="divflex"> 
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card5-hover.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
       <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card9-hover.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
       </div>
      {/* <div className="div2">
        <h3>
          Formation développeur web : Le code d'aujourd'hui, votre emploi de
          demain
        </h3>
        <h1>
          Des formations diplômantes faites par des experts plus que passionnés
          pour vous mener au succès professionnel.
        </h1>
      </div>
      <div className="divflex">
      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card2.svg"
          alt="img1"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>

      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card8-hover.svg"
          alt="img2"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>

      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg"
          alt="img3"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>
       </div>

       <div className="divflex">
      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card6-hover.svg"
          alt="img4"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>
      
      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card5-hover.svg"
          alt="img5"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>

      <div className="div3">
        <img
          src="https://3wa.fr/wp-content/uploads/2020/03/card9-hover.svg"
          alt="img6"
        />
        <h4> 1er bootcamp en France</h4>
        <h4>4500 alumni formés depuis 2012</h4>
      </div>
      </div>                      */}

    </div>
  );
}
