import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo_main from "../../media/logos/logo_main.png";
import "./nav.scss";

export default function nav() {
  return (
    <Navbar expand="lg" className="px-5">
      <Navbar.Brand as={Link} to="/">
        <img className="img-fluid" src={logo_main}></img>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end align-items-center flex-grow-1">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/faq"
          >
            <span className="pt-1 px-4 button-nav button-faq">FAQ</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="mailto:"
          >
            <span className="pt-1 px-3 button-nav button-contact">Contact Us</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
