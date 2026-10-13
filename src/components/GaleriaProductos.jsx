import { Link } from 'react-router-dom';
import TarjetaProductos from './TarjetaProductos';

function GaleriaProductos({ productos }) {

    return (
        <div className="galeria">

            {productos.map((producto) => (

                <Link
                    to={`/producto/${producto.id}`}
                    key={producto.id}
                    className="enlace-producto"
                >

                    <TarjetaProductos
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                    />

                </Link>

            ))}

        </div>
    );
}

export default GaleriaProductos;