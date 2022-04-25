import { useEffect } from "react";

const useDocumentTitleUpdateHook = (count, count2) => {
    useEffect(() => {
        console.log("rerendered, count1 in effect");
        document.title = count;
    }, [count]);
    useEffect(() => {
        console.log("rerendered count2, in effect");
        document.title = count2;
    }, [count2]);
};

export default useDocumentTitleUpdateHook;
