import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import { useSelector } from 'react-redux';
import NavbarComp from './components/Navbar';
import LoginPage from './pages/LoginPage';
import { Route, Routes, Redirect, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CartPage from './pages/Cart';
import Loader from './components/Loader';


function App() {
  const navigate = useNavigate();
  const {loggedIn} = useSelector(store => store.login);

  useEffect(() => {
    if (loggedIn) {
    navigate('/products');

    }
  }, [loggedIn]);
  return (
    <div className="App">
          <Loader />
          <NavbarComp />
          <Routes>
            {loggedIn ? <>
            <Route exact path="/products" element={<Products />} />
            <Route exact path='/cart' element={<CartPage />} />
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
