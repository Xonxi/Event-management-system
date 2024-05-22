import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
