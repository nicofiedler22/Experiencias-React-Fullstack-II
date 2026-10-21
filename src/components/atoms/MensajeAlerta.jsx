import React from 'react';

// Este componente atómico nos ayuda a desplegar mensajes de error o de éxito
// en nuestros formularios manteniendo un estándar visual claro para el usuario.
export default function MensajeAlerta({ tipo = 'error', mensaje }) {
  if (!mensaje) return null;

  const color = tipo === 'error' ? 'red' : 'green';
  return (
    <div style={{ color, fontWeight: 'bold', marginBottom: '15px' }} role="alert">
      {mensaje}
    </div>
  );
}