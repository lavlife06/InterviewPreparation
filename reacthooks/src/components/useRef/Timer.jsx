import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
    }, []);

    return (
        <div>
            Timer - {timer}
            <button onClick={() => clearInterval(interval.current)}>
                stop timer
            </button>
        </div>
    );
};

export default Timer;
//  it can be used as  a generic container which can hold a immutable value
