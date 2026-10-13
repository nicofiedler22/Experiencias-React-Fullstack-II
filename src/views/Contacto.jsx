import ContactoForm from '../components/Contacto';
import { Link } from 'react-router-dom';



function Contacto() {

    return (
        <>
        <main>
            
            
            <h1>Contacto</h1>
            
            <p>
                ¿Tienes alguna pregunta?
                Envíanos un mensaje.
            </p>

            <ContactoForm />

            <br />

            <Link to="/">
                Volver al inicio
            </Link>

        </main>
        </>
    );
}

export default Contacto;