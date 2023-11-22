import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import plantHausLogo from "./assets/plantHausLogo.svg"
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className='navbar'>
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        <img src={plantHausLogo} alt="plant-haus-logo" />
                    </Navbar.Brand>
                </Link>
                <Nav className='nav-categories'>
                    <NavLink to={`/category/de-interior`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>De Interior</NavLink>
                    <NavLink to={`/category/de-exterior`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>De Exterior</NavLink>
                    <NavLink to={`/category/macetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Macetas</NavLink>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;