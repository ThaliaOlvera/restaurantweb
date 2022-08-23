import React from "react";
import { SubHeading } from "../../components";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Prueba el nuevo sabor" />
          <h1 className="app__header-h1">La clave de una buena comida</h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}>Una experiencia en donde no solo comeras,
           si non tambien beberas y podras disfrutar con la mejor musica lounge. 
           ¿Ya se imaginan la experiencia? Sin duda lo volveras a hacer.</p>
          <button className="custom__button">Explorar menu</button>
        </div>
      </div>
    </>
  );
};


