import React, { useState } from "react";

const WithInput = (WrappedComponent) => {
    const NewComponent = ({ initialValue }) => {
        const [value, setValue] = useState(initialValue);
        const reset = () => {
            setValue(initialValue);
        };
        const bind = {
            value,
            onChange: (e) => setValue(e.target.value),
        };
        console.log(initialValue, "initialValue");
        return <WrappedComponent value={value} reset={reset} bind={bind} />;
    };

    return NewComponent;
};

export default WithInput;
