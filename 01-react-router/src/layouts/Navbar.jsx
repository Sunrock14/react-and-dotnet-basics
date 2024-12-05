// src/components/Navbar.js  
import React from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
  return (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
      <div className="container">  
        <Link className="navbar-brand" to="/">Todo App</Link>  
        <button   
          className="navbar-toggler"   
          type="button"   
          data-bs-toggle="collapse"   
          data-bs-target="#navbarNav"  
        >  
          <span className="navbar-toggler-icon"></span>  
        </button>  
        <div className="collapse navbar-collapse" id="navbarNav">  
          <ul className="navbar-nav">  
            <li className="nav-item">  
              <Link className="nav-link" to="/">Ana Sayfa</Link>  
            </li>  
            <li className="nav-item">  
              <Link className="nav-link" to="/create">Todo Ekle</Link>  
            </li>  
            <li className="nav-item">  
              <Link className="nav-link" to="/list">Todoları Listele</Link>  
            </li>  
          </ul>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;  