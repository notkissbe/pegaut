import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './header.css';

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-dark mx-auto">
            <Container className="mx-auto">
                <Navbar.Brand href="#home" id="cimSzoveg" className="text-light">Használt <img id="logo" src="pegot.png"></img> Pegaut</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Szolgáltatásaink" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Autó vásárlás</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Autó eladás</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="success" className="btn btn-danger">Hirdetésfeladás</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></header>
    )


}