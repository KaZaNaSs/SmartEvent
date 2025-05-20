import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Navbar.css";
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AdminPage from './pages/AdminPage';
import EventDetail from './components/EventDetail';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">SmartEvent</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Accueil</Link>
            <Link className="nav-link" to="/events">Événements</Link>
            <Link className="nav-link" to="/admin">Admin</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<h2 className="text-center mt-5">Page non trouvée</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
