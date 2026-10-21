import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ColaboradorCard from '../components/molecules/ColaboradorCard';

// En esta vista recreamos con fidelidad la página principal index.html de "El Volcán".
// Desglosamos la información institucional, el video corporativo y la lista de colaboradores.
export default function Home() {
  const colaboradores = [
    { id: 1, nombre: 'Repartidor genérico 1', cargo: 'Repartidor genérico 1', imagen: '/img/repartidor1.jpg' },
    { id: 2, nombre: 'Repartidor genérico 2', cargo: 'Repartidor genérico 2', imagen: '/img/repartidor2.jpg' },
    { id: 3, nombre: 'Juan', cargo: 'Repartidor genérico 3', imagen: '/img/juan.jpg' },
    { id: 4, nombre: 'Cesar (del planeta de los simios)', cargo: 'Operador de llamadas', imagen: '/img/mono.jpg' },
    { id: 5, nombre: 'Benjamin Parra', cargo: 'El admin', imagen: '/img/administrador.jpg' }
  ];

  return (
    <>
      <Header />

      <nav id="menu-principal">
        <ul>
          <li><a href="#presentacion" className="link-menu">NOSOTROS</a></li>
          <li><a href="#mejoras" className="link-menu">NOS RENOVAMOS</a></li>
          <li><a href="#equipo" className="link-menu">EQUIPO DE TRABAJO</a></li>
        </ul>
      </nav>

      <main id="contenido">
        <section id="presentacion">
          <h2>¿Quiénes Somos?</h2>
          <p>Somos EL VOLCAN, una empresa familiar ubicada en Chillán Región de Ñuble, fundada en 1998.</p>
          <p>Nos encargamos de la distribución de cilindros de gas licuado a domicilio a clientes</p>
          <p>residenciales y comerciales en Chillán y a comunas aledañas.</p>
          <img src="/img/camiones.jpg" alt="Camiones de reparto" />
        </section>

        <section id="mejoras">
          <h2>Nos informamos, actualizamos y mejoramos para ustedes</h2>
          <p>Sabemos que las nuevas tecnologías están dejando muy atrás nuestro antiguo sistema de recepción, despacho y venta de productos.</p>
          <p>Es por eso que decidimos brindarte un alivio, modernizando toda nuestra gestión, pero manteniendo al equipo que conoces desde siempre.</p>
          <div>
            <video src="/img/video.mp4" controls muted autoPlay loop></video>
          </div>
        </section>

        <section id="equipo">
          <h2>Nuestros Colaboradores</h2>
          {colaboradores.map((colaborador) => (
            <ColaboradorCard
              key={colaborador.id}
              nombre={colaborador.nombre}
              cargo={colaborador.cargo}
              imagen={colaborador.imagen}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}