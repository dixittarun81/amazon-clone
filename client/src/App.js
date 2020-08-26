import React from 'react';
import './App.css';

import {Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                   <i className="fa fa-bars"></i>
                    
                </button>
                <Link to="/">amazona</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>&nbsp;&nbsp;&nbsp;
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <div className="sidebar-close">
                <h3>Shopping Categories</h3>
                <button onClick={closeMenu}><i className="fa fa-times-circle"></i></button>
            </div>
            
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        
        <main className="main">
          

            <div className="content">
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/product/:id" exact={true} component={ProductScreen}/>  
            </div>
            
        </main>
        <footer className="footer">
            
            All rights reserved.
        </footer>
    </div>
  );
}

export default App;
