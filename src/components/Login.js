import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,login } from '../features/login/loginSlice';

const Login = () => {
    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const {userName, passWord} = useSelector(store => store.login);

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        dispatch((login(name)))
        dispatch(loginUser({user: userName,pwd:passWord}));
    }
    return (  
        <Form className='shadow-sm p-5 bg-light w-50' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='mt-0'>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={(evt) => {
                    if(evt.target.value.length > 3) {
                        setDisabled(false);
                    setName(evt.target.value);
                    } else {
                        setDisabled(true);
                    }
                    }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={userName} disabled />
                <Form.Text className="text-muted">
               Username is fixed 
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={passWord} disabled/>
                <Form.Text className="text-muted">
               Password is fixed 
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={disabled}>
                Login
            </Button>
        </Form>
        
    );
}
 
export default Login;