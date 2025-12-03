import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Dpo = () => {
  return (
    <Container className="py-4">
            <h2 className="mb-4">O Dpo!</h2>
    
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <p>
                        A Faculdade conta com o DPO!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque atque fuga, aspernatur neque unde mollitia fugiat inventore ipsum ipsam nulla facere veniam ab illo architecto quos eveniet culpa maxime.
                    </p>
                </Card.Body>
           </Card>
    
           <Row className="g-4">
                       <Col md={4}>
                           <Card className="text-center h-100 shadow-sm">
                               <Card.Img
                                   variant="top"
                                   src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                                   alt="Main Building"
                                   style={{ height: '200px', objectFit: 'cover' }}
                               />
                               <Card.Body>
                                   <Card.Title>
                                       Vida no Campus
                                   </Card.Title>
                                   <Card.Text>
                                       Um ambiente vibrante e acolhedor, com atividades ...
                                   </Card.Text>
                               </Card.Body>
                               
                           </Card>
                       </Col>
                       <Col md={4}>
                                       <Card className="text-center h-100 shadow-sm">
                               <Card.Img
                                   variant="top"
                                   src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                                   alt="Main Building"
                                   style={{ height: '200px', objectFit: 'cover' }}
                               />
                               <Card.Body>
                                   <Card.Title>
                                       Biblioteca
                                   </Card.Title>
                                   <Card.Text>
                                       Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos digitais para pesquisas e estudos ...
                                   </Card.Text>
                               </Card.Body>
                               
                               
                           </Card>
                       </Col>
                       <Col md={4}>
                                                   <Card className="text-center h-100 shadow-sm">
                               <Card.Img
                                   variant="top"
                                   src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                                   alt="Main Building"
                                   style={{ height: '200px', objectFit: 'cover' }}
                               />
                               <Card.Body>
                                   <Card.Title>
                                       Prédio Principal
                                   </Card.Title>
                                   <Card.Text>
                                       O centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender as necessidades dos cursos ...
                                   </Card.Text>
                               </Card.Body>
                               
                           </Card>
                       </Col>     
                   </Row>
           
    
        </Container>
      )
    }
    
    
    


export default Dpo
