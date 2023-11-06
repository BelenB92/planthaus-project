import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import plantHausLogo from "./assets/plantHausLogo.svg"
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand>
                    <img src={plantHausLogo} alt="plant-haus-logo" />
                </Navbar.Brand>
                <Nav className='nav-categories'>
                    <button>De interior</button>
                    <button>De exterior</button>
                    <button>Macetas</button>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;