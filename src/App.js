import React, {useState, useEffect} from 'react'
import {BrowserRouter, Router, Route, Link, a, Routes} from 'react-router-dom'
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Navbar from './Pages/Nav';
import Products from './Pages/Products';
import pro from './api/products.json'



// get The Products Method
const getAllProducts = () => {
  return Promise.resolve(pro);
}

const App = () => {


  // This The State 
  const [products, setProducts] = useState([]);


  // fetch The Data From The Json File
  useEffect(() => {
      getAllProducts().then(data=>{
          setProducts(data);
          // console.log(products);
      })
  }, [])

  console.log(products)

  return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/products' exact element={<Products products={products} />} />
          <Route path='/cart/:id' exact element={<Cart products={products } />} />
        </Routes>
        
      </div>
  );
}

export default App;
