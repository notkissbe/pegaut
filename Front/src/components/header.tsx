import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './header.css';
import React, {Fragment, useState} from "react";
import  ReactDOM from "react-dom";
import {Transition} from "react-transition-group";
import Sidebar from "./Searching/sidebar";
import "./Searching/styles.css";
import SortPriceD from "./sort"

export default function Header() {
    const [isOpen, toggleIsOpen] = useState<boolean>(false);
    const onOpenModalClick = () => toggleIsOpen(true);
    const onCloseModalClick = () => toggleIsOpen(false);
    const duration: number = 250;


    
    function HandleSortSelection(mod:string){
        localStorage.setItem('SortBy',JSON.stringify(mod));
        window.dispatchEvent(new Event("storage"));
    }
    return (
        <header>
            <Navbar expand="lg" className="navbar-dark bg-dark mx-auto">
            <Container className="mx-auto">
                <Navbar.Brand href="/" id="cimSzoveg" className="text-light">Használt <img id="logo" src="pegot.png"></img> Pegaut</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Szolgáltatásaink" id="basic-nav-dropdown" className="d-flex align-items-center">
                            <NavDropdown.Item href="#action/3.1">Autó vásárlás</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Autó eladás</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Brand>
                        <Button onClick={onOpenModalClick} variant="dark" className="btn-outline-light">Keresés</Button>
                        </Navbar.Brand> 
                        <NavDropdown title="Rendezés" id="basic-nav-dropdown" className="d-flex align-items-center">
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("ArC")}}>Ár szerint csökkenő</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("ArN")}}>Ár szerint növekvő</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("KmC")}}>Km szerint csökkenő</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("KmN")}}>Km szerint növekvő</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("EvC")}}>Év szerint csökkenő</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{HandleSortSelection("EvN")}}>Év szerint növekvő</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="danger" className="d-flex align-items-center " href="feladas">Hirdetésfeladás</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Fragment> 
            <Transition in={isOpen} timeout={duration}>
                {(state: string) => (
                <Sidebar duration={duration} state={state}>
                    {isOpen && (
                        <div>
                            <p></p>
                            <h3>Model</h3>
                            <input type="text" placeholder="Model"></input>
                            <h3>Kivitel</h3>
                            <input type="text" placeholder="Kivitel"></input>
                            <h3>Évjárat</h3>
                            <input type="number" min={1889} max={2024} placeholder="Évjárat"></input>
                            <h3>Ár</h3>
                            <input type="number" placeholder="Ár"></input>
                            <h3>Motor</h3>
                            <input type="text" placeholder="Motor"></input>
                            <h3>Km</h3>
                            <input type="number" placeholder="Km"></input>
                            <p></p>
                            <button onClick={onCloseModalClick} className="btn btn-dark">Bezárás</button>
                            <p></p>
                        </div>
                    )}
                </Sidebar>
                )}
            </Transition>
        </Fragment></header>
    )


}