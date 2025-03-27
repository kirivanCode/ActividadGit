import React from "react";
import "./ElonBloc.css"; // Importa los estilos
import elonImage from "../assets/elon.jpg"; // Asegúrate de tener una imagen en assets

const ElonBloc = () => {
  return (
    <div className="bloc-container">
      <img src={elonImage} alt="Elon Musk" className="elon-image" />
      <div className="bloc-content">
        <h2>Elon Musk</h2>
        <p>
          Elon Musk es un empresario, ingeniero y visionario que ha revolucionado las industrias del transporte, la energía y el espacio. 
          Es el CEO de Tesla, SpaceX, Neuralink y The Boring Company.
        </p>
        <ul className="achievements">
          <li>🚀 Fundador de SpaceX (2002)</li>
          <li>⚡ CEO de Tesla (2008 - Actualidad)</li>
          <li>🧠 Fundador de Neuralink</li>
          <li>🌎 Co-fundador de OpenAI</li>
          <li>🏗️ Creador de The Boring Company</li>
        </ul>
        <div className="buttons">
          <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="btn btn-twitter">
            Seguir en Twitter
          </a>
          <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer" className="btn btn-spacex">
            Visitar SpaceX
          </a>
        </div>
      </div>
    </div>
  );
};

export default ElonBloc;
