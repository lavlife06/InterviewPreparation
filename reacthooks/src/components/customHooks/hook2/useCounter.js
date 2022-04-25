import { useCallback, useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(() => {
        console.log("rendered inc");

        setCounter((prev) => prev + 1);
    }, []);
    const decrement = () => {
        console.log("rendered dec");

        setCounter((prev) => prev - 1);
    };
    const reset = () => {
        console.log("rendered reset");

        setCounter(0);
    };
    console.log("rendered");
    return [counter, increment, decrement, reset];
};

export default useCounter;
