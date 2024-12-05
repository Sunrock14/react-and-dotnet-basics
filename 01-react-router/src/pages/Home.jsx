// src/pages/HomePage.js  
import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {  
  return (  
    <div className="container mt-4">  
      <h2>Todo Uygulamasına Hoş Geldiniz</h2>  
      <div className="row mt-4">  
        <div className="col-md-4">  
          <div className="card">  
            <div className="card-body">  
              <h5 className="card-title">Todo Ekle</h5>  
              <p className="card-text">Yeni bir todo eklemek için buraya tıklayın.</p>  
              <Link to="/create" className="btn btn-primary">Todo Ekle</Link>  
            </div>  
          </div>  
        </div>  
        <div className="col-md-4">  
          <div className="card">  
            <div className="card-body">  
              <h5 className="card-title">Todoları Listele</h5>  
              <p className="card-text">Mevcut todoları görüntülemek için buraya tıklayın.</p>  
              <Link to="/list" className="btn btn-success">Todoları Gör</Link>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default HomePage; 