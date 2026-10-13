import { Link } from 'react-router-dom';
import GaleriaProductos from '../components/GaleriaProductos';
import { productos } from '../data/Productos';



function Productos() {
    return (
        <main>
            
            <h1>Tipos de Experiencias</h1>

            <p>
                Elige uno de tus cinco sentidos y descubre
                las experiencias que hemos preparado para ti.
            </p>

            <GaleriaProductos productos={productos} />

            <Link to="/">
                Volver al inicio
            </Link>
        </main>
    );
}

export default Productos;