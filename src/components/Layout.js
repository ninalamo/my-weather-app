import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './Layout.css'; // Import your Layout CSS (optional)

const Layout = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div className="layout-container">
      {isLoggedIn === false && ( // Corrected condition with closing parenthesis
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </nav>
      )}

      <main className="content">
        <Outlet /> {/* Placeholder for nested content */}
      </main>
    </div>
  );
};

export default Layout;
