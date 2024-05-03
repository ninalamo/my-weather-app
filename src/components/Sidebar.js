import React from 'react';
import '../components/Sidebar.css';

const Sidebar = ({ isLoggedIn, onLogout }) => {
  if (!isLoggedIn) return null; // Don't render sidebar if not logged in

  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <a href="#" className="btn btn-link" onClick={onLogout}>
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
