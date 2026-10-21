import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

// En este organismo construimos la barra de navegación adaptativa según el rol del usuario
export default function BarraNavegacion() {
  const { usuario, logout, carrito } = useContext(AppContext);
  const navigate = useNavigate();

  // Contamos la cantidad total de artículos sumando unidades en el carrito de compras
  const totalItems = carrito ? carrito.reduce((acum, item) => acum + item.cantidad, 0) : 0;

  const handleCerrarSesion = () => {
    logout();
    navigate('/login');
  };

  // Verificamos de forma segura si el usuario actual posee rol de administrador
  const esAdmin = Boolean(usuario && usuario.rol === 'admin');

  return (
    <nav id="vinculos">
      <ul>
        <Link to="/">INICIO</Link>
        <Link to="/productos">CATÁLOGO</Link>
        <Link to="/carrito">CARRITO ({totalItems})</Link>

        {usuario ? (
          <>
            {/* Si es Administrador mostramos 'Administrador', si es Cliente mostramos su nombre */}
            <Link to="/perfil">
              MI PERFIL ({esAdmin ? 'Administrador' : usuario.nombre})
            </Link>

            {/* Solo mostramos el acceso al Panel Admin si el rol es estrictamente 'admin' */}
            {esAdmin && (
              <Link
                to="/admin"
                style={{
                  backgroundColor: '#fcf3cf',
                  borderColor: '#f39c12',
                  color: '#b9770e'
                }}
              >
                PANEL ADMIN
              </Link>
            )}

            <button
              type="button"
              onClick={handleCerrarSesion}
              className="link-vinculo"
              style={{ background: '#e74c3c', color: 'white' }}
            >
              SALIR
            </button>
          </>
        ) : (
          <>
            <Link to="/login">INICIAR SESIÓN</Link>
            <Link to="/registro">REGISTRARME</Link>
          </>
        )}
      </ul>
    </nav>
  );
}