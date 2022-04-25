import React, { memo } from "react";

const Button = ({ children, handleClick }) => {
    console.log("Rendering button --", children);
    return <button onClick={handleClick}>{children}</button>;
};

export default memo(Button);
