import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';

// Importamos los estilos base de Bootstrap para que convivan con nuestras reglas CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// En este archivo montamos el árbol principal de la aplicación.
// Envolvemos a App con BrowserRouter para la navegación y con AppProvider para el estado global.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);