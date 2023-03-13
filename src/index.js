import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import store from './store';

// console.log(store.getState())

// store.dispatch({
//     type: "ADD_TO_CART",
//     payload: 10
// })
// store.dispatch({
//   type: "REMOVE_FROM_CART",
//   payload: 5
// })

// store.dispatch({
//   type: "SET_USER_DATA",
//   payload: {
//     username: "Mohamed",
//     age : 20
//   }
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


