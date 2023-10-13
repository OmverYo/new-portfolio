import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="AboutMe">Justin Lee's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="Skills">Skills</Nav.Link>
                        <Nav.Link href="Projects">Projects</Nav.Link>
                        <Nav.Link href="GitHub">GitHub</Nav.Link>
                        <Nav.Link href="Career">Career</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}