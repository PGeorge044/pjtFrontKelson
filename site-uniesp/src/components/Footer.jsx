import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer className="mt-5 pt-4 pb-2 text-white" style={{ backgroundColor: '#002F6C' }}>
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5 className="mb-3">Contato</h5>
                        <p>
                            Rua Urbano Guedes, 451 - Centro <br />
                            Joao Pessoa - UF, CEP 12345-678
                        </p>
                        <p>
                            Telefone: (83) 1234-5678 <br />
                            Email: contato@uniesp.edu.br
                        </p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5 className="mb-3">Navegação Rápida</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/a-faculdade" className="text-white text-decoration-none">A Faculdade</Link></li>
                            <li><Link to="/dpo-lgpd" className="text-white text-decoration-none">DPO LGPD</Link></li>
                            <li><Link to="/noticias" className="text-white text-decoration-none">Notícias</Link></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5 className="mb-3">Siga-nos</h5>
                        <p>
                            [Ícone Facebook] [Ícone Instagram] [Ícone LinkedIn]
                        </p>
                    </Col>
                </Row>

                <hr className="bg-light" /> 
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} UNIESP. Todos os direitos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
