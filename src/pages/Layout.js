// src/pages/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LatestProjects from './LatestProjects';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <LatestProjects />
      <Outlet /> {/* Placeholder for nested routes */}
    </>
  );
};

export default Layout;
