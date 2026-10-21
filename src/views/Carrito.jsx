import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { AppContext } from '../context/AppContext';
import Boton from '../components/atoms/Boton';

// En esta vista calculamos el total del pedido y permitimos gestionar los ítems agregados.
// Representa la sección final de compra que teníamos en los HTML individuales.
export default function Carrito() {
  const navigate = useNavigate();
  const { carrito, eliminarDelCarrito, vaciarCarrito, usuario } = useContext(AppContext);

  // Obtenemos el total acumulado multiplicando precio por cantidad de cada elemento
  const total = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);

  const handleComprar = () => {
    if (!usuario) {
      alert('Para finalizar tu compra debes identificarte como Cliente con tus datos de entrega.');
      navigate('/login');
      return;
    }

    if (usuario.rol === 'admin') {
      alert('Acción restringida: Los administradores gestionan el catálogo, no realizan pedidos.');
      return;
    }

    if (carrito.length === 0) {
      alert('Debe agregar al menos un balón o adicional antes de continuar.');
      return;
    }

    alert(
      `¡Pedido confirmado exitosamente por $${total.toLocaleString('es-CL')}!\n` +
      `Se enviará a: ${usuario.direccion || 'Dirección registrada'}\n` +
      `Horario preferente: ${usuario.horarioEntrega || 'Horario hábil'}\n` +
      `Camión de reparto El Volcán en camino.`
    );
    vaciarCarrito();
  };

  return (
    <>
      <Header subtitulo="CARRITO DE COMPRAS" />
      <main id="contenido">
        <section id="presentacion" style={{ maxWidth: '850px' }}>
          <h2>Resumen de su Pedido</h2>

          {carrito.length === 0 ? (
            <div style={{ padding: '30px' }}>
              <p>Tu carrito de compras está actualmente vacío.</p>
              <br />
              <Link to="/productos" className="link-menu">Ver Catálogo de Marcas</Link>
            </div>
          ) : (
            <>
              <div style={{ width: '100%', overflowX: 'auto', margin: '20px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgb(45, 118, 161)' }}>
                      <th style={{ padding: '10px' }}>Producto</th>
                      <th style={{ padding: '10px' }}>Precio</th>
                      <th style={{ padding: '10px' }}>Cantidad</th>
                      <th style={{ padding: '10px' }}>Subtotal</th>
                      <th style={{ padding: '10px' }}>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '10px' }}>
                          <strong>{item.nombre}</strong> ({item.marca?.toUpperCase()})
                        </td>
                        <td style={{ padding: '10px' }}>${item.precio.toLocaleString('es-CL')}</td>
                        <td style={{ padding: '10px' }}>{item.cantidad}</td>
                        <td style={{ padding: '10px' }}>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                        <td style={{ padding: '10px' }}>
                          <button
                            type="button"
                            onClick={() => eliminarDelCarrito(item.id)}
                            style={{
                              background: '#e74c3c',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '5px 10px',
                              cursor: 'pointer'
                            }}
                          >
                            Quitar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div id="compra">
                <h2>Total: ${total.toLocaleString('es-CL')}</h2>
                <Boton texto="COMPRAR" onClick={handleComprar} />
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}