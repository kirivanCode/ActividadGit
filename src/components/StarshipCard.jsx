import React from "react";
import "./StarshipCard.css"; // Importa los estilos
import starshipImage from "../assets/starship.gif"; // Asegúrate de tener una imagen en assets

const StarshipCard = () => {
  return (
    <div className="starship-card">
      <img src={starshipImage} alt="Starship" className="starship-image" />
      <div className="starship-content">
        <h2>Starship / Super Heavy</h2>
        <p>
          Starship/Super Heavy es un sistema de lanzamiento y nave espacial totalmente reutilizable desarrollado por SpaceX 
          como proyecto de vuelo espacial privado. Fue diseñado para permitir el transporte de carga y pasajeros hacia la órbita 
          terrestre, la Luna, Marte y más allá.
        </p>
        <p>
          La nave (nombrada como Starship) se usará en lanzamientos orbitales en conjunto con una primera etapa, el propulsor 
          Super Heavy, por lo que servirá como un vehículo de lanzamiento de dos etapas a órbita. A la combinación de nave espacial 
          (2.ª etapa) y propulsor (1.ª etapa) también se le llama Starship.
        </p>
        <div className="buttons">
          <a href="https://www.spacex.com/vehicles/starship/" target="_blank" rel="noopener noreferrer" className="btn btn-spacex">
            Más Información
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarshipCard;
