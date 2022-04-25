import React, { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    //  Issue with this effect code is that at initial counter was 0 and tehrefore because of no dependency arrray filled in didn't re run on counter change
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter(counter + 1);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [counter]);
    //  it also works without adding counter because useEffect always runs after rerendeer and that is why its important to conditinally render it
    console.log(counter, "counts outside");
    return (
        <h1
            style={{
                marginTop: "100px",
            }}
        >
            {`clicked ${counter} times`}
        </h1>
    );
};

export default Counter;
