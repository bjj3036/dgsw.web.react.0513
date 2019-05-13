import React from 'react';

const NumInput = (props) => {
    return (
        <div>
            <input value={props.num} onChange={props.handleChange}/>
        </div>
    );
};

export default NumInput;