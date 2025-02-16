import { useState } from "react";
import Button from '@mui/material/Button';

function CounterDuo() {
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    }

    const downCount = () => {
        if (count === 0){
            alert("COUNT: дошел до нуля!")
            return;
        }else {
            setCount(count - 1);
        }
    }
    return (
        <>
            {/* <button onClick={upCount}>Жми +</button> */}
            <Button onClick={upCount} variant="contained">Жми +</Button>
            {/* меняем на кнопку из miu */}
            <p>Count: {count}</p>
            {/* <button onClick={downCount}>Жми -</button> */}
            <Button onClick={downCount} variant="contained">Жми -</Button>
        </>
    );
}

export default CounterDuo;

//npm install @mui/material @emotion/react @emotion/styled
// подключение библиотеки компонентов miu
//import Button from '@mui/material/Button';
//импортируем красивую кнопку
// <Button variant="contained">Hello world</Button>