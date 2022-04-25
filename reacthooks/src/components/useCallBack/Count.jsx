import React, { memo } from "react";

const Count = ({ text, count }) => {
    console.log("randering", text);
    return (
        <div>
            {text} - {count}
        </div>
    );
};

export default memo(Count);
