import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import WeatherForecast from './components/WeatherForecast';
// Import other components (Navbar, Sidebar, Layout)
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout'; // Import Layout component
import './App.css'; // Import your CSS file
import 'bootstrap'; // Import Bootstrap (optional)
import { PrivateRoute } from './components/PrivateRoute'; // Import PrivateRoute component

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
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Protected Routes using Layout */}
          <Route
            index
            element={
              <PrivateRoute> {/* Wrap Home in PrivateRoute */}
                <WeatherForecast />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Outlet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
