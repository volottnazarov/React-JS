import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import "./todoList.css";

function TodoList() {
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);

    function AddText(params) {
        if (!text.trim()) {
            return;
        }
        setNotes([...notes, text]);
        const cardEl = document.querySelector('.card');
        cardEl.style.display = 'block';
        setText("");
    }

    function DeleteNote(i) {
        const newNotes = notes.filter((item) => item !== notes[i]);
        setNotes(newNotes);
        if (newNotes == "") {
            const cardEl = document.querySelector('.card');
            cardEl.style.display = 'none';
        }
    }
    return (
        <div className="notes">
            <TextField style={{"margin-right": "20px"}}
                required
                id="notes"
                label="Новая заметка"
                value={text}
                onChange={ (event) => setText(event.target.value) }
                margin='normal'
            />
            <Button
            onClick={AddText}
            style={{ "margin-top": "25px" }} className="btn__notes" variant="contained">Добавить</Button>
            <div className="card">
                <Box
                    component="span"
                    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
                    >
                    •
                </Box>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <ul>
                                {notes.map((item) => (
                                    <li className="ul-notes" key={notes.indexOf(item)}>{item}
                                        <CardActions>
                                            <Button onClick={() => DeleteNote(notes.indexOf(item))} size="small">
                                                <DeleteTwoToneIcon />
                                            </Button>
                                        </CardActions>
                                    </li>
                                ))}
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default TodoList;