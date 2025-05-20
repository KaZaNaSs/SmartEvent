import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config';

function EditEventForm({ event, onUpdated }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    if (event) {
      setForm({
        title: event.title,
        description: event.description,
        date: event.date.slice(0, 10),
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/events/${event.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    });

    if (res.ok) {
      alert("Événement modifié !");
      onUpdated();
    } else {
      alert("Erreur lors de la modification.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>Modifier l’événement</h4>
      <div className="mb-2">
        <input name="title" value={form.title} onChange={handleChange} className="form-control" placeholder="Titre" />
      </div>
      <div className="mb-2">
        <textarea name="description" value={form.description} onChange={handleChange} className="form-control" placeholder="Description" />
      </div>
      <div className="mb-2">
        <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control" />
      </div>
      <button
  type="submit"
  className="btn btn-success"
  style={{
    position: 'relative',
    zIndex: 1000,
    pointerEvents: 'auto'
  }}
>
  Modifier
</button>
    </form>
  );
}

export default EditEventForm;
