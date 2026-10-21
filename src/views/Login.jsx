import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import MensajeAlerta from '../components/atoms/MensajeAlerta';
import { AppContext } from '../context/AppContext';

// En esta vista gestionamos el inicio de sesión con credenciales estáticas para Administrador
// y soporte para usuarios clientes registrados.
export default function Login() {
  const { login, usuariosRegistrados } = useContext(AppContext);
  const navigate = useNavigate();

  const [usuarioInput, setUsuarioInput] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credenciales fijas y estáticas de Administrador
  const ADMIN_CREDENCIALES = {
    usuario: 'admin',
    correo: 'admin@duocuc.cl', // Usa dominio permitido
    password: 'admin123',
    rol: 'admin'
  };

  const validarLogin = (e) => {
    e.preventDefault();
    setError('');

    if (usuarioInput.trim() === '') {
      setError('Debe ingresar su nombre de usuario.');
      return;
    }
    if (correo.trim() === '') {
      setError('Debe ingresar su correo electrónico.');
      return;
    }
    if (password.trim() === '') {
      setError('Debe ingresar su contraseña.');
      return;
    }

    if (!/^[^\s@]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(correo)) {
      setError('Solo gmail.com, outlook.com o duocuc.cl como dominios permitidos.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Caso 1: Verificar si ingresó como Administrador estático
    if (
      usuarioInput.toLowerCase() === ADMIN_CREDENCIALES.usuario &&
      correo.toLowerCase() === ADMIN_CREDENCIALES.correo &&
      password === ADMIN_CREDENCIALES.password
    ) {
      login({
        usuario: 'admin',
        nombre: 'Nicolás Fiedler y Benjamín Parra', // <-- Ambos como Co-Admins
        correo: ADMIN_CREDENCIALES.correo,
        rol: 'admin'
      });
      navigate('/admin');
      return;
    }

    // Caso 2: Verificar si coincide con algún usuario Cliente registrado previamente
    const usuarioEncontrado = usuariosRegistrados.find(
      (u) =>
        u.crearusuario.toLowerCase() === usuarioInput.toLowerCase() &&
        u.crearcorreo.toLowerCase() === correo.toLowerCase() &&
        u.crearcontrasena === password
    );

    if (usuarioEncontrado) {
      login({
        usuario: usuarioEncontrado.crearusuario,
        nombre: `${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`,
        correo: usuarioEncontrado.crearcorreo,
        direccion: usuarioEncontrado.direccion,
        tipoConsumo: usuarioEncontrado.tipoConsumo,
        rol: 'cliente'
      });
      navigate('/productos');
      return;
    }

    // Si no coincide con ninguno:
    setError('Credenciales inválidas. Compruebe los datos o use las credenciales de prueba indicadas arriba.');
  };

  return (
    <>
      <Header subtitulo="INICIO DE SESIÓN" />
      <main id="contenido">
        
        {/* Tarjeta de ayuda con credenciales de prueba */}
        <section
          style={{
            maxWidth: '650px',
            margin: '25px auto',
            backgroundColor: 'rgb(235, 245, 252)',
            border: '2px dashed rgb(45, 118, 161)',
            borderRadius: '15px',
            padding: '15px 25px',
            textAlign: 'left'
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', color: 'rgb(30, 75, 105)' }}>
            Datos de Acceso de Demostración
          </h3>
          <p style={{ margin: '4px 0' }}>
            <strong>Perfil Administrador (Acceso a CRUD en Panel):</strong>
          </p>
          <ul style={{ margin: '5px 0 12px 20px', padding: 0 }}>
            <li><strong>Usuario:</strong> <code>admin</code></li>
            <li><strong>Correo:</strong> <code>admin@duocuc.cl</code></li>
            <li><strong>Contraseña:</strong> <code>admin123</code></li>
          </ul>
          <p style={{ margin: '4px 0' }}>
            <strong>Perfil Cliente (Hacer pedidos y ver perfil):</strong>
          </p>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Puedes crear tu propia cuenta en la sección <strong><Link to="/registro">Registrarme</Link></strong> e ingresar con ella.
          </p>
        </section>

        <form id="contacto" onSubmit={validarLogin} noValidate>
          <fieldset>
            <legend>Acceso al Sistema</legend>
            <br />
            <MensajeAlerta tipo="error" mensaje={error} />

            <div className="campo-form">
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                placeholder="Nombre de usuario..."
                value={usuarioInput}
                onChange={(e) => setUsuarioInput(e.target.value)}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="text"
                id="correo"
                placeholder="Correo electrónico..."
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="contraseña">Contraseña:</label>
              <input
                type="password"
                id="contraseña"
                placeholder="Contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-volcan">INGRESAR</button>
            <br /><br />

            <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí como Cliente</Link></p>
            <p><Link to="/">Volver a la página principal</Link></p>
          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  );
}