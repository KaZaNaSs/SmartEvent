import React, { useState } from 'react';
import { USE_SOA, API_BASE, REGISTRATION_SERVICE_BASE } from '../config';

function RegisterForm({ eventId }) {
  const [form, setForm] = useState({ fullName: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registration = {
      eventId,
      fullName: form.fullName,
      email: form.email,
    };

    const url = USE_SOA
      ? `${REGISTRATION_SERVICE_BASE}/registrations`
      : `${API_BASE}/registrations`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration),
      });

      if (response.ok) {
        setMessage("✅ Inscription avec succès !");
        setForm({ fullName: '', email: '' });

        // Disparaît après 3 secondes
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage("❌ Une erreur s'est produite.");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      setMessage("❌ Erreur de connexion au serveur.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Inscription</h4>
      <div className="mb-2">
        <input
          name="fullName"
          placeholder="Nom complet"
          className="form-control"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ position: 'relative', zIndex: 100 }}
      >
        S'inscrire
      </button>

      {message && (
        <div className="alert alert-success mt-3 text-center">{message}</div>
      )}
    </form>
  );
}

export default RegisterForm;
