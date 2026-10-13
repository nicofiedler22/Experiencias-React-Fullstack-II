import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Registro() {

    const registrarUsuario = (e) => {
        e.preventDefault();

        alert('Usuario registrado correctamente');
    };

    return (
        <main>

            <h1>Crear Cuenta</h1>

            <Form onSubmit={registrarUsuario}>

                <Form.Group
                    className="mb-3"
                    controlId="registroNombre"
                >
                    <Form.Label>
                        Nombre
                    </Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        required
                    />
                </Form.Group>


                <Form.Group
                    className="mb-3"
                    controlId="registroCorreo"
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
                    controlId="registroPassword"
                >
                    <Form.Label>
                        Contraseña
                    </Form.Label>

                    <Form.Control
                        type="password"
                        placeholder="Ingrese una contraseña"
                        required
                    />
                </Form.Group>


                <Form.Group
                    className="mb-3"
                    controlId="registroPassword2"
                >
                    <Form.Label>
                        Confirmar contraseña
                    </Form.Label>

                    <Form.Control
                        type="password"
                        placeholder="Repita su contraseña"
                        required
                    />
                </Form.Group>


                <Button
                    variant="dark"
                    type="submit"
                >
                    Registrarse
                </Button>

            </Form>

            <p>
                ¿Ya tienes una cuenta?
            </p>

            <Link to="/login">
                Iniciar sesión
            </Link>

            <br />

            <Link to="/">
                Volver al inicio
            </Link>

        </main>
    );
}

export default Registro;