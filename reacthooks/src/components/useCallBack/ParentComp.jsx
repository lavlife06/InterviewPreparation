import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComp = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge((prev) => prev + 5);
    }, []);

    const incrementSalary = useCallback(() => {
        setSalary((prev) => prev + 20000);
    }, []);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
};

export default ParentComp;

//  Notes

// every time rerenders happens  new function is created if the func is passed to child as props
// to preven this we use useCallback Hook
//  IN the current code not even function is created on change of the states, because pf the use of prev
