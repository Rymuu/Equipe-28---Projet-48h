
const apiUrl = "http://localhost:1337/api";
export default {
    getEvents() {
        return fetch(`${apiUrl}/events?populate=image`)
        .then((res) => res.json())
    },
    getEvent(id) {
        return fetch(`${apiUrl}/events/${id}?populate=image`)
        .then((res) => res.json())
    }
}