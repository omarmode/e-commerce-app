import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-secondary  ">
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0 ms-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className="mx-3"
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Home
            </Link>
            <Link
              to="/About"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
