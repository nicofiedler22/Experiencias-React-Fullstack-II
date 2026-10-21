import React, { useContext } from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { AppContext } from '../context/AppContext';

// En esta vista mostramos la información de la cuenta activa distinguiendo si es Administrador o Cliente
export default function Perfil() {
  const { usuario } = useContext(AppContext);

  const esAdmin = usuario?.rol === 'admin';

  return (
    <>
      <Header subtitulo="MI PERFIL DE USUARIO" />
      <main id="contenido">
        <section id="presentacion" style={{ maxWidth: '750px', textAlign: 'left' }}>
          
          {/* Tarjeta destacada del rol activo */}
          <div
            style={{
              padding: '12px 18px',
              borderRadius: '12px',
              marginBottom: '20px',
              backgroundColor: esAdmin ? '#fcf3cf' : '#d4efdf',
              border: esAdmin ? '2px solid #f39c12' : '2px solid #27ae60',
              color: '#333'
            }}
          >
            <strong>Sesión Iniciada Como:</strong>{' '}
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: esAdmin ? '#b9770e' : '#1e8449' }}>
              {esAdmin ? ' ADMINISTRADORES DEL SISTEMA' : 'CLIENTE / USUARIO REGISTRADO'}
            </span>
          </div>

          {/* Firma personalizada: Fotos de los Administradores (Nicolás Fiedler y Benjamín Parra) */}
          {esAdmin && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                marginBottom: '25px',
                padding: '15px 10px',
                backgroundColor: 'rgba(244, 247, 250, 0.7)',
                borderRadius: '20px',
                border: '2px solid rgb(210, 220, 230)'
              }}
            >
              {/* Administrador 1: Nicolás Fiedler */}
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/img/admin2.jpg"
                  alt="Nicolás Fiedler - Administrador"
                  style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid rgb(45, 118, 161)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                  }}
                />
                <p style={{ marginTop: '8px', fontWeight: 'bold', color: 'rgb(30, 75, 105)', fontSize: '15px' }}>
                  Nicolás Fiedler
                </p>
                <p style={{ margin: '0', fontStyle: 'italic', color: '#666', fontSize: '13px' }}>
                  Co-Admin
                </p>
              </div>

              {/* Administrador 2: Benjamín Parra */}
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/img/administrador.jpg"
                  alt="Benjamín Parra - Administrador"
                  style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid rgb(45, 118, 161)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                  }}
                />
                <p style={{ marginTop: '8px', fontWeight: 'bold', color: 'rgb(30, 75, 105)', fontSize: '15px' }}>
                  Benjamín Parra
                </p>
                <p style={{ margin: '0', fontStyle: 'italic', color: '#666', fontSize: '13px' }}>
                  Co-Admin
                </p>
              </div>
            </div>
          )}

          <h2>Datos de la Cuenta</h2>
          <p>
            <strong>Nombre completo:</strong>{' '}
            {esAdmin ? 'Nicolás Fiedler y Benjamín Parra' : usuario?.nombre}
          </p>
          <p><strong>Nombre de Usuario:</strong> {usuario?.usuario}</p>
          <p><strong>Correo Electrónico:</strong> {usuario?.correo}</p>
          
          {!esAdmin && (
            <>
              <p><strong>Dirección de Entrega:</strong> {usuario?.direccion || 'No registrada'}</p>
              <p><strong>Tipo de Consumo:</strong> {usuario?.tipoConsumo || 'Residencial'}</p>
              <p><strong>Horario de Despacho Preferente:</strong> {usuario?.horarioEntrega || 'No especificado'}</p>
              <p><strong>Tipo de Válvula:</strong> {usuario?.tipoValvula || 'Tradicional'}</p>
              <p><strong>Condición de Envase:</strong> {usuario?.tieneEnvase || 'Con intercambio'}</p>
            </>
          )}

          <p><strong>Zona de Cobertura:</strong> Chillán y comunas aledañas</p>
        </section>
      </main>
      <Footer />
    </>
  );
}