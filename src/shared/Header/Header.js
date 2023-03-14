import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="#home"><h1>World Tour</h1></Navbar.Brand>
          <Nav className="text-xl">
            <Nav.Link as={Link} to="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="#features">Features</Nav.Link>
            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="#pricing"><button>Logout</button></Nav.Link>
            <Nav.Link as={Link} to="#pricing"><button>Login</button></Nav.Link>


          </Nav>


        </Container>
      </Navbar>
      </div>
      <div className="header-container">
      
        <Link className="mx-4 text-xl text-red" style={{textDecoration:'none'}} to="#features">Vacations</Link>
        <Link className="mx-4 text-xl " style={{textDecoration:'none'}} to="#features">Our Brands</Link>
        <Link className="mx-4 text-xl " style={{textDecoration:'none'}} to="#features">Special Offers</Link>
        <Link className="mx-4 text-xl " style={{textDecoration:'none'}} to="#features">Special Offers</Link>
        <Link className="mx-4 text-xl " style={{textDecoration:'none'}} to="#features">About</Link>
      </div>
    </div>
  );
};

export default Header;