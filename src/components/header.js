import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header className="header">
          <Navbar className="brand-center p-0" bg="light" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand className=' m-0 p-0' href="#home">
            <img
              alt=""
              src="/assets/Original on Transparent.png"
              width="286"
              height="80"
              className="d-inline-block align-top  p-0"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
          {/* <Navbar bg="light" expand="lg" className='py-4'>
            <Container className='container-css'>
              < >
                <Link to='/'>
                <img src="./assets/Original on Transparent.png" 
                     alt="" width="160"
                     height="60"
                      />
                </Link>
              </Navbar.Brand> */}
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse> */}
          {/* </Container>
        </Navbar> */}
        </header>
  );
}

export default Header;