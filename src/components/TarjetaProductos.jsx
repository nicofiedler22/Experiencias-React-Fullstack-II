import { useState } from "react";

function TarjetaProductos({ imagen, nombre, descripcion }) {

    const [meGusta, setMeGusta] = useState(false);

    const alternar = () => {
        setMeGusta(!meGusta);
    };

    return (
        <article className="tarjeta">

            <h2>{nombre}</h2>

            <div className="contenido-tarjeta">

                <img
                    src={imagen}
                    alt={nombre}
                />

                <p>
                    {descripcion}
                </p>

            </div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alternar();
                }}
                style={{
                    backgroundColor: meGusta
                        ? '#d946ef'
                        : '#f3e8ff',

                    color: meGusta
                        ? '#ffffff'
                        : '#7e22ce',

                    border: meGusta
                        ? '2px solid #a21caf'
                        : '2px solid #c084fc',

                    borderRadius: '12px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',

                    boxShadow: meGusta
                        ? '0 4px 10px rgba(168, 85, 247, 0.4)'
                        : '0 2px 6px rgba(0, 0, 0, 0.15)',

                    transition: 'all 0.2s ease'
                }}
            >
                {meGusta
                    ? '❤️ Probado'
                    : '✨ Probar'}
            </button>

        </article>
    );
}

export default TarjetaProductos;