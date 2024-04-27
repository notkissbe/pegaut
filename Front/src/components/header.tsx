import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './header.css';
/*import { Search } from "./search";*/
import React, {Fragment, useState} from "react";
import  ReactDOM from "react-dom";
import {Transition} from "react-transition-group";

import ModalBackdrop from "./Searching/modal-backdrop";
import Sidebar from "./Searching/sidebar";
import "./Searching/styles.css";

export default function Header() {
    const [isOpen, toggleIsOpen] = useState<boolean>(false);
    const onOpenModalClick = () => toggleIsOpen(true);
    const onCloseModalClick = () => toggleIsOpen(false);
    const duration: number = 250;
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
                        <Navbar.Brand>
                            <Fragment>
                            <button onClick={onOpenModalClick}>Szűrés</button>
                            <Transition in={isOpen} timeout={duration}>
                                {(state: string) => (
                                <ModalBackdrop duration={duration} state={state}>
                                    <Sidebar duration={duration} state={state}>
                                    {isOpen && (
                                        <div>
                                        <h2 id="szur">Szűrés</h2>
                                        <button onClick={onCloseModalClick}>Bezárás</button>
                                        </div>
                                    )}
                                    </Sidebar>
                                </ModalBackdrop>
                                )}
                            </Transition>
                            </Fragment>
                        </Navbar.Brand>
                        <Button variant="success" className="btn btn-danger">Hirdetésfeladás</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></header>
    )


}