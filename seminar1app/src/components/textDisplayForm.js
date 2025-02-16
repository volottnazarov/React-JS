import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TextDisplayForm() {
    const [text, setText] = useState("");
    const [printedText, setPrintedText] = useState("");

    const handleText = (event) => {
        event.preventDefault(); //останавливаем отправку если поле ввода пустое
        setPrintedText(text);
        setText("");  //очищаем поле для следующего ввода

    }
    return (
        <div>
            <TextField
                label="Введите текст"
                defaultValue="Привет!"
                fullWidth
                style={ {backgroundColor: "white"} }
                variant='outlined'
                value={text}
                onChange={(e) => setText(e.target.value)}
                margin='normal'
            />
            <>
                <Button onClick={handleText} variant="contained">Готово</Button>
            </>
            <p>{printedText}</p>
        </div>
    );
}

export default TextDisplayForm;