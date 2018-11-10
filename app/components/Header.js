import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <nav id="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
