import React, { useState } from 'react';
import { API_BASE } from '../config';
import './AdminAddEvent.css';

function AdminAddEvent() {
  const [event, setEvent] = useState({ title: '', date: '', description: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });

    if (res.ok) {
      setMessage("Événement ajouté !");
      setEvent({ title: '', date: '', description: '' });
    } else {
      setMessage("Erreur lors de l'ajout.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un événement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Titre</label>
          <input name="title" className="form-control" value={event.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" name="date" className="form-control" value={event.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="description" className="form-control" value={event.description} onChange={handleChange} required />
        </div>
        <button className="btn btn-success">Ajouter</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default AdminAddEvent;
