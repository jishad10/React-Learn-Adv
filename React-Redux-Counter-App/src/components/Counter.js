import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

//useSelector use ko re count state ta ke ni e aschi
//action golo je create korcilam oi gola dispatch ko re use korte hobe

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    return (
        <div>
            <h2>Counter app</h2>

            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;

// 1.State -- count :0
// 2.Actions-- increment, decrement, reset
// 3.Reducers-- increament -> count= count+1
//           ---decrement -> count =count-1
//           --reset -> count =0
// 4.Store
// 5.Providing store in react
// 6. use store
