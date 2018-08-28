import { NavLink } from 'react-router-dom';
import React from 'react';

import NavbarItem from '../NavbarItem';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        My React App
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor">
        <ul className="navbar-nav mr-auto">
          <NavbarItem exact to="/" text="Home" />
          <NavbarItem to="/posts" text="Posts" />
          <NavbarItem to="/comments" text="Comments" />
        </ul>
      </div>
    </nav>
  );
}
