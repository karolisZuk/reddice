import React from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Red Dice</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a class="nav-link" href="#">Sign up</a></li>
            <li className="nav-item"><a class="nav-link" href="#">Login</a></li>
          </ul>
          <span className="navbar-text">
            Navbar text
          </span>
        </div>
      </nav>
    );
}