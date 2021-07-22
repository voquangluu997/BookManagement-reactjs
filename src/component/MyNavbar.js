import React, { useState } from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { getUser } from "../Utils/Common";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">BOOK MANAGEMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bookslist">Books list</Nav.Link>
            <Nav.Link href="/author">Author</Nav.Link>
            <Nav.Link href="/category">Category</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
