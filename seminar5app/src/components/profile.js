import { useContext, useState} from "react";
import { ThemeContext } from "./context";
import "./context.css";


function Profile() {
    const theme = useContext(ThemeContext); //используем useContext для доступа к контексту
    const [now, setNow] = useState(new Date());

    setInterval(() => {  //обновление времени каждую секунду
        setNow(new Date());
    }, 1000);

    return (
        <div className={theme === "светлая" ?  "light" : "dark"}>
            <h1>Profile</h1>
            <p>Текст Profile Текст Profile Текст Profile Текст Profile </p>
            <p>Время: {now.toLocaleTimeString()}</p>
        </div>
    );
}

export default Profile;