import React from "react";
import "./StarlinkCard.css"; // Importa los estilos
import starlinkImage from "../assets/starlink.png"; // Asegúrate de tener una imagen en assets

const StarlinkCard = () => {
  return (
    <div className="starlink-card">
      <img src={starlinkImage} alt="Starlink" className="starlink-image" />
      <div className="starlink-content">
        <h2>Starlink</h2>
        <p>
          Starlink es una constelación de satélites desarrollada por SpaceX con el objetivo de proporcionar internet de banda 
          ancha de alta velocidad en todo el mundo, especialmente en zonas rurales y de difícil acceso.
        </p>
        <p>
          Este sistema se compone de miles de satélites en órbita baja que trabajan juntos para ofrecer una conexión estable 
          y de baja latencia. SpaceX sigue lanzando satélites para expandir su cobertura global y mejorar la calidad del servicio.
        </p>
        <div className="buttons">
          <a href="https://www.starlink.com/" target="_blank" rel="noopener noreferrer" className="btn btn-starlink">
            Más Información
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarlinkCard;
