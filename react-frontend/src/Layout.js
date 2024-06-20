import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="main-header">
        <h1>Animal Classification</h1>
      </header>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/predict">Prediction Analysis</Link>
          </li>
          <li className="nav-item">
            <Link to="/decision-tree">Decision Tree</Link>
          </li>
          <li className="nav-item">
            <Link to="/k-means">K-Means</Link>
          </li>
          <li className="nav-item">
            <Link to="/random-forest">Random Forest</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
