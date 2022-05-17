import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import eventService from '../../services/event.service';
import withAuth from '../../HOC/withAuth';

const Index = () => {
    const [events, setEvents] = useState();




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
export default withAuth(Index);