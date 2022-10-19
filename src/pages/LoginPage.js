import Login from "../components/Login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
    // height:'100vh',
    // width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10vh',
    // background:'whitesmoke'

}

const LoginPage = () => {
    return ( 
          <Container className="w-100" style={style}>
         
            <Login />
          
        </Container>
     );
}
 
export default LoginPage;