import React, { useState, useContext } from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { AppContext } from '../context/AppContext';
import Boton from '../components/atoms/Boton';
import MensajeAlerta from '../components/atoms/MensajeAlerta';

// En esta vista protegida administramos el CRUD completo en memoria.
// Permitimos crear, editar y eliminar EXCLUSIVAMENTE los productos agregados en el panel.
export default function AdminPanel() {
  const { productos, agregarProducto, editarProducto, eliminarProducto } = useContext(AppContext);

  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('abastible');
  const [categoria, setCategoria] = useState('gas');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [notificacion, setNotificacion] = useState('');

  // Estado para saber si estamos editando un producto existente
  const [editandoId, setEditandoId] = useState(null);

  // Filtramos solo los productos que han sido creados en el panel
  const productosPersonalizados = productos.filter((p) => p.esPersonalizado === true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validamos campos obligatorios
    if (!nombre.trim() || !precio) {
      alert('Por favor ingrese al menos el nombre y el precio.');
      return;
    }

    // 2. Validamos que el precio sea estrictamente mayor a 0 (sin negativos ni ceros)
    const precioNumerico = Number(precio);
    if (isNaN(precioNumerico) || precioNumerico <= 0) {
      alert('Error en el precio: El valor del producto debe ser un número positivo mayor a $0.');
      return;
    }

    if (editandoId) {
      // Modo Edición
      editarProducto(editandoId, {
        nombre,
        marca,
        categoria,
        precio: precioNumerico,
        descripcion: descripcion || 'Producto modificado desde el Panel de Control.'
      });
      setNotificacion(`¡Producto "${nombre}" actualizado correctamente!`);
      setEditandoId(null);
    } else {
      // Modo Creación
      agregarProducto({
        nombre,
        marca,
        categoria,
        precio: precioNumerico,
        descripcion: descripcion || 'Producto ingresado desde el Panel de Control de El Volcán.'
      });
      setNotificacion(`¡Producto "${nombre}" registrado exitosamente en el catálogo!`);
    }

    setNombre('');
    setPrecio('');
    setDescripcion('');
    setTimeout(() => setNotificacion(''), 4000);
  };

  const iniciarEdicion = (prod) => {
    setEditandoId(prod.id);
    setNombre(prod.nombre);
    setMarca(prod.marca);
    setCategoria(prod.categoria);
    setPrecio(prod.precio);
    setDescripcion(prod.descripcion);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setNombre('');
    setPrecio('');
    setDescripcion('');
  };

  const handleEliminar = (id, nombreProd) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${nombreProd}" del catálogo?`)) {
      eliminarProducto(id);
      setNotificacion(`Producto "${nombreProd}" eliminado del catálogo.`);
      setTimeout(() => setNotificacion(''), 4000);
    }
  };

  return (
    <>
      <Header subtitulo="PANEL DE CONTROL DE ADMINISTRADOR" />
      <main id="contenido">
        
        {/* Formulario de Alta y Modificación */}
        <section id="presentacion" style={{ maxWidth: '750px' }}>
          <h2>{editandoId ? 'Modificar Producto Creado' : 'Registrar Nuevo Producto'}</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Los productos que registres aquí se sumarán automáticamente a los catálogos de Abastible, Gasco o Lipigas.
          </p>

          <MensajeAlerta tipo="exito" mensaje={notificacion} />

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div className="campo-form">
              <label htmlFor="nombreProd">Nombre del Producto:</label>
              <input
                id="nombreProd"
                type="text"
                placeholder="Ej. Balón Gasco 11 KG Promocional"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="marcaProd">Marca Asociada:</label>
              <select id="marcaProd" value={marca} onChange={(e) => setMarca(e.target.value)}>
                <option value="abastible">Abastible</option>
                <option value="gasco">Gasco</option>
                <option value="lipigas">Lipigas</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="catProd">Categoría:</label>
              <select id="catProd" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="gas">Balón de Gas</option>
                <option value="extra">Producto adicional / Accesorio</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="precioProd">Precio en Pesos ($):</label>
              <input
                id="precioProd"
                type="number"
                min="1"
                placeholder="Ej. 21000"
                value={precio}
                onKeyDown={(e) => {
                  // Bloqueamos caracteres no numéricos como '-', '+', 'e'
                  if (['-', '+', 'e', 'E', '.'].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => setPrecio(e.target.value)}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="descProd">Descripción:</label>
              <textarea
                id="descProd"
                rows="3"
                placeholder="Detalle o características del balón..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <Boton tipo="submit" texto={editandoId ? 'ACTUALIZAR CAMBIOS' : 'GUARDAR PRODUCTO'} />
              {editandoId && (
                <button
                  type="button"
                  onClick={cancelarEdicion}
                  className="link-vinculo"
                  style={{ background: '#7f8c8d', color: 'white' }}
                >
                  Cancelar Edición
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Tabla de Gestión: Editar y Eliminar solo los productos creados */}
        <section id="presentacion" style={{ maxWidth: '850px', marginTop: '30px' }}>
          <h2>Gestión de Productos Creados en el Panel</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Los balones oficiales de fábrica están protegidos. A continuación se listan únicamente los ítems creados por el administrador:
          </p>

          {productosPersonalizados.length === 0 ? (
            <div style={{ padding: '20px', color: '#777' }}>
              <em>Aún no has registrado ningún producto nuevo. Crea uno con el formulario de arriba.</em>
            </div>
          ) : (
            <div style={{ width: '100%', overflowX: 'auto', marginTop: '15px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgb(45, 118, 161)' }}>
                    <th style={{ padding: '8px' }}>Nombre</th>
                    <th style={{ padding: '8px' }}>Marca</th>
                    <th style={{ padding: '8px' }}>Categoría</th>
                    <th style={{ padding: '8px' }}>Precio</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productosPersonalizados.map((p) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}><strong>{p.nombre}</strong></td>
                      <td style={{ padding: '8px' }}>{p.marca.toUpperCase()}</td>
                      <td style={{ padding: '8px' }}>{p.categoria === 'gas' ? 'Gas' : 'Extra'}</td>
                      <td style={{ padding: '8px' }}>${p.precio.toLocaleString('es-CL')}</td>
                      <td style={{ padding: '8px', textAlign: 'center' }}>
                        <button
                          type="button"
                          onClick={() => iniciarEdicion(p)}
                          style={{
                            background: '#f39c12',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            marginRight: '6px',
                            cursor: 'pointer'
                          }}
                        >
                          Modificar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEliminar(p.id, p.nombre)}
                          style={{
                            background: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            cursor: 'pointer'
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}