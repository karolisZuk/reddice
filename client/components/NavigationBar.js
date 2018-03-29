import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">Crazy corndog</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"> <NavLink to="/signup" className="nav-link" activeClassName="active">Sign up</NavLink></li>
            <li className="nav-item"><NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink></li>
          </ul>
          <span className="navbar-text">
            Navbar text
          </span>
        </div>
      </nav>
    );
}