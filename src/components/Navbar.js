import Container  from "react-bootstrap/Container";
import Navbar  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CartIcon, UserIcon } from "../icons";

const NavbarComp = () => {
    const {name, loggedIn} = useSelector(store => store.login);
    return ( 
        <Navbar className="p-3" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>FakeStore</Navbar.Brand>
            </Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            {loggedIn ? <Navbar.Text className="mx-3"><Link to="/cart"><CartIcon /></Link></Navbar.Text> : '' }
            <Navbar.Text>
                <UserIcon/> {name}
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavbarComp;