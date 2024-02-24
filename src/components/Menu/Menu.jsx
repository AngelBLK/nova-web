import { Navbar, Container, Nav } from "react-bootstrap";
import "./Menu.css";

// Components

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="menu">
        <Container>
          <Navbar.Brand href="" className="menu__brand">
            <img
              alt="Nova logo"
              src="/src/assets/Vector.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Nova Code Link
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="color" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#" className="nav__item">
                Sobre nosotros
              </Nav.Link>
              <Nav.Link href="#" className="nav__item">
                Nuestros servicios
              </Nav.Link>
              <Nav.Link href="#" className="nav__item">
                Nuestros clientes
              </Nav.Link>
              <Nav.Link href="#" className="nav__item">
                Demos
              </Nav.Link>
              <Nav.Link href="#" className="nav__item">
                Contactanos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
