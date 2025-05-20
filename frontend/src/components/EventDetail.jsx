import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE } from '../config';
import RegisterForm from './RegisterForm';
import './EventDetail.css'; // 🧩 ajout du CSS

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/events/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur API (${res.status})`);
        return res.json();
      })
      .then(setEvent)
      .catch((err) => {
        console.error("Erreur lors du chargement :", err);
        setError("Impossible de charger l'événement.");
      });
  }, [id]);

  if (error) return <p className="alert alert-danger text-center">{error}</p>;
  if (!event) return <p className="text-center">Chargement...</p>;

  return (
    <div className="event-detail container py-5">
      <div className="event-card shadow p-4 mb-5">
        <h2 className="mb-3 text-capitalize">{event.title}</h2>
        <p><strong className="text-primary">📅 Date :</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p className="text-muted">{event.description}</p>
      </div>

      <div className="register-section shadow-sm p-4">
        <h4 className="mb-3">📝 Inscription</h4>
        <RegisterForm eventId={event.id} />
      </div>
    </div>
  );
}

export default EventDetail;
