import { useParams } from "react-router-dom";

function DetailPage({ items }) {
    const { id } = useParams();
    const item = items.find((item) => item.id === parseInt(id));
    return (
        <div>
            <h2>Details {id}</h2>
            <p>ID: {item.id}</p>
            <p>TITLE: {item.title}</p>
            <p>{item.content}</p>
        </div>
    );
};

export default DetailPage;