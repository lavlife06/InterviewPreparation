import React, { useMemo, useState } from "react";

const Counter = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const increment1 = () => {
        setNumber1((prev) => prev + 1);
    };
    const increment2 = () => {
        setNumber2((prev) => prev + 1);
    };

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return number1 % 2 === 0;
    }, [number1]);

    return (
        <div style={{ marginTop: "100px" }}>
            <div>
                <button onClick={increment1}>Counter 1 - {number1}</button>
                <span>{isEven ? "EVEN" : "ODD"}</span>
            </div>
            <div>
                <button onClick={increment2}>Counter 2 - {number2}</button>
            </div>
        </div>
    );
};

export default Counter;

// Notes
//  beacuse of use of useMemo now the isEven is kind of cached value so on every rerender it doesnt rerender and block the thing
