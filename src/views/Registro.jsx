import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import MensajeAlerta from '../components/atoms/MensajeAlerta';
import { AppContext } from '../context/AppContext';

// En esta vista permitimos el registro exclusivo de clientes para solicitar gas licuado a domicilio
export default function Registro() {
  const { registrarNuevoUsuario } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    crearusuario: '',
    fechaNacimiento: '',
    direccion: '',
    // Campos de contexto específicos para entrega de gas licuado
    tipoConsumo: 'Residencial (Hogar)',
    horarioEntrega: 'Mañana (09:00 - 13:00)',
    tipoValvula: 'Válvula Tradicional (Clip)',
    tieneEnvase: 'Sí, tengo envase para intercambio',
    crearcorreo: '',
    crearcontrasena: '',
    reingresoContrasena: ''
  });

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validarRegistro = (e) => {
    e.preventDefault();
    setError('');
    setExito('');

    const {
      nombre,
      apellido,
      crearusuario,
      fechaNacimiento,
      direccion,
      crearcorreo,
      crearcontrasena,
      reingresoContrasena
    } = formData;

    if (nombre.trim() === '') {
      setError('Debe ingresar su nombre.');
      return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
      setError('El nombre solo debe contener letras.');
      return;
    }
    if (apellido.trim() === '') {
      setError('Debe ingresar su apellido.');
      return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
      setError('El apellido solo debe contener letras.');
      return;
    }
    if (crearusuario.trim() === '') {
      setError('Debe crear un nombre de usuario.');
      return;
    }
    if (fechaNacimiento === '') {
      setError('Debe seleccionar su fecha de nacimiento.');
      return;
    }
    if (direccion.trim() === '') {
      setError('Debe ingresar su dirección de despacho.');
      return;
    }
    if (crearcorreo.trim() === '') {
      setError('Debe ingresar un correo electrónico.');
      return;
    }
    if (crearcontrasena.trim() === '') {
      setError('Debe crear una contraseña.');
      return;
    }
    if (reingresoContrasena.trim() === '') {
      setError('Debe reingresar la contraseña.');
      return;
    }
    if (!/^[^\s@]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(crearcorreo)) {
      setError('Solo gmail.com, outlook.com o duocuc.cl como dominios permitidos.');
      return;
    }
    if (crearcontrasena.length < 6) {
      setError('La contraseña debe tener mínimo 6 caracteres.');
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(crearcontrasena)) {
      setError('La contraseña debe contener al menos una letra y un número.');
      return;
    }
    if (crearcontrasena !== reingresoContrasena) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Validación de edad mínima (+18)
    const fecha = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }

    if (edad < 18) {
      setError('Debes ser mayor de 18 años para registrarte y solicitar gas licuado.');
      return;
    }

    registrarNuevoUsuario(formData);

    setExito('¡Cuenta de Cliente creada con éxito! Redirigiendo al inicio de sesión...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <Header subtitulo="REGISTRO DE CLIENTES" />
      <main id="contenido">
        <form id="contacto" onSubmit={validarRegistro} noValidate>
          <fieldset>
            <legend>Crear Cuenta de Cliente</legend>
            <br />
            <MensajeAlerta tipo="error" mensaje={error} />
            <MensajeAlerta tipo="exito" mensaje={exito} />

            <div className="campo-form">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" placeholder="Ingrese su nombre..." value={formData.nombre} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" placeholder="Ingrese su apellido..." value={formData.apellido} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="crearusuario">Crear nombre de usuario:</label>
              <input type="text" id="crearusuario" placeholder="Cree un nombre de usuario..." value={formData.crearusuario} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
              <input type="date" id="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="direccion">Dirección exacta de entrega (Chillán y alrededores):</label>
              <input type="text" id="direccion" placeholder="Calle, número de casa/depto, población/villa..." value={formData.direccion} onChange={handleChange} />
            </div>

            {/* CAMPOS OBLIGATORIOS DE CONTEXTO */}
            <div className="campo-form">
              <label htmlFor="tipoConsumo">Tipo de Consumo habitual:</label>
              <select id="tipoConsumo" value={formData.tipoConsumo} onChange={handleChange}>
                <option value="Residencial (Hogar)">Residencial (Hogar)</option>
                <option value="Comercial (Restaurante / Negocio)">Comercial (Restaurante / Negocio)</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="horarioEntrega">Horario preferente para recibir el camión repartidor:</label>
              <select id="horarioEntrega" value={formData.horarioEntrega} onChange={handleChange}>
                <option value="Mañana (09:00 - 13:00)">Mañana (09:00 - 13:00)</option>
                <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                <option value="Vespertino (18:00 - 21:00)">Vespertino (18:00 - 21:00)</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="tipoValvula">Tipo de regulador / válvula que utiliza tu instalación:</label>
              <select id="tipoValvula" value={formData.tipoValvula} onChange={handleChange}>
                <option value="Válvula Tradicional (Clip)">Válvula Tradicional (Clip)</option>
                <option value="Válvula de Rosca Rápida">Válvula de Rosca Rápida</option>
                <option value="No estoy seguro (solicitar revisión técnica del chofer)">No estoy seguro (solicitar revisión técnica)</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="tieneEnvase">Condición de envase para futuros pedidos:</label>
              <select id="tieneEnvase" value={formData.tieneEnvase} onChange={handleChange}>
                <option value="Sí, tengo envase para intercambio">Sí, entrego envase vacío al momento de la entrega</option>
                <option value="No tengo envase (compraré cilindro completo nuevo)">No tengo envase (requiero comprar cilindro nuevo)</option>
              </select>
            </div>

            <div className="campo-form">
              <label htmlFor="crearcorreo">Crear un correo electrónico:</label>
              <input type="text" id="crearcorreo" placeholder="Cree un correo (gmail, outlook o duocuc)..." value={formData.crearcorreo} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="crearcontrasena">Crear contraseña:</label>
              <input type="password" id="crearcontrasena" placeholder="Cree una contraseña..." value={formData.crearcontrasena} onChange={handleChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="reingresoContrasena">Reingrese contraseña:</label>
              <input type="password" id="reingresoContrasena" placeholder="Reingrese su contraseña..." value={formData.reingresoContrasena} onChange={handleChange} />
            </div>

            <button type="submit" className="btn-volcan">REGISTRARME COMO CLIENTE</button>
            <br /><br />

            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
            <p><Link to="/">Volver a la página principal</Link></p>
          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  );
}