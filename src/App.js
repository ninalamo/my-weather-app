import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import WeatherForecast from './components/WeatherForecast';
// Import other components (Navbar, Sidebar, Layout)
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout'; // Import Layout component
import './App.css'; // Import your CSS file
import 'bootstrap'; // Import Bootstrap (optional)
import { PrivateRoute } from './components/PrivateRoute'; // Import PrivateRoute component
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log(isLoggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home route - conditionally render based on login status */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />

        {/* Protected Routes using Layout */}
        <Route element={<Layout />}>
          <Route
            index
            path="/weather"
            element={<WeatherForecast />}
          />
          {/* Other protected routes... */}
        </Route>

        {/* Login route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Catch-all route for unauthorized access */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
