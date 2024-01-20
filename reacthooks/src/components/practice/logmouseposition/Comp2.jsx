import React, { useState } from 'react';

const Comp2 = (ChildComponent) => {
  const NewComponent = (props) => {
    const [inputValue, setInputValue] = useState(props.initialValue);

    const onSubmit = (e) => {
      e.preventDefault();
      setInputValue("");
    }

    const onChange = (e) => {
      setInputValue(e.target.value)
    }

    return ( 
      <div>
        <ChildComponent {...props} inputValue={inputValue} onSubmit={onSubmit} onChange={onChange} />
      </div>
    );
  }
  return NewComponent;
}

export default Comp2;
