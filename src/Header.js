import React from 'react';
import './header.css';
import logo from './green_leaves_logo.jpg';

export default function header() {
    return (
        //header section
        <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          
            <a className="navbar-brand ms-5" href="#">
                <img src={logo} alt="Logo" style={{ width: 40 }} className="rounded-pill" />
            </a>
            <div className="collapse navbar-collapse justify-content-end me-5" id="nav" >
                <ul className="navbar-nav ms-4" >
                  <li className="nav-item"><a href="#home" className="nav-link fw-bold">Home</a></li>
                  <li className="nav-item"><a href="#service" className="nav-link fw-bold">Service</a></li>
                  <li className="nav-item"><a href="#category" className="nav-link fw-bold">Category</a></li>
                </ul>
            </div>

        </div>
  </nav>
    )
}
