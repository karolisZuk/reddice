import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"> <a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"> <NavLink to="/signup" className="nav-link" activeClassName="active">Sign up</NavLink></li>
        <li className="nav-item"><NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink></li>
      </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">Crazy corndog</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            { isAuthenticated ? userLinks : guestLinks}
          <span className="navbar-text">
            Navbar text
          </span>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {logout})(NavigationBar);