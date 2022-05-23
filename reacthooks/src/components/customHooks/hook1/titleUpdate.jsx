import React, { useState } from "react";
import useDocumentTitleUpdateHook from "./useDocumentTitleUpdateHook";

const TitleUpdate = () => {
    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(0);

    useDocumentTitleUpdateHook(count, count2);
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>Count - {count}</button>
            <button onClick={() => setcount2(count2 + 1)}>
                Count2 - {count2}
            </button>
        </div>
    );
};

export default TitleUpdate;
