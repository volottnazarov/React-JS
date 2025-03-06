import { createContext, useState } from "react";
import Header from "./header";
import "./context.css";
import Profile from "./profile";


export const UserContext = createContext();             //создаем контекст пользователя
export const ThemeContext = createContext();              //контекст темы

function Context() {
    const [theme, setTheme] = useState("светлая")                  //состояние темы
    const [userName, setUserName] = useState("Гость");            //состояние имя польз.

    function changeUserName(e) {  //меняем значение имени пользователя
        let newUserName = e.target.closest("div").querySelector('input').value;
        //closest - ближайший родительский элемент("div")
        setUserName(newUserName);                      //передаем новое имя
        newUserName = '';                             //очищаем поле ввода
    }

    function toggleTheme() {  //функция висит на кнопке, передает значение темная или светлая темы
        setTheme((prevTheme) => prevTheme === "светлая" ? "темная" : "светлая");
    }
    return (
        <ThemeContext.Provider value={theme}>
            <UserContext value={userName}>
                <Header />
                <input />
                <button onClick={changeUserName}>Отправить имя</button>
                <Profile />
                <button onClick={toggleTheme}>Сменить тему</button>
            </UserContext>
        </ThemeContext.Provider>
    );
}

export default Context;