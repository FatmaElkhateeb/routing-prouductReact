import React from 'react'
import {Navbar,Nav,Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../Assets/logo3.jpg";


const NavBar = () => {
    return (
 
            <Navbar bg="dark" expand="lg" >
  <Navbar.Brand ><Image  src={logo}  /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto justify-content-between">
      <Nav.Link>  < Link to="/"> <li className="list-item text-danger font-weight-bolder">Products </li> </Link></Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    );

    
}

export default NavBar
