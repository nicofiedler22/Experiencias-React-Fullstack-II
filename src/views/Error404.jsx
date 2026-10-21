import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

// Esta vista atrapa cualquier ruta no registrada en nuestro enrutador, cumpliendo con la página 404 requerida.
export default function Error404() {
  return (
    <>
      <Header subtitulo="ERROR 404 - PÁGINA NO ENCONTRADA" />
      <main id="contenido" style={{ padding: '60px 20px' }}>
        <section id="presentacion" style={{ maxWidth: '600px' }}>
          <h2>Ups, la página que buscas no existe.</h2>
          <p>Verifica que la dirección esté bien escrita o regresa al inicio de El Volcán.</p>
          <br />
          <Link to="/" className="link-menu">VOLVER AL INICIO</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}