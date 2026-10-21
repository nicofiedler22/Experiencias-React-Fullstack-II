import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// En este archivo centralizamos todas las rutas de nuestra aplicación "El Volcán".
// Conectamos cada URL con su respectiva vista modular.

import Home from './views/Home';
import CatalogoMarcas from './views/CatalogoMarcas';
import CatalogoProductos from './views/CatalogoProductos';
import ProductoDetalle from './views/ProductoDetalle';
import Login from './views/Login';
import Registro from './views/Registro';
import Carrito from './views/Carrito';
import Perfil from './views/Perfil';
import AdminPanel from './views/AdminPanel';
import Error404 from './views/Error404';

// Importamos nuestra molécula de protección de rutas privadas
import RutaProtegida from './components/molecules/RutaProtegida';

export default function App() {
  return (
    <Routes>
      {/* 1. Página principal / Inicio */}
      <Route path="/" element={<Home />} />

      {/* 2. Catálogo general de marcas asociadas */}
      <Route path="/productos" element={<CatalogoMarcas />} />

      {/* 3. Catálogo de productos por marca específica (abastible, gasco, lipigas) */}
      <Route path="/productos/:marca" element={<CatalogoProductos />} />

      {/* 4. Detalle individual de un balón o accesorio */}
      <Route path="/producto/:id" element={<ProductoDetalle />} />

      {/* 5. Vista de inicio de sesión con validaciones */}
      <Route path="/login" element={<Login />} />

      {/* 6. Vista de registro de clientes */}
      <Route path="/registro" element={<Registro />} />

      {/* 7. Carrito de compras / Resumen de pago */}
      <Route path="/carrito" element={<Carrito />} />

      {/* 8. Mi Perfil (Ruta protegida que consulta localStorage) */}
      <Route
        path="/perfil"
        element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        }
      />

      {/* 9. Panel de Control / Admin (Protegido EXCLUSIVAMENTE para administradores) */}
      <Route
        path="/admin"
        element={
          <RutaProtegida soloAdmin={true}>
            <AdminPanel />
          </RutaProtegida>
        }
      />

      {/* 10. Manejo de error 404 para cualquier dirección inexistente */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}