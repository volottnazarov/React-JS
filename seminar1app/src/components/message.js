import { PropTypes } from 'prop-types';

function Message({ author, time, text }) {
    return (
        <>
            <h4>Автор: {author}</h4>
            <p>Дата: {time}</p>
            <p>Сообщение: {text}</p>
        </>
    );
}

Message.propTypes = {
    author: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Message;