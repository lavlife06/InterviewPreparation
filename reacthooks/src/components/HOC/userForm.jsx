import React from "react";
import WithInput from "./withInput";

const UserForm = ({ value, reset, bind }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Hii ${value} how are yaa?`);
        reset();
    };
    console.log(bind, "bind");

    const FormComponent = (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstname">firstname</label>
            <input
                type="text"
                placeholder="firstname"
                name="firstname"
                {...bind}
            />
            <button>submit</button>
        </form>
    );

    return FormComponent;
};
export default WithInput(UserForm);
