import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import axios from "axios";
import withAuth from "../../../HOC/withAuth";

const Index = () => {
  const router = useRouter();
  const [event, setEvent] = useState();
  const id = router.query.id;

  const updateEvent = (e) => {
    axios
      .put(`http://localhost:1337/api/events/${id}`, {
        "data": {
          title: event.title,
          description: event.description,
          dateTime: event.dateTime,
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

    e.preventDefault();

  };

  return (
    <div className="update_page">
      <form className="form" onSubmit={(e) => updateEvent(e)}>
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
        <Button title="Create" classes="btn btn__color-black" type="submit" />
      </form>
    </div>
  );
};

export default withAuth(Index);