import { useContext } from "react";
import { UserContext } from "./context";
import { ThemeContext } from "./context";

function Header() {
    const user = useContext(UserContext);       //используем useContext для доступа к контексту
    const theme = useContext(ThemeContext);    //тоже
    return (
        <div className={theme === "светлая" ? "light" : "dark"}>
            <h1>Привет {user} !</h1>
        </div>
    );
}


export default Header;