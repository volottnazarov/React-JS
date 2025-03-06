import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({type: 'INCREMENT'});
    };
    const decrement = () => {
        dispatch({type: 'DECREMENT'});
    };
    const multipl = () => {
        dispatch({type: 'MULTIPL'});
    };
    const reset = () => {
        dispatch({type: 'RESET'});
    };
    return(
        <div>
            <h4>Счетчик:{counter}</h4>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={multipl}>Умножить на 2</button>
            <button onClick={reset}>Сброс</button>
        </div>
    )
};
