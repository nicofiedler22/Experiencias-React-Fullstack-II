import React from 'react';
import BarraNavegacion from './BarraNavegacion';

// Con este organismo armamos la cabecera institucional de "El Volcán".
// Integra la navegación superior, el título corporativo, nuestro logo y subtítulos dinámicos.
export default function Header({ subtitulo = null, logoMarca = null }) {
  return (
    <>
      <BarraNavegacion />
      <header id="encabezado">
        <h1>Gas Licuado "El Volcan"</h1>
        <img
          src="/img/logo.png"
          alt="Logo Gas Licuado El Volcán"
          className="logo-principal"
        />
        {subtitulo && <h2>{subtitulo}</h2>}
        {logoMarca && (
          <img src={logoMarca} alt="Logo de Marca Asociada" id="logo-marca" />
        )}
      </header>
    </>
  );
}