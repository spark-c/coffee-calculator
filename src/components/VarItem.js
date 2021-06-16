import React, { useState } from 'react';


const VarItem = ({ param, onParamUpdate }) => {
    const [value, setValue] = useState(param.value);
    const [selected, setSelected] = useState(param.defaultSelected);

    const onValueChange = (newValue) => {
        onParamUpdate(param.label, newValue);
        setValue(newValue);
    };

    const onSelectedChange = (newValue) => {
        onParamUpdate(param.label, newValue);
        setSelected(newValue);
    };

    const inputDiv = selected? 
        <div className="input-wrapper">
            <input type='number' value={value} onChange={(e) => onValueChange(e.target.value)} /><span className="unit">{param.unit}</span>
        </div> :
        null

    return (
        <div className="var-item">
            <div className="var-item-label">
                <label>{param.label}</label>
                <button onClick={() => onSelectedChange(!selected)}>{selected? "del":"add"}</button>
            </div>
            {inputDiv}
        </div>
    );
};

export default VarItem;