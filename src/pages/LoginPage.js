import Login from "../components/Login";
import Container from 'react-bootstrap/Container';


const style = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10vh',

}

const LoginPage = () => {
    return ( 
          <Container className="w-100" style={style}>
            <Login />
        </Container>
     );
}
 
export default LoginPage;