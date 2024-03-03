import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./nav.scss";

export default function nav() {
  return (
      <Navbar expand="lg" className="px-5">
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:" className="text-center">
                Email
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://www.linkedin.com/in/daniil-zhelyazkov"
                className="text-center"
              >
                Phone
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
