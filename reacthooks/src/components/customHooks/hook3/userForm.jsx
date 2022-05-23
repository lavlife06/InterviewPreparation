import React, { useState } from "react";
import useInput from "./useInput";

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLastName] = useInput("");
    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Hii ${firstName + lastName} how are yaa?`);
        resetFirstName();
        resetLastName();
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstname">firstname</label>
            <input
                type="text"
                placeholder="firstname"
                name="firstname"
                {...bindFirstName}
            />
            <label htmlFor="lastname">lastname</label>
            <input
                type="text"
                placeholder="firstname"
                name="lastname"
                {...bindLastName}
            />
            <button>submit</button>
        </form>
    );
};

export default UserForm;
