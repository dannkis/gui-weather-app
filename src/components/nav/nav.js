import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo_main from "../../media/logos/logo_main.png";
import "./nav.scss"; // Importing custom styles

export default function nav() {
  return (
    // Navbar component with Bootstrap classes
    <Navbar expand="lg" className="px-5">
      {/* Navbar brand/logo */}
      <Navbar.Brand as={Link} to="/">
        <img className="img-fluid" src={logo_main}></img> {/* Logo image */}
      </Navbar.Brand>

      {/* Navbar toggle button */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar collapse section */}
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Navbar links */}
        <Nav className="justify-content-end align-items-center flex-grow-1">
          {/* Home link */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* Blog link */}
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          {/* FAQ link */}
          <Nav.Link as={Link} to="/faq">
            {/* FAQ button */}
            <span className="pt-1 px-4 button-nav button-faq">FAQ</span>
          </Nav.Link>
          {/* Contact Us link */}
          <Nav.Link as={Link} to="mailto:">
            {/* Contact Us button */}
            <span className="pt-1 px-3 button-nav button-contact">Contact Us</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
