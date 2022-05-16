import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../../components/Button";
import eventService from "../../../services/event.service";

const Index = () => {
  const router = useRouter();
  const [event, setEvent] = useState();

  useEffect(() => {
    const id = router.query.id;

    eventService.getEvent(id)
      .then((data) => {
        setEvent(data.data);
        console.log(data.data);
      })
      .catch(err => console.log(err))
  }, []);


  return (
    <div className="event_page">
      <p>{event && event.attributes.title}</p>

      <div className="text__center">
        <p>{event && event.attributes.description}</p>
        <Button
          type="button"
          classes="btn btn__color-black"
          title="Participate"
        />
      </div>
    </div>
  );
};

export default Index;