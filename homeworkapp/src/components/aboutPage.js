import { Link } from "react-router-dom";
import { loremIpsum } from 'lorem-ipsum';

function AboutPage() {
    return (
        <>
            <h4>
                О нас
            </h4>
            <Link to="/">На главную</Link>
            <p>{loremIpsum({count:5})}</p>
        </>
    );
}

export default AboutPage;