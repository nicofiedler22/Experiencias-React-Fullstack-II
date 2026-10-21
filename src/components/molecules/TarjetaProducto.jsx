import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Boton from '../atoms/Boton';

// En esta molécula controlamos la tarjeta de producto validando el rol del usuario para comprar
export default function TarjetaProducto({ producto }) {
  const { usuario, agregarAlCarrito, favoritos, toggleFavorito } = useContext(AppContext);
  const navigate = useNavigate();
  const esFavorito = favoritos.includes(producto.id);

  const handleAgregarCarrito = () => {
    // Caso 1: No hay sesión iniciada
    if (!usuario) {
      alert('Debes iniciar sesión como Cliente para agregar balones a tu pedido.');
      navigate('/login');
      return;
    }

    // Caso 2: Es administrador
    if (usuario.rol === 'admin') {
      alert('Los administradores no pueden realizar pedidos de compra. Solo gestionan el catálogo.');
      return;
    }

    // Caso 3: Es cliente autenticado
    agregarAlCarrito(producto);
  };

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio.toLocaleString('es-CL')}</strong></p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
        <Boton
          texto={usuario?.rol === 'admin' ? 'Compra Deshabilitada (Admin)' : 'Agregar al Carrito'}
          onClick={handleAgregarCarrito}
          className={usuario?.rol === 'admin' ? 'disabled' : ''}
        />

        <Link
          to={`/producto/${producto.id}`}
          className="link-vinculo"
          style={{ fontSize: '13px', padding: '6px' }}
        >
          Ver Detalle
        </Link>

        <button
          type="button"
          onClick={() => toggleFavorito(producto.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            color: esFavorito ? '#d9534f' : '#666',
            marginTop: '4px'
          }}
        >
          {esFavorito ? '❤️ En Favoritos' : '🤍 Guardar Favorito'}
        </button>
      </div>
    </div>
  );
}