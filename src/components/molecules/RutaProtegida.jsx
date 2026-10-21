import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

// En esta molécula controlamos el acceso privado por autenticación y por roles.
// Si no hay sesión, va a Login. Si la ruta exige ser Admin y el usuario es Cliente, lo enviamos a su perfil.
export default function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario } = useContext(AppContext);

  // 1. Si no hay ningún usuario autenticado en sesión
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si la ruta es exclusiva para administrador y el usuario es cliente
  if (soloAdmin && usuario.rol !== 'admin') {
    return <Navigate to="/perfil" replace />;
  }

  return children;
}