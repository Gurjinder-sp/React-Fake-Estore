import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import { useSelector } from 'react-redux';
import NavbarComp from './components/Navbar';
import LoginPage from './pages/LoginPage';
import CheckoutForm from './pages/CheckoutForm';
import { Route, Routes, Redirect, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartPage from './pages/Cart';
import Loader from './components/Loader';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import OrderSuccess from './pages/Success';

const stripePromise = loadStripe('pk_test_51HrjYlDnGuaAT4tp4jnsjOOhF5cdymLyuNGPf0aqYeHmSVNqdysYv6p7Gr78NhmpTOuKq0iQR7imRbTcVGai5Dzp00VIqizmJE');
function App() {
  const navigate = useNavigate();
  const {loggedIn} = useSelector(store => store.login);
  const [secret, setSecret] = useState('')

  const options = {
    clientSecret: secret
  }

  useEffect(() => {
    if (loggedIn) {
    navigate('/products');

    }
  }, [loggedIn]);

  useEffect(() =>{
    if(loggedIn) {
    (async () => {
      const response = await fetch('http://localhost:5000/secret');
      const {client_secret: clientSecret} = await response.json();
      // Render the form using the clientSecret
      console.log(clientSecret);
      setSecret(clientSecret);
    })();
  }
  },[loggedIn])
  return (
    <div className="App">
          <Loader />
          <NavbarComp />
          <Routes>
            {loggedIn ? <>
            <Route exact path="/products" element={<Products />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/payment' element={<Elements stripe={stripePromise} options={options} ><CheckoutForm /></Elements>} />
            <Route path='/success' element={<OrderSuccess />} />
          </>
          : 
          <>
          <Route path='/login' element={<LoginPage />} /> 
          <Route path='*'  element={<Navigate to="/login" />} />
            </>}
        </Routes>
     
    </div>
  );
}

export default App;
