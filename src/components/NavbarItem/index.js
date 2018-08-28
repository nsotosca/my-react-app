import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

export default function NavbarItem({ exact, text, to }) {
  return (
    <li className="nav-item">
      <NavLink
        activeClassName="active"
        className="nav-link"
        exact={exact}
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
}

NavbarItem.defaultProps = {
  exact: false,
};

NavbarItem.propTypes = {
  exact: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
