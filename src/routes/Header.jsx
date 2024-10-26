import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import logo from '../assets/gg1.png';

function Header() {
    return (
        <div>
            <Nav variant="pills" className='topbar'>
                <Nav.Item> <Nav.Link  href="/"personal style={{color: "#fff"}}>Personal</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link  href="/about" style={{color: "#fff"}}>Discover</Nav.Link> </Nav.Item>
                <Nav.Item><Nav.Link  href="/buisness" style={{color: "#fff"}}>Buisness</Nav.Link> </Nav.Item>
              
                <Nav.Item className='lastitem'><Nav.Link  href="/buisness" style={{color: "#fff"}}>Become Designer</Nav.Link> </Nav.Item>
              
               
            </Nav>
            <Navbar className="navbar">
                <Container fluid>
                    <Navbar.Brand className='logo' href="/home">
                    <img className='blogo' src={logo} alt='Logo' />
                        GraphiCo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="newNav"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='navlink' href="/home">Inspiration</Nav.Link>
                            <Nav.Link className='navlink' href="/home">Services</Nav.Link>
                            
                            <Nav.Link className='navlink' href="/features">Ai Image Generator</Nav.Link>
                            <Nav.Link className='navlink' href="/contact">Find Jobs</Nav.Link>
                            
                      
                         
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="O."
                                className='search'
                                aria-label="Search"
                            />
                            <Button className='signin' variant="primary"><a href='/'><p style={{color: "#fff", textDecoration: "none"}}>Sign In</p></a></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header