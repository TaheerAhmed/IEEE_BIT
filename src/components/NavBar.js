import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo2.png'
import '../CSS/NavBar.css'
function NavBarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home"> <img
                            alt="Logo BIT"
                            src={Logo}
                            width="130px"
                            height="45px"
                            margin="0px"
                            background-color="transperent"
                            className="d-inline-block align-top img-Logo"
                        /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                    </Nav>
                    <Nav className='NavBarAnchor'>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Accolades
                        </Nav.Link>
                        
                        <Nav.Link href="#features">Events</Nav.Link>
                        <Nav.Link href="#pricing">Gallery</Nav.Link>
                        <NavDropdown title="Team" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                2021
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">2022</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;