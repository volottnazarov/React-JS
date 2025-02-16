import { useState } from "react";
import Switch from '@mui/material/Switch';
import './themeContent.css';

function ThemeSwitcher() {
    const [theme, setTheme] = useState(true)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const lightDark = () => {
        if (theme) {
            setTheme(false)
        }else {
            setTheme(true);
        }
    }
    return (
        <>
            <Switch {...label} defaultChecked onClick={lightDark}/> День -- Сменить фон -- Ночь
            <div className={theme ? "themeContentDark" : "themeContentLight"}>
                <p>Блок меняющий цвет текста и фон при переключении темы ночь/день</p>
            </div>
        </>
    );
}

export default ThemeSwitcher;