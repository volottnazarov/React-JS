import { useState } from "react";


function TextInput() {
    const [textInput, setTextInput] = useState();
    const getTextInput = ({target}) => {
        setTextInput(target.value)
    };
    return (
        <div className="textInput">
            <input type="text" value={textInput} onChange={getTextInput}></input>
            <p>Ваш текст: {textInput}</p>
        </div>
    );
}

export default TextInput;