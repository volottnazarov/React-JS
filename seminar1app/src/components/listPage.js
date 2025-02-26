import { Link } from "react-router-dom";
import { dataRoute } from "./dataRoute";

const ListPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <ul>
                {dataRoute.map((item) => (
                    <li>
                        <Link to={`./detail/${item.id}`}>
                        {item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListPage;