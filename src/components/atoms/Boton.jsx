import React from 'react';

// Con este componente atómico aseguramos que todos los botones de nuestra aplicación
// tengan el mismo estilo corporativo y comportamiento unificado.
export default function Boton({ texto, onClick, tipo = 'button', variante = 'btn-volcan', className = '' }) {
  return (
    <button type={tipo} onClick={onClick} className={`${variante} ${className}`}>
      {texto}
    </button>
  );
}