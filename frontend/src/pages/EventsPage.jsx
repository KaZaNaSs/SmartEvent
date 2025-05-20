import React from 'react';
import EventList from '../components/EventList';

function EventsPage() {
  return (
    <div className="container mt-4">
      <h2>Liste des événements</h2>
      <EventList />
    </div>
  );
}

export default EventsPage;
