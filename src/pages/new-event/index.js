import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from 'next/router';
import axios from "axios";

const Index = () => {
    const [event, setEvent] = useState();
    const createEvent = (e) => {
        axios
            .post('http://localhost:1337/api/events', {
                "data": {
                    title: event.title,
                    description: event.description,
                    dateTime: event.dateTime,
                    image: event.image,
                }
            })
            .then(response => {
                // Handle success.
                if (response.data.error) {
                } else {

                }

            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
        console.log(e);
        e.preventDefault();
        console.log("created");
        console.log(event);
    }

    return (
        <div className="page__createEvent">
            <form className="form" onSubmit={(e) => createEvent(e)}>
                <Input
                    label="Title"
                    name="title"
                    id="title"
                    type="text"
                    classes="form__input"
                    required={true}
                    placeholder="Title"
                    handleChange={(e) => setEvent({ ...event, title: e.target.value })}
                />
                <Input
                    label="Description"
                    name="description"
                    id="description"
                    type="text"
                    classes="form__input"
                    required={true}
                    placeholder="Description"
                    handleChange={(e) => setEvent({ ...event, description: e.target.value })}
                />
                <Input
                    label="Date"
                    name="date"
                    id="date"
                    type="datetime-local"
                    classes="date"
                    required={true}
                    placeholder="date"
                    handleChange={(e) => setEvent({ ...event, dateTime: e.target.value })}
                />
                <Input
                    label="image"
                    name="image"
                    id="image"
                    type="file"
                    classes="image"
                    required={true}
                    placeholder="image"
                    handleChange={(e) => setEvent({ ...event, image: e.target.value })}
                />
                <Button title="Create" classes="btn btn__color-black" type="submit" />
            </form>
        </div>
    );
};

export default Index;