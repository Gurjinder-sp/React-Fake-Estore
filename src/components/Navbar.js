import Container  from "react-bootstrap/Container";
import Navbar  from "react-bootstrap/Navbar";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CartIcon, UserIcon } from "../icons";
import Badge from 'react-bootstrap/Badge';

const NavbarComp = () => {
    const {name, loggedIn} = useSelector(store => store.login);
    const {quantity } = useSelector(store => store.cart);
    return ( 
        <Navbar className="p-3" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>FakeStore</Navbar.Brand>
            </Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            {loggedIn ? <Navbar.Text className="mx-3"><Link to="/cart"><CartIcon /><Badge bg="warning">{quantity}</Badge></Link></Navbar.Text> : '' }
            <Navbar.Text>
                <UserIcon/> {name}
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavbarComp;