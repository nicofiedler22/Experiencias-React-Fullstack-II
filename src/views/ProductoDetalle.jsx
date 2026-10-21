import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { AppContext } from '../context/AppContext';
import Boton from '../components/atoms/Boton';

// En esta vista mostramos la ficha detallada de un producto seleccionado.
// Usamos estados locales con useState para calcular el subtotal en tiempo real según la cantidad.
export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productos, agregarAlCarrito, usuario } = useContext(AppContext);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  // Buscamos el producto coincidente en nuestra lista global mediante su ID
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <>
        <Header subtitulo="PRODUCTO NO ENCONTRADO" />
        <main id="contenido" style={{ padding: '60px 20px' }}>
          <h2>El producto solicitado no existe o fue retirado del catálogo.</h2>
          <br />
          <Link to="/productos" className="link-vinculo">Volver al Catálogo</Link>
        </main>
        <Footer />
      </>
    );
  }

  // Agregamos al carrito la cantidad de unidades seleccionadas por el usuario
  const handleAgregar = () => {
    if (!usuario) {
      alert('Debes iniciar sesión como Cliente para armar un pedido de gas.');
      navigate('/login');
      return;
    }

    if (usuario.rol === 'admin') {
      alert('Modo Administrador: Tienes permisos para editar este producto en el panel, no para comprarlo.');
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(producto);
    }
    setMensaje(`¡Se agregaron ${cantidad} unidad(es) de ${producto.nombre} al carrito!`);
    setTimeout(() => setMensaje(''), 4000);
  };

  return (
    <>
      <Header subtitulo={producto.nombre} />
      <main id="contenido">
        <section id="presentacion" style={{ maxWidth: '700px' }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ width: '280px', height: '240px', objectFit: 'contain' }}
          />
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p><strong>Marca:</strong> {producto.marca.toUpperCase()}</p>
          <p style={{ fontSize: '24px', color: 'rgb(30, 75, 105)' }}>
            <strong>Precio Unitario: ${producto.precio.toLocaleString('es-CL')}</strong>
          </p>

          <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <label htmlFor="cantidad"><strong>Cantidad a pedir:</strong></label>
            <input
              id="cantidad"
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ width: '75px', padding: '6px', borderRadius: '10px', border: '2px solid rgb(45, 118, 161)', textAlign: 'center' }}
            />
          </div>

          <p style={{ fontSize: '18px' }}>
            <strong>Subtotal Estimado:</strong> ${(producto.precio * cantidad).toLocaleString('es-CL')}
          </p>

          {mensaje && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>{mensaje}</p>}

          <div style={{ marginTop: '25px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Boton texto="Agregar al Carrito" onClick={handleAgregar} />
            <Link to={`/productos/${producto.marca}`} className="link-vinculo">
              Volver a {producto.marca.toUpperCase()}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}