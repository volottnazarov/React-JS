import { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./temperatureConverter.css";

function TemperatureConverter() {
    const temperatures = [
        {
            value: 'celsius',
            label: '℉ => ℃',
        },
        {
            value: 'fahrenheit',
            label: '℃ => ℉',
        },
    ]
    const [temperature, setTemperature] = useState();
    const [system, setSystem] = useState();

    function Converter(value, system) {
        if(value){
            if (system === "celsius") {
                return ((value - 32) * 5/9).toFixed(2);
            }else {
                return (value * 1.8 + 32).toFixed(2);
            }
        }
    }

    return (
        <>
            <div className="temperature">
                <div>
                    <TextField
                    required
                    id="temperValue"
                    label="Введите значение"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    margin='normal'
                    />
                </div>
                <div className="f-c">
                    <TextField
                    id="temperature"
                    select
                    label="℃/℉"
                    defaultValue="℉ => ℃"
                    onChange={(e) => setSystem(e.target.value)}
                    >
                    {temperatures.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                <div className="resultTemperature">
                    <p className="result">{Converter(temperature, system)}</p>
                </div>
            </div>
        </>
    );
}

export default TemperatureConverter;