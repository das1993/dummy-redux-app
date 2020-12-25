import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="link">
            <a href="/user">User</a>
            <a href="/dashboard">Dashboard</a>
        </div>
    </div>
  );
}

export default Header;
