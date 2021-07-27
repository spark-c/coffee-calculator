import React, { useState } from 'react';


const Setting = (props) => {
    const [value, setValue] = useState(
        props.defaultValue? props.defaultValue:0
    );

    return (
        <div className="setting">
            <div className="label-wrapper">
                <label>{props.label}:</label>
                <input type='number' value={value} onChange={setValue} />
            </div>
        </div>
    );
};

export default Setting;