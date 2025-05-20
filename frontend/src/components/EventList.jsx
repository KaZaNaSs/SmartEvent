import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../config';
import './EventList.css'; // 🧩 On ajoute un fichier CSS

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error("Erreur lors du chargement des événements", err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📅 Événements à venir</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
            <div className="event-card shadow h-100 p-4">
              <h5 className="event-title mb-2">{event.title}</h5>
              <p className="event-date text-primary"><strong>🗓️ {new Date(event.date).toLocaleDateString()}</strong></p>
              <p className="event-description text-muted">{event.description}</p>
              <Link to={`/events/${event.id}`} className="btn btn-outline-primary mt-auto">Voir les détails</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
