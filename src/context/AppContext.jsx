import React, { createContext, useState, useEffect } from 'react';
import { productosIniciales } from '../data/productosIniciales';

// En este archivo centralizamos el estado global de productos, usuarios registrados y sesión activa.
export const AppContext = createContext();

export function AppProvider({ children }) {
  // 1. Estado de productos: cargamos los iniciales (que son protegidos) y permitimos sumar personalizados
  const [productos, setProductos] = useState(() => {
    const prodsGuardados = localStorage.getItem('productos_volcan');
    if (prodsGuardados) {
      return JSON.parse(prodsGuardados);
    }
    // A los iniciales nos aseguramos de no marcarlos como personalizados
    return productosIniciales.map((p) => ({ ...p, esPersonalizado: false }));
  });

  // Guardamos los productos en localStorage para no perder los creados al recargar
  useEffect(() => {
    localStorage.setItem('productos_volcan', JSON.stringify(productos));
  }, [productos]);

  // 2. Base de datos de usuarios registrados en memoria/localStorage
  const [usuariosRegistrados, setUsuariosRegistrados] = useState(() => {
    const users = localStorage.getItem('usuarios_registrados_volcan');
    return users ? JSON.parse(users) : [];
  });

  useEffect(() => {
    localStorage.setItem('usuarios_registrados_volcan', JSON.stringify(usuariosRegistrados));
  }, [usuariosRegistrados]);

  // 3. Estado de la sesión actual
  const [usuario, setUsuario] = useState(() => {
    const sesion = localStorage.getItem('usuario_volcan');
    return sesion ? JSON.parse(sesion) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario_volcan', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('usuario_volcan');
    }
  }, [usuario]);

  // 4. Carrito y Favoritos
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  // Función para registrar un nuevo usuario cliente desde la vista de Registro
  const registrarNuevoUsuario = (nuevoUser) => {
    const usuarioCliente = {
      ...nuevoUser,
      rol: 'cliente'
    };
    setUsuariosRegistrados((prev) => [...prev, usuarioCliente]);
  };

  const login = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const logout = () => {
    setUsuario(null);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // CRUD: Crear producto nuevo (marcado como personalizable)
  const agregarProducto = (nuevo) => {
    const productoConId = {
      ...nuevo,
      id: Date.now(),
      esPersonalizado: true, // Esta bandera nos asegura que solo este producto se pueda editar/eliminar
      imagen: nuevo.imagen || '/img/logo.png'
    };
    setProductos((prev) => [productoConId, ...prev]);
  };

  // CRUD: Editar producto (solo si es personalizado)
  const editarProducto = (id, datosActualizados) => {
    setProductos((prev) =>
      prev.map((prod) => (prod.id === id && prod.esPersonalizado ? { ...prod, ...datosActualizados } : prod))
    );
  };

  // CRUD: Eliminar producto (solo si es personalizado)
  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((prod) => prod.id !== id || !prod.esPersonalizado));
  };

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider
      value={{
        productos,
        usuario,
        usuariosRegistrados,
        registrarNuevoUsuario,
        carrito,
        favoritos,
        login,
        logout,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        agregarProducto,
        editarProducto,
        eliminarProducto,
        toggleFavorito
      }}
    >
      {children}
    </AppContext.Provider>
  );
}