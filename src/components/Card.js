
import Link from "next/link";
import Button from "../components/Button";
import { useRouter } from "next/router";

const Card = (props) => {
    const router = useRouter();

    return (
        <div className="event__card">
            <div className="event__img">
                <Link href={`/event/${props.event.id}`}>
                    <img src={`http://localhost:1337${props.event.attributes.image.data.attributes.url}`} alt={props.event.attributes.title} />
                </Link>
            </div>
            <div className="event__data">
                <h2>{props.event.attributes.title}</h2>
                <p>{props.event.attributes.description}</p>
            </div>
            <Button title="Learn more" function={() => router.push(`/event/${props.event.id}`)} type="button" classes="btn btn__color-black" />
        </div>
    );
}

export default Card;