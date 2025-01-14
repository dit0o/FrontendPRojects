import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';  
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import Signup from './components/Signup';
import { Login } from './components/login';

function App() {
  const location = useLocation(); 

  return (
    <div>
     
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
