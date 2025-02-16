import { messages } from '../data';
import Message from './message';

function MessagesList() {
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </>
    );
}

export default MessagesList;