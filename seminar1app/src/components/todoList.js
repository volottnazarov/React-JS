import { useState } from "react";
import "./todoList.css";

function TodoList() {
    const [textInput, setTextInput] = useState();
    const [arr, setArr] = useState([]);
    const getTextInput = ({target}) => {
        setTextInput(target.value)
    }
    function AddText(params) {
        if (!textInput.trim()) { //проверяем на вводимый текст, trim убирает пробелы
            return;              // если текста нет, то return
        }
        setArr([...arr, textInput]);  //через spred добавляем все старые значения плюс новое
        setTextInput("");             // очищаем поле ввода
    }
    return (
        <div>
            <input type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)}></input>
            <button onClick={AddText}>Запомнить</button>
            <ul className="list">
                {arr.map((item) => (    //через map адрессовываем массив на странице
                    <li key={arr.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;