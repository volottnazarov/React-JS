import './eventCard.css';

function EventCard(props) {
    return (
        <div className='eventCard'>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.location}</p>
        </div>
    );
}

export default EventCard;