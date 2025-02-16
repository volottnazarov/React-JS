import { useState } from "react";
import "./commentList.css";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);



    function DeleteComment(id) {
        const deleteArr = comments.filter((item) => item.id !== id);
        setComments(deleteArr);
    }

    return (
        <div>
            <ul>
                {comments.map((item) => (
                <li key={item.id}>
                    {item.text}
                    <button type="button" className="deleteComm" onClick={() => DeleteComment(item.id)}>Удалить</button>
                </li>
                ))}
            </ul>
        </div>

    );
}

export default CommentsList;