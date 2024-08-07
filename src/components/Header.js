import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-dark text-white p-3">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand">Online Coaching</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">Contact US</Link>
                    </li>
                </ul> 
            </div>
              
        </nav>
    </header>
  )
}

export default Header