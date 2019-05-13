import React from 'react';

//stateclass component
const Delta = props =>
    <div>
        <input value={props.delta} onChange={props.handleChange}/>
    </div>
;

export default Delta;