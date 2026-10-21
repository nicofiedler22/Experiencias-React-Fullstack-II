import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';

import Boton from '../components/atoms/Boton';
import MensajeAlerta from '../components/atoms/MensajeAlerta';
import ColaboradorCard from '../components/molecules/ColaboradorCard';
import TarjetaProducto from '../components/molecules/TarjetaProducto';
import Footer from '../components/organisms/Footer';
import Login from '../views/Login';
import Error404 from '../views/Error404';

// Con esta función auxiliar envolvemos los componentes que necesitan Router y Contexto para ser testeados
const renderConContexto = (componente) => {
  return render(
    <BrowserRouter>
      <AppProvider>{componente}</AppProvider>
    </BrowserRouter>
  );
};

describe('Pruebas Unitarias - Gas Licuado "El Volcán"', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // PU-001 (PASA)
  it('PU-001: Boton debe renderizar el texto proporcionado', () => {
    // 1. Arrange: Preparamos el componente
    render(<Boton texto="Comprar Balón" />);
    // 2. Act: Buscamos el elemento en pantalla
    const boton = screen.getByRole('button', { name: /Comprar Balón/i });
    // 3. Assert: Comprobamos que esté presente en el DOM
    expect(boton).toBeInTheDocument();
  });

  // PU-002 (PASA)
  it('PU-002: Boton debe disparar la función onClick al ser presionado', () => {
    // 1. Arrange: Declaramos una variable bandera y la función espía
    let clickeado = false;
    render(<Boton texto="Pagar" onClick={() => (clickeado = true)} />);
    // 2. Act: Simulamos el click del usuario
    const boton = screen.getByRole('button', { name: /Pagar/i });
    fireEvent.click(boton);
    // 3. Assert: Verificamos que la acción cambió el estado
    expect(clickeado).toBe(true);
  });

  // PU-003 (PASA)
  it('PU-003: MensajeAlerta debe mostrar el texto de error en color rojo', () => {
    // 1. Arrange & 2. Act: Renderizamos la alerta con tipo error
    render(<MensajeAlerta tipo="error" mensaje="Debe ingresar su contraseña" />);
    const alerta = screen.getByRole('alert');
    // 3. Assert: Comprobamos el contenido y el color computado en JSDOM
    expect(alerta).toHaveTextContent('Debe ingresar su contraseña');
    expect(alerta).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  // PU-004 (PASA)
  it('PU-004: ColaboradorCard debe renderizar el nombre y cargo del trabajador', () => {
    // 1. Arrange & 2. Act: Montamos la card con datos de Benjamin Parra
    render(
      <ColaboradorCard
        nombre="Benjamin Parra"
        cargo="El admin"
        imagen="/img/administrador.jpg"
      />
    );
    // 3. Assert: Evaluamos que ambos textos aparezcan en el documento
    expect(screen.getByText(/Benjamin Parra/i)).toBeInTheDocument();
    expect(screen.getByText(/El admin/i)).toBeInTheDocument();
  });

  // PU-005 (PASA)
  it('PU-005: Footer debe incluir los derechos reservados de El Volcán', () => {
    // 1. Arrange & 2. Act: Montamos el footer
    render(<Footer />);
    // 3. Assert: Verificamos la leyenda institucional
    expect(
      screen.getByText(/Todos los derechos y zurdos reservados/i)
    ).toBeInTheDocument();
  });

  // PU-006 (PASA)
  it('PU-006: TarjetaProducto debe mostrar el nombre y precio formateado en pesos chilenos', () => {
    // 1. Arrange: Creamos un mock de producto de prueba
    const mockProducto = {
      id: 99,
      nombre: 'Balón Test 15 KG',
      precio: 25000,
      descripcion: 'Balón de prueba',
      imagen: '/img/a15k.jpg'
    };

    // 2. Act: Renderizamos la tarjeta
    renderConContexto(<TarjetaProducto producto={mockProducto} />);

    // 3. Assert: Verificamos el formateo de moneda $25.000
    expect(screen.getByText('Balón Test 15 KG')).toBeInTheDocument();
    expect(screen.getByText('$25.000')).toBeInTheDocument();
  });

  // PU-007 (PASA)
  it('PU-007: TarjetaProducto debe alternar a "En Favoritos" al presionar el botón de favorito', () => {
    // 1. Arrange: Mock de producto
    const mockProducto = {
      id: 101,
      nombre: 'Balón Favorito',
      precio: 20000,
      descripcion: 'Para probar favoritos',
      imagen: '/img/a11k.jpg'
    };

    renderConContexto(<TarjetaProducto producto={mockProducto} />);
    const btnFav = screen.getByText(/Guardar Favorito/i);

    // 2. Act: Hacemos click en el botón de favoritos
    fireEvent.click(btnFav);

    // 3. Assert: Debe haber cambiado el texto indicando que ya está guardado
    expect(screen.getByText(/En Favoritos/i)).toBeInTheDocument();
  });

  // PU-008 (PASA)
  it('PU-008: Login debe mostrar error si el usuario presiona ingresar con campos vacíos', () => {
    renderConContexto(<Login />);
    const btnIngresar = screen.getByRole('button', { name: /INGRESAR/i });
    fireEvent.click(btnIngresar);
    expect(
      screen.getByText(/Debe ingresar su nombre de usuario/i)
    ).toBeInTheDocument();
  });

  // PU-009 (INTENCIONAL - FALLA: Para cumplir con la acotación de pruebas con fallo documentado)
  it('PU-009: Login debe aceptar cualquier correo corporativo sin importar el dominio', () => {
    renderConContexto(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/Nombre de usuario/i), {
      target: { value: 'admin' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Correo electrónico/i), {
      target: { value: 'admin@elvolcan-gas.cl' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Contraseña.../i), {
      target: { value: 'admin123' }
    });

    fireEvent.click(screen.getByRole('button', { name: /INGRESAR/i }));
    const mensajeError = screen.queryByText(/Solo gmail.com, outlook.com o duocuc.cl como dominios permitidos/i);
    expect(mensajeError).toBeNull();
  });

  // PU-010 (PASA)
  it('PU-010: Error404 debe mostrar mensaje informativo y enlace de retorno al inicio', () => {
    // 1. Arrange & 2. Act: Renderizamos la vista de error 404 dentro del contexto completo
    renderConContexto(<Error404 />);

    // 3. Assert: Verificamos el encabezado y el botón de regreso
    expect(screen.getByText(/ERROR 404/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /VOLVER AL INICIO/i })).toBeInTheDocument();
  });
});