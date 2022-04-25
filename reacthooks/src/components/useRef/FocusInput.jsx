import React, { useEffect, useRef } from "react";

const FocusInput = () => {
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.value = "lav";
        console.log(inputFocus, "ref");
    }, []);

    return (
        // <div>
        <input type={"text"} ref={inputFocus} />
        // </div>
    );
};

export default FocusInput;
