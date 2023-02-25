import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col ,Card } from "react-bootstrap";

const MainForm = () => {
    const validated = true;

    return (
        <Container className="my-5">

            <h3 className="mb-1 p-3">Contanos un poco de tu experiencia en la pagina!</h3>

            <Card className="px-3 shadow-cards">
                <Form className="py-4">
                <Row >
                    <Col>
                        <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="Apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Tu apellido" />
                        </Form.Group>
                    </Col>
                </Row>
                    <Form.Group className="mb-3" controlId="E-mail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese tu e-mail:" />
                            </Form.Group>
                    <Form.Group className="mb-3" controlId="Texto">
                        <Form.Label className="fs-4">Contanos sobre tu experiencia:</Form.Label>
                        <Form.Control size="lg" as="textarea" rows={5} placeholder="Escribe aqui:" />
                    </Form.Group>
                    <Form.Group className="mb-3 py-3" controlId="Checkbox">
                        <Form.Check type="checkbox" label="¿Estas satisfecho con el uso de la pagina?" />
                    </Form.Group>

                    {validated?
                    <Button variant="warning" type="submit">
                            Enviar
                    </Button>:
                    <Button disabled variant="warning" type="submit">
                            Enviar
                    </Button>}

                    
                    
                </Form>
            </Card>
        </Container>
    )

}

export default MainForm



