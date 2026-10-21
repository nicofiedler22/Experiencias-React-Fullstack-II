import React from 'react';

// Con esta molécula representamos a cada integrante de nuestro equipo de colaboradores
// en la sección de presentación del Home, conservando la estructura de tarjeta original.
export default function ColaboradorCard({ nombre, cargo, imagen }) {
  return (
    <div className="card-colaborador">
      <img src={imagen} alt={nombre} />
      <p><strong>{nombre}</strong> como:</p>
      <p>{cargo}</p>
    </div>
  );
}