import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import Productos from './views/Productos';
import ProductoDetalle from './views/ProductoDetalle';
import Contacto from './views/Contacto';
import Login from './views/Login';
import Registro from './views/Registro';

function App() {
    return (
        <Routes>

            {/* Inicio */}
            <Route path="/" element={<Home />} />

            {/* Productos */}
            <Route path="/productos" element={<Productos />} />

            {/* Detalle de un producto */}
            <Route path="/producto/:id" element={<ProductoDetalle />} />

            {/* Contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* Usuarios */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

        </Routes>
    );
}

export default App;