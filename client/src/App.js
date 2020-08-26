import React from 'react';
import './App.css';
import data from './data';

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
                <a href="index.html">amazona</a>
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
                <ul className="products">
                  {
                    data.products.map(product => 
                      <li>
                        <div className="product">
                            <img className="product-image" src={product.image} alt="product"/>
                            <div className="product-name"><a href="product.html">{product.name}</a></div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-review">{product.rating} Stars ({product.numReviews} Reviews)</div>
                        </div>
                      </li>
                    )
                  }
                     
                </ul>
            </div>
            
        </main>
        <footer className="footer">
            
            All rights reserved.
        </footer>
    </div>
  );
}

export default App;
