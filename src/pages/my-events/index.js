import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Card from 'C:/Users/Sutri/Projects/YnovGestionEvent/src/components/Card.js';
import eventService from '../../services/event.service';
import axios from 'axios';

export default function Home() {
    const [events, setEvents] = useState();

    const deleteEvent = (id) => {
        axios
            .delete(`http://localhost:1337/api/events/${id}`)
            .then(response => {
                console.log(response);
            });
    }


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
