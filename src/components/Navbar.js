import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="ui inverted menu">
        <Link to="/create" className="item">
          Create CV Application
        </Link>
        <Link to="/view" className="item">
          View CV Application
        </Link>
      </div>
    );
  }
}

export default NavBar;
