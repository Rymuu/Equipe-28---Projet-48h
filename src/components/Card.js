
import Link from "next/link";
import Button from "../components/Button";
import { useRouter } from "next/router";
import axios from 'axios';
import ReunionImg from "../public/reunion.webp";


const Card = (props) => {
    const router = useRouter();
    

    const deleteEvent = (id) => {
        let jwt = localStorage.getItem('jwt');
        axios
            .delete(`http://localhost:1337/api/events/${id}`, {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                },
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }

    return (
        <div className="event__card">
            <div className="event__img">
                <img src={ReunionImg.src} alt={props.event.attributes.title} />
            </div>
            <div className="event__data">
                <h2 className="text__center">{props.event.attributes.title}</h2>
                <p>{props.event.attributes.description}</p>
            </div>
            <Button title="Learn more" function={() => router.push(`/event/${props.event.id}`)} type="button" classes="btn btn__color-black" />
            {router.asPath === "/my-events" || router.asPath === "/admin/events" ?
                (
                    <>
                        {router.asPath === "/my-events" ?
                            (
                                <Button title="Delete" function={() => deleteEvent(props.event.id)} type="button" classes="btn btn__color-black" />
                            )
                            :
                            (
                                <>
                                    <Button title="Delete" function={() => deleteEvent(props.event.id)} type="button" classes="btn btn__color-black" />
                                    <Button title="Update" function={() => router.push(`/update/${props.event.id}`)} type="button" classes="btn btn__color-black" />
                                </>
                            )
                        }

                    </>
                )
                :
                (
                    <></>
                )}
        </div>
    );
}

export default Card;