import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <Navbar className=' brand-center p-0' bg='light' variant='light'>
        <Container className="justify-content-between">
          <div></div>
          <Navbar.Brand className='m-0 p-0' href='/'>
            <img
              alt=''
              src='/assets/logosCompany/Original on Transparent.png'
              width='286'
              height='80'
              className=' d-inline-block align-top p-0'
            />{' '}
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link>
              <Link className='link' to={'/'}>Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='link' to={'/noticias'}>Noticias</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </header>
  );
};

export default Header;
