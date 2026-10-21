import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import TarjetaProducto from '../components/molecules/TarjetaProducto';
import { AppContext } from '../context/AppContext';

// Esta vista muestra dinámicamente los balones de gas y adicionales según la marca elegida en la URL.
// Reemplaza a las páginas estáticas abastible.html, gasco.html y lipigas.html en un único componente reutilizable.
export default function CatalogoProductos() {
  const { marca } = useParams();
  const { productos } = useContext(AppContext);

  // Filtramos la lista global de productos por la marca actual
  const productosMarca = productos.filter((p) => p.marca.toLowerCase() === marca?.toLowerCase());
  const balones = productosMarca.filter((p) => p.categoria === 'gas');
  const extras = productosMarca.filter((p) => p.categoria === 'extra');

  const logosPorMarca = {
    abastible: '/img/logoabastible.jpg',
    gasco: '/img/logogasco.jpg',
    lipigas: '/img/logolipigas.jpg'
  };

  return (
    <>
      <Header
        subtitulo={`CATÁLOGO DE PRODUCTOS - ${marca?.toUpperCase()}`}
        logoMarca={logosPorMarca[marca?.toLowerCase()] || null}
      />

      <main id="contenido">
        <section id="productos-gas">
          <h2>Balones de Gas</h2>
          <p>Seleccione uno o más de nuestros balones de gas disponibles.</p>
          <div id="catalogo-gas">
            {balones.map((prod) => (
              <TarjetaProducto key={prod.id} producto={prod} />
            ))}
          </div>
        </section>

        <section id="productos-extra">
          <h2>Productos adicionales</h2>
          <p>También puede agregar alguno de los siguientes productos a su compra.</p>
          <div id="catalogo-extra">
            {extras.map((prod) => (
              <TarjetaProducto key={prod.id} producto={prod} />
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <Link to="/carrito" className="link-menu" style={{ fontSize: '18px', padding: '12px 25px' }}>
            Ir al Carrito de Compras
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}