import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <header className='header'>
      <Navbar className='brand-center p-0' bg='light' variant='dark'>
        <Container className='justify-content-center'>
          <Navbar.Brand className=' m-0 p-0' href='/'>
            <img
              alt=''
              src='/assets/Original on Transparent.png'
              width='286'
              height='80'
              className=' d-inline-block align-top p-0'
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
