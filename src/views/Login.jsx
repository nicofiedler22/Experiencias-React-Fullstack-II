import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {

    const iniciarSesion = (e) => {
        e.preventDefault();

        alert('Inicio de sesión realizado correctamente');
    };

    return (
        <main>

            <h1>Iniciar Sesión</h1>

            <Form onSubmit={iniciarSesion}>

                <Form.Group
                    className="mb-3"
                    controlId="loginCorreo"
                >
                    <Form.Label>
                        Correo
                    </Form.Label>

                    <Form.Control
                        type="email"
                        placeholder="Ingrese su correo"
                        required
                    />
                </Form.Group>


                <Form.Group
                    className="mb-3"
                    controlId="loginPassword"
                >
                    <Form.Label>
                        Contraseña
                    </Form.Label>

                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        required
                    />
                </Form.Group>


                <Button
                    variant="dark"
                    type="submit"
                >
                    Iniciar Sesión
                </Button>

            </Form>

            <p>
                ¿No tienes una cuenta?
            </p>

            <Link to="/registro">
                Crear una cuenta
            </Link>

            <br />

            <Link to="/">
                Volver al inicio
            </Link>

        </main>
    );
}

export default Login;