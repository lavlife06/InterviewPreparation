import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({inputValue, onChange, onSubmit}) => {
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="firstname">firstname</label>
            <input
                type="text"
                placeholder="firstname"
                name="firstname"
                value={inputValue}
                onChange={onChange}
                // {...bind}
            />
            <button>submit</button>
        </form>      
    </div>
  )
}

export default Comp2(Comp1);