import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h4>
                Главная страница
            </h4>
            <Link to="/about">О нас</Link>
            <p>Добро пожаловать на наш сайт!</p>
        </>
    );
}

export default HomePage;