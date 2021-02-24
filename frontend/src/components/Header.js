import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';
import {Link, LinkContainer} from "react-router-bootstrap"

const Header = () => {
    return (
<header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>ShopMan </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                    <Nav.Link  className="fas fa-shopping-cart">Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                    <Nav.Link className="fas fa-user">Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
        </Container> 
            </Navbar>
</header>
    )
}

export default Header
