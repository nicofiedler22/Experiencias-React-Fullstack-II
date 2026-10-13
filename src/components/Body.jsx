function Body() {
    return (
        <>
            <main id="contenido">

                <section id="inicio" className="seccion">
                    <h2>ELIGE TU SENTIDO</h2>

                    <p>
                        En nuestra tienda podrás encontrar experiencias diseñadas
                        para despertar tus sentidos y descubrir nuevas
                    </p>

                    <p>
                        formas de disfrutar el mundo. Explora nuestras categorías
                        y encuentra aquella que más se adapte a ti.
                    </p>
                </section>


                <section id="album" className="seccion">

                    <h2>Tipos de Experiencias</h2>

                    <p>
                        Elige uno de tus cinco sentidos y descubre las experiencias
                        que hemos preparado para ti.
                    </p>

                    <p>
                        Cada categoría te llevará a un mundo diferente, lleno de
                        sensaciones y momentos por descubrir.
                    </p>


                    <div className="galeria">

                        <a href="#vista">
                            <article id="vista" className="tarjeta">
                                <h2>Visuales</h2>

                                <div className="contenido-tarjeta">
                                    <p>
                                        Explora experiencias diseñadas para despertar
                                        tu mirada. Disfruta de recorridos, paisajes,
                                        obras y escenarios cuidadosamente preparados
                                        para sorprenderte con colores, formas, luces
                                        y perspectivas que transformarán la manera
                                        en que percibes tu entorno.
                                    </p>
                                </div>
                            </article>
                        </a>


                        <a href="#tacto">
                            <article id="tacto" className="tarjeta">
                                <h2>Táctiles</h2>

                                <div className="contenido-tarjeta">
                                    <p>
                                        Descubre experiencias donde tus manos serán
                                        las protagonistas. Explora diferentes
                                        texturas, temperaturas, materiales y
                                        superficies en actividades creadas para
                                        despertar el sentido del tacto y permitirte
                                        experimentar el mundo de una manera
                                        completamente diferente.
                                    </p>
                                </div>
                            </article>
                        </a>


                        <a href="#olfato">
                            <article id="olfato" className="tarjeta">
                                <h2>Olfativas</h2>

                                <div className="contenido-tarjeta">
                                    <p>
                                        Déjate transportar por los aromas.
                                        Experimenta fragancias, esencias y ambientes
                                        cuidadosamente seleccionados que evocan
                                        lugares, recuerdos y emociones, convirtiendo
                                        cada aroma en una experiencia capaz de
                                        despertar tus sentidos.
                                    </p>
                                </div>
                            </article>
                        </a>


                        <a href="#oido">
                            <article id="oido" className="tarjeta">
                                <h2>Auditivas</h2>

                                <div className="contenido-tarjeta">
                                    <p>
                                        Cierra los ojos y déjate llevar por los
                                        sonidos. Disfruta de experiencias creadas
                                        a partir de música, sonidos naturales,
                                        ambientes y composiciones que te permitirán
                                        descubrir nuevas emociones a través de
                                        aquello que escuchas.
                                    </p>
                                </div>
                            </article>
                        </a>


                        <a href="#gusto">
                            <article id="gusto" className="tarjeta">
                                <h2>Gustativas</h2>

                                <div className="contenido-tarjeta">
                                    <p>
                                        Descubre un mundo de sabores y sensaciones.
                                        Explora degustaciones, combinaciones
                                        inesperadas y preparaciones cuidadosamente
                                        seleccionadas para convertir cada bocado
                                        en una experiencia que despierte tu
                                        curiosidad y sorprenda a tu paladar.
                                    </p>
                                </div>
                            </article>
                        </a>

                    </div>

                </section>

            </main>
        </>
    );
}

export default Body;
