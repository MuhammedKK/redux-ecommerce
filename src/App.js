import React from 'react'
import {BrowserRouter, Router, Route, Link, a, Routes} from 'react-router-dom'
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Navbar from './Pages/Nav';
import Products from './Pages/Products';

const App = () => {
  return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home name="mohamed" />} />
          <Route path='/home' exact element={<Home name="mohamed" />} />
          <Route path='/products' exact element={<Products Products="cat1" />} />
          <Route path='/cart' exact element={<Cart cart="cart" />} />
        </Routes>
        
      </div>
  );
}

export default App;
