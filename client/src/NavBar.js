import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ loggedIn, onLogout }) => {
  const logoutItem = loggedIn && <>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="navbar-item" onClick={onLogout}>Logout</a>
  </>;

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        {loggedIn
          ? <Link className="navbar-item" to="/jobs/new">Post Job</Link>
          : <Link className="navbar-item" to="/login">Login</Link>
        }
        {logoutItem}
      </div>
    </nav>
  );
};
