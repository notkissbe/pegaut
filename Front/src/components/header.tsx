import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import './header.css';
import React, {Fragment, useState} from "react";
import  ReactDOM from "react-dom";
import {Transition} from "react-transition-group";
import "./Searching/styles.css";

export default function Header() {
    
    function HandleSortSelection(mod:string){
        localStorage.setItem('SortBy',JSON.stringify(mod));
        window.dispatchEvent(new Event("storage"));
    }
    return (
        <header>
            <Navbar expand="lg" className="navbar-dark bg-dark mx-auto">
            <Container className="mx-auto">
                <Navbar.Brand href="/" id="cimSzoveg" className="text-light">Használt <img id="logo" src="../pegot.png"></img> Pegaut</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"> 
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
    </header>
    )


}