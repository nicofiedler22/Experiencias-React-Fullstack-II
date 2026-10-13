import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Contacto() {

    return (
        <Form>

            <Form.Group
                className="mb-3"
                controlId="forNombre"
            >
                <Form.Label>
                    Nombre
                </Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                />
            </Form.Group>


            <Form.Group
                className="mb-3"
                controlId="forCorreo"
            >
                <Form.Label>
                    Correo
                </Form.Label>

                <Form.Control
                    type="email"
                    placeholder="Ingrese su correo"
                />
            </Form.Group>


            <Form.Group
                className="mb-3"
                controlId="forMensaje"
            >
                <Form.Label>
                    Mensaje
                </Form.Label>

                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Deje su mensaje"
                />
            </Form.Group>


            <Button
                variant="dark"
                type="submit"
            >
                Enviar Mensaje
            </Button>

            {' '}

            <Button
                variant="primary"
                type="reset"
            >
                Limpiar
            </Button>

        </Form>
    );
}

export default Contacto;