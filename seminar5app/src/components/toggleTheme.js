import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Switch } from "@mui/material";
import { loremIpsum } from 'lorem-ipsum';
import './theme.css';


const ToggleTheme = () => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch({type: 'TOGGLE_THEME'});
    }
    return (
        <div className={theme}>
            <FormControlLabel control={<Switch defaultChecked />} label="Сменить тему" onClick={toggleTheme} />
            <p>{loremIpsum({count:5})}</p>
        </div>
    );
}

export default ToggleTheme;