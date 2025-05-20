import React, { useEffect, useState } from 'react';
import { API_BASE } from '../config';
import EditEventForm from '../components/EditEventForm';

function AdminPage() {
  const [events, setEvents] = useState([]);
  const [mode, setMode] = useState(null); // 'add' | 'edit' | 'delete'
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', date: '' });

  const fetchEvents = async () => {
    const res = await fetch(`${API_BASE}/events`);
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Confirmer la suppression ?")) return;
    const res = await fetch(`${API_BASE}/events/${id}`, { method: 'DELETE' });
    if (res.ok) {
      alert("Événement supprimé !");
      fetchEvents();
      setMode(null);
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Ajout réussi !");
      setForm({ title: '', description: '', date: '' });
      fetchEvents();
      setMode(null);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🎛️ Espace Administrateur</h2>

      <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
        <button className="btn btn-primary" onClick={() => { setMode('add'); setSelectedEvent(null); }}>
          ➕ Ajouter un événement
        </button>
        <button className="btn btn-warning text-dark" onClick={() => { setMode('edit'); setSelectedEvent(null); }}>
          ✏️ Modifier un événement
        </button>
        <button className="btn btn-danger" onClick={() => { setMode('delete'); setSelectedEvent(null); }}>
          🗑️ Supprimer un événement
        </button>
      </div>

      {/* Formulaire d'ajout */}
      {mode === 'add' && (
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="mb-3">Ajouter un événement</h5>
          <form onSubmit={handleAddSubmit}>
            <input required className="form-control mb-2" placeholder="Titre"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <textarea required className="form-control mb-2" placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <input required type="date" className="form-control mb-2"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <button type="submit" className="btn btn-success">✅ Ajouter</button>
          </form>
        </div>
      )}

      {/* Liste pour modifier */}
      {mode === 'edit' && !selectedEvent && (
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="mb-3">Sélectionner un événement à modifier :</h5>
          <ul className="list-group">
            {events.map(ev => (
              <li key={ev.id} className="list-group-item d-flex justify-content-between align-items-center">
                {ev.title}
                <button className="btn btn-sm btn-warning" onClick={() => setSelectedEvent(ev)}>Modifier</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formulaire de modification */}
      {mode === 'edit' && selectedEvent && (
        <EditEventForm event={selectedEvent} onUpdated={() => {
          setSelectedEvent(null);
          setMode(null);
          fetchEvents();
        }} />
      )}

      {/* Liste pour supprimer */}
      {mode === 'delete' && (
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="mb-3">Sélectionner un événement à supprimer :</h5>
          <ul className="list-group">
            {events.map(ev => (
              <li key={ev.id} className="list-group-item d-flex justify-content-between align-items-center">
                {ev.title}
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(ev.id)}>Supprimer</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
