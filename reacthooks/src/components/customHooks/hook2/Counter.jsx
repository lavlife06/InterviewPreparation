import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
    const [counter, increment, decrement, reset] = useCounter();
    return (
        <div style={{ marginTop: "100px" }}>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>{counter}</div>
        </div>
    );
};

export default Counter;
