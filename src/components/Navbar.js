import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <NavLink exact to="/" className="item">
          Create CV Application
        </NavLink>
        <NavLink exact to="/view/XAqHyKKplZU8UtWINinY" className="item">
          View Default CV Application
        </NavLink>
      </Menu>
    );
  }
}

export default NavBar;
