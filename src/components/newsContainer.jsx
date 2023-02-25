import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const NewsContainer = () => {
    const news = [
        {
            id:1,
            title:'Title',
            img:'https://www.shutterstock.com/image-vector/newspaper-icon-vector-template-600w-1269716161.jpg',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aut quis voluptatem tenetur animi eaque suscipit omnis. Magni, optio excepturi? Non impedit deserunt beatae numquam eaque natus recusandae suscipit nostrum.",

        },
        {
            id:2,
            title:'Title',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aut quis voluptatem tenetur animi eaque suscipit omnis. Magni, optio excepturi? Non impedit deserunt beatae numquam eaque natus recusandae suscipit nostrum.",

        },
        {
            id:3,
            title:'Title',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aut quis voluptatem tenetur animi eaque suscipit omnis. Magni, optio excepturi? Non impedit deserunt beatae numquam eaque natus recusandae suscipit nostrum.",

        },
        {
            id:4,
            title:'Title',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aut quis voluptatem tenetur animi eaque suscipit omnis. Magni, optio excepturi? Non impedit deserunt beatae numquam eaque natus recusandae suscipit nostrum.",
 
        },
    ]




    return(
        <Container className="pb-5">
            
            <Row>
                <Col sm={8}>
                    <div className="p-5 ps-3">
                        <h2>Noticias</h2>
                    </div>
                </Col>
                <Col sm={4} className='news-volver'>
                    <div className="p-5">
                        <a href="/">Volver al Inicio</a>
                    </div>                    
                </Col>
            </Row>

            <div className="noticias d-grid gap-5">
                
                    {news.map((n,i) => {
                        return(
                            
                            <Card key={i} className="row p-3">
                                <Card.Body className="col d-grid gap-3 ">
                                <Card.Title className="p-1 ">{n.title}</Card.Title>
                                {n.img?
                                    <Container className="news-card-image px-5 py-3">
                                         <Card.Img style={{Height:100+'%'}} src={`${n.img}`}></Card.Img>
                                    </Container>
                                    :<></>
                                }
                                <Card.Text>{n.text}</Card.Text>
                                
                                </Card.Body>
                                <Card.Footer className="mt-3">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            
                        )
                    })}
            </div>
        </Container>
    )
}

export default NewsContainer