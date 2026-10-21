import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

// En esta vista representamos la pantalla inicial de catálogo (productos.html).
// Le permitimos al usuario elegir entre Abastible, Gasco y Lipigas para ver sus productos.
export default function CatalogoMarcas() {
  const marcas = [
    { id: 'abastible', nombre: 'Abastible', imagen: '/img/abastible.jpg' },
    { id: 'gasco', nombre: 'Gasco', imagen: '/img/gasco.jpg' },
    { id: 'lipigas', nombre: 'Lipigas', imagen: '/img/lipigas.jpg' }
  ];

  return (
    <>
      <Header subtitulo="CATÁLOGO GENERAL" />
      <main id="contenido">
        <section id="presentacion">
          <h2>Marcas asociadas</h2>
          <p>
            Trabajamos con reconocidas marcas de gas y productos relacionados para ofrecerte distintas
            alternativas de calidad. Selecciona una marca para conocer su catálogo disponible.
          </p>

          <div id="galerias" style={{ marginTop: '30px' }}>
            {marcas.map((marca) => (
              <Link to={`/productos/${marca.id}`} key={marca.id}>
                <article className="tarjeta">
                  <div className="contenido-tarjeta">
                    <img src={marca.imagen} alt={marca.nombre} />
                    <h2>{marca.nombre}</h2>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <h3 style={{ marginTop: '40px' }}>
            Para poder continuar y ver nuestro catálogo de productos asociados a cada marca, debe seleccionar una de ellas.
          </h3>
        </section>
      </main>
      <Footer />
    </>
  );
}