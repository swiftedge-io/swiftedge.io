import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <span className="logo"></span>
      <ul>
        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
        <li><a href="#"><i className="fa fa-address-book"></i></a></li>
      </ul>
    </nav>
  );
}
