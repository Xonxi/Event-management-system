import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import AdminDashboard from './AdminDashboard';

function LandingPage() {
  // State to manage user authentication and role
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to simulate user login with role
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            {isAuthenticated && isAdmin && <li><Link to="/admin">Admin Dashboard</Link></li>}
          </ul>
        </nav>

        <Route path="/register" component={RegistrationForm} />
        <Route
          path="/login"
          render={(props) => <LoginForm {...props} handleLogin={handleLogin} />}
        />
        {isAuthenticated && <Redirect exact from="/" to="/admin" />}
        {isAuthenticated && isAdmin && <Route path="/admin" component={AdminDashboard} />}
      </div>
    </Router>
  );
}

export default LandingPage;
