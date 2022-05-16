import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Card from '../components/Card';
import eventService from '../services/event.service';

export default function Home() {
  const [events, setEvents, users] = useState();

  useEffect(() => {
    eventService.getEvents()
      .then((data) => {
        setEvents(data.data);
        console.log(data.data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="page__home">
       <div className="events__grid">
        {events &&
          events.map((event) => (
            <Card event={event} key={event.id} />
          ))}
      </div>
    </div>
  )
}
