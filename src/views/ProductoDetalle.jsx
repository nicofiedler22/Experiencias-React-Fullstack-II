import { Link, useParams } from 'react-router-dom';

import vista from '../assets/img/vista.jpg';
import tacto from '../assets/img/tacto.jpg';
import olfato from '../assets/img/Olfato.jpg';
import oido from '../assets/img/oido.jpg';
import gusto from '../assets/img/gusto.jpg';

const productos = [
    {
        id: 1,
        imagen: vista,
        nombre: 'Visuales',
        precio: 15000,
        descripcion:
            'Explora experiencias diseñadas para despertar tu mirada. Disfruta de recorridos, paisajes, obras y escenarios cuidadosamente preparados para sorprenderte con colores, formas, luces y perspectivas.'
    },
    {
        id: 2,
        imagen: tacto,
        nombre: 'Táctiles',
        precio: 12000,
        descripcion:
            'Descubre experiencias donde tus manos serán las protagonistas. Explora diferentes texturas, temperaturas, materiales y superficies.'
    },
    {
        id: 3,
        imagen: olfato,
        nombre: 'Olfativas',
        precio: 10000,
        descripcion:
            'Déjate transportar por los aromas. Experimenta fragancias, esencias y ambientes cuidadosamente seleccionados.'
    },
    {
        id: 4,
        imagen: oido,
        nombre: 'Auditivas',
        precio: 18000,
        descripcion:
            'Cierra los ojos y déjate llevar por los sonidos. Disfruta de experiencias creadas a partir de música, sonidos naturales y ambientes.'
    },
    {
        id: 5,
        imagen: gusto,
        nombre: 'Gustativas',
        precio: 20000,
        descripcion:
            'Descubre un mundo de sabores y sensaciones. Explora degustaciones, combinaciones inesperadas y preparaciones cuidadosamente seleccionadas.'
    }
];

function ProductoDetalle() {
    const { id } = useParams();

    const producto = productos.find(
        (producto) => producto.id === Number(id)
    );

    if (!producto) {
        return (
            <main>
                <h1>Producto no encontrado</h1>

                <Link to="/productos">
                    Volver a productos
                </Link>
            </main>
        );
    }

    return (
        <main>
            <h1>{producto.nombre}</h1>

            <img
                src={producto.imagen}
                alt={producto.nombre}
                width="400"
            />

            <p>{producto.descripcion}</p>

            <h2>
                Precio: ${producto.precio.toLocaleString('es-CL')}
            </h2>

            <Link to="/productos">
                Volver a productos
            </Link>

            <br />

            <Link to="/">
                Volver al inicio
            </Link>
        </main>
    );
}

export default ProductoDetalle;